/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { DateTime, Duration } from "luxon";
import { html, LitElement, customElement, internalProperty, property, query } from "lit-element";
import styles from "./App.scss";
import "./time-circle"
@customElement("timer-component")
export default class MyCustomComponent extends LitElement {
  @property({ type: String }) duration = "PT8H" // ISO Format . . . can make easier
  @property({ type: String, attribute: "start-time" }) startTime = "13:56:19" // ISO Format . . . can make easier
  @property({ type: String, attribute: "hours-color" }) hoursColor = "#0A78CC"
  @property({ type: String, attribute: "minutes-color" }) minutesColor = "#73A321"
  @property({ type: String, attribute: "seconds-color" }) secondsColor = "#875AE0"
  @property({ type: Boolean }) paused = false

  @internalProperty() end = DateTime.fromISO("13:56:19").plus(Duration.fromISO(this.duration))
  @internalProperty() remaining = this.end.diff(DateTime.local()).toFormat('hh:mm:ss')
  @internalProperty() remainingHours = this.remaining.split(":")[0]
  @internalProperty() remainingMinutes = this.remaining.split(":")[1]
  @internalProperty() remainingSeconds = this.remaining.split(":")[2]

  @query(".container") container!: HTMLElement;

  connectedCallback() {
    super.connectedCallback();
    if (!this.paused) {
      setInterval(() => {
        this.remaining = this.end.diff(DateTime.local()).toFormat('hh:mm:ss') // This is the meat
        this.remainingHours = this.remaining.split(":")[0]
        this.remainingMinutes = this.remaining.split(":")[1]
        this.remainingSeconds = this.remaining.split(":")[2]
      }, 1000)
    }
  }

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <div class="container">
        <time-circle time-limit=8 time-left=${Number(this.remainingHours)} color=${this.hoursColor}>
          <div slot="time-unit" class="hours">${this.remainingHours}h</div>
        </time-circle>
        <time-circle time-limit=60 time-left=${Number(this.remainingMinutes)} color=${this.minutesColor}>
          <div slot="time-unit" class="minutes">${this.remainingMinutes}m</div>
        </time-circle>
        <time-circle time-limit=60 time-left=${Number(this.remainingSeconds)} color=${this.secondsColor}>
          <div slot="time-unit" class="seconds">${this.remainingSeconds}s</div>
        </time-circle>
      </div>
    `;
  }
}
