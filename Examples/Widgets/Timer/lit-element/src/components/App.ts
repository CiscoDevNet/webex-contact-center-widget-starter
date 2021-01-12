/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { DateTime, Duration } from "luxon";
import { html, LitElement, customElement, internalProperty, property } from "lit-element";
import styles from "./App.scss";
@customElement("timer-component")
export default class MyCustomComponent extends LitElement {
  @property({ type: String }) duration = "PT8H" // ISO Format . . . can make easier
  @property({ type: String, attribute: "start-time" }) startTime = "19:56:19Z" // ISO Format . . . can make easier
  @property({ type: Boolean }) paused = false
  @property({ type: Boolean }) countDown = false

  @internalProperty() now = DateTime.fromISO("19:56:19Z")
  @internalProperty() end = DateTime.fromISO("19:56:19Z").plus(Duration.fromISO(this.duration))
  @internalProperty() remaining = this.end.diff(DateTime.local()).toFormat('hh:mm:ss')
  @internalProperty() remainingHours = this.end.diff(DateTime.local()).toFormat('hh')
  @internalProperty() remainingMinutes = this.end.diff(DateTime.local()).milliseconds
  @internalProperty() remainingSeconds = this.end.diff(DateTime.local()).toFormat('ss')

  @internalProperty() timer: Duration = Duration.fromObject({ hours: 8 })

  connectedCallback() {
    super.connectedCallback();
    setInterval(() => {
      this.remaining = this.end.diff(DateTime.local()).toFormat('hh:mm:ss') // This is the meat
      this.remainingHours = this.end.diff(DateTime.local()).toFormat('hh')
      this.remainingMinutes = this.end.diff(DateTime.local()).milliseconds
      this.remainingSeconds = this.end.diff(DateTime.local()).toFormat('s')
    }, 1000)
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  static get styles() {
    return styles;
  }

  formatNumber = (interval: string): string => { // this might still be useful
    function padDigit(num: number) {
      if (num < 10) {
        return `0${num}`
      } else return num.toString()
    }
    switch (interval) {
      case "hour":
        return padDigit(DateTime.local().hour).concat("h")
      case "minute":
        return padDigit(DateTime.local().minute).concat("m")
      case "second":
        return padDigit(DateTime.local().second).concat("s")
      default:
        return "00"
    }
  }

  render() {
    return html`
      <div class="container">
        <span>${this.remainingHours}h:${this.remainingMinutes}m:${this.remainingSeconds}s</span>
        <p>${this.remaining}</p>
      </div>
    `;
  }
}
