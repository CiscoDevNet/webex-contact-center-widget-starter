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
  @internalProperty() remainingHours = this.remaining.split(":")[0]
  @internalProperty() remainingMinutes = this.remaining.split(":")[1]
  @internalProperty() remainingSeconds = this.remaining.split(":")[2]

  @internalProperty() timer: Duration = Duration.fromObject({ hours: 8 })

  connectedCallback() {
    super.connectedCallback();
    setInterval(() => {
      this.remaining = this.end.diff(DateTime.local()).toFormat('hh:mm:ss') // This is the meat
      this.remainingHours = this.remaining.split(":")[0]
      this.remainingMinutes = this.remaining.split(":")[1]
      this.remainingSeconds = this.remaining.split(":")[2]
    }, 1000)
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <div class="container">
        <div class="timer-unit hours">${this.remainingHours}h</div>
        <div class="timer-unit minutes">${this.remainingMinutes}m</div>
        <div class="timer-unit seconds">${this.remainingSeconds}s</div>
      </div>
    `;
  }
}
