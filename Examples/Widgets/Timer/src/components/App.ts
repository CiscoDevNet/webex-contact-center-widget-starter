/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { DateTime, Duration, Interval } from "luxon";
import { html, LitElement, customElement, internalProperty, property, query } from "lit-element";
import styles from "./App.scss";
import "./time-circle"
@customElement("timer-component")
export default class TimerComponent extends LitElement {
  @property({ type: String, reflect: true }) duration = ""
  @property({ type: String, reflect: true }) remaining = ""
  @property({ type: Boolean }) paused = false
  @property({ type: String, attribute: "hours-color" }) hoursColor = "#0A78CC"
  @property({ type: String, attribute: "minutes-color" }) minutesColor = "#73A321"
  @property({ type: String, attribute: "seconds-color" }) secondsColor = "#875AE0"

  @internalProperty() endTime = "";
  @internalProperty() durationData!: Duration;
  @internalProperty() remainingHours!: string;
  @internalProperty() remainingMinutes!: string;
  @internalProperty() remainingSeconds!: string;

  @query(".container") container!: HTMLElement;

  /**
   * Storage is origin-isolated in the iframe shell (often in-memory).
   * Scope keys to this widget. Do not use localStorage as a sibling bus.
   * Legacy unprefixed keys are read once so existing timers keep running.
   */
  private readonly storageStartKey = "timer-widget:start";
  private readonly storageDurationKey = "timer-widget:duration";

  get storedStartTime() {
    return (
      window.localStorage.getItem(this.storageStartKey) ||
      window.localStorage.getItem("timer-start") ||
      DateTime.local().toString()
    );
  }
  get storedDuration() {
    return (
      window.localStorage.getItem(this.storageDurationKey) ||
      window.localStorage.getItem("timer-duration") ||
      this.duration
    );
  }

  private writeStorage(startTime: string, duration: string) {
    window.localStorage.setItem(this.storageStartKey, startTime);
    window.localStorage.setItem(this.storageDurationKey, duration);
    window.localStorage.removeItem("timer-start");
    window.localStorage.removeItem("timer-duration");
  }

  private clearStorage() {
    window.localStorage.removeItem(this.storageStartKey);
    window.localStorage.removeItem(this.storageDurationKey);
    window.localStorage.removeItem("timer-start");
    window.localStorage.removeItem("timer-duration");
  }

  private emitExpired() {
    const message = `${this.duration} long timer has expired`;
    // Sibling widgets in other iframe-shell slots will not see CustomEvent.
    window.postMessage(
      {
        type: "WXCC_WIDGET_EVENT",
        event: "timer-expired",
        payload: message,
        timestamp: Date.now()
      },
      "*"
    );
    // Same-document listeners (in-page / Storybook) still receive this.
    this.dispatchEvent(
      new CustomEvent("timer-expired", {
        bubbles: true,
        composed: true,
        detail: { payload: message }
      })
    );
  }

  connectedCallback() {
    super.connectedCallback();
    this.setDuration(this.storedStartTime, this.storedDuration)
    setInterval(() => {
      if (!this.paused) {
        this.durationData = this.durationData.minus({ seconds: 1 })
        this.remaining = this.durationData.toFormat('hh:mm:ss');
        let [hours, minutes, seconds] = this.durationData.toFormat('hh:mm:ss').split(":");
        this.remainingHours = hours
        this.remainingMinutes = minutes
        this.remainingSeconds = seconds
        if (hours === "00" && minutes === "00" && seconds === "00") {
          this.paused = true;
          this.clearStorage();
          this.emitExpired();
        }
      }
    }, 1000)
  }

  setDuration = (startTime: string, duration: string) => {
    this.writeStorage(startTime, duration);
    let [hours, minutes, seconds] = duration.split(":")
    const durationObj = { hours: Number(hours), minutes: Number(minutes), seconds: Number(seconds) }
    const start = DateTime.fromISO(startTime)
    const end = start.plus(Duration.fromObject(durationObj))
    this.endTime = end.toLocal().toFormat("h:mm:ss a")
    const now = DateTime.local()
    if (now > end) { this.resetTimer() }
    const remaining = Interval.fromDateTimes(now, end)
    this.durationData = Duration.fromObject(remaining.toDuration(['hours', 'minutes', 'seconds']).toObject())
  }

  public resetTimer = async () => {
    await (async (durationValue) => {
      this.writeStorage(DateTime.local().toString(), durationValue);
    })(this.duration);
    this.paused = false;
    this.setDuration(this.storedStartTime, this.duration)
  }

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <div class="container" role="timer"
          title="Your shift ends at ${this.endTime}"
          aria-label="${this.remainingHours} hours, ${this.remainingMinutes} minutes, ${this.remainingSeconds} seconds remaining">
          <time-circle time-limit=8 time-left=${Number(this.remainingHours)} color=${this.hoursColor}>
            <div slot="time-unit" class="hours" aria-label="${this.remainingHours} hours">${this.remainingHours}h</div>
          </time-circle>
          <time-circle time-limit=60 time-left=${Number(this.remainingMinutes)} color=${this.minutesColor}>
            <div slot="time-unit" class="minutes" aria-label="${this.remainingMinutes} minutes">${this.remainingMinutes}m
            </div>
          </time-circle>
          <time-circle time-limit=60 time-left=${Number(this.remainingSeconds)} color=${this.secondsColor}>
            <div slot="time-unit" class="seconds" aria-label="${this.remainingSeconds} seconds">${this.remainingSeconds}s
            </div>
          </time-circle>
        </div>
    `;
  }
}
