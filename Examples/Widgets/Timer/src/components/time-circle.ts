/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { DateTime, Duration } from "luxon";
import { html, LitElement, customElement, internalProperty, property, query, PropertyValues } from "lit-element";
import styles from "./App.scss";
@customElement("time-circle")
export default class MyCustomComponent extends LitElement {
  @property({ type: Number, attribute: "time-limit" }) timeLimit = 0;
  @property({ type: Number, attribute: "time-left" }) timeLeft = 0;
  @property({ type: String}) color = "green";
  @query(".wrapper") wrapper!: HTMLElement;
  @internalProperty() FULL_DASH_ARRAY = 283;

  timePassed: number = this.timeLimit - this.timeLeft;

  connectedCallback() {
    super.connectedCallback();
  }

  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties)
    if (changedProperties.has("timeLeft")) {
      this.timePassed = this.timePassed += 1;
      this.setCircleDasharray();
    }
  }

  static get styles() {
    return styles;
  }

  // Divides time left by the defined time limit.
  calculateTimeFraction() {
    return this.timeLeft / this.timeLimit;
  }

  // Update the dasharray value as time passes, starting with 283
  setCircleDasharray() {
    const circleDasharray = `${(
      this.calculateTimeFraction() * this.FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    this.wrapper.querySelector("#base-timer-path-remaining")!
      .setAttribute("stroke-dasharray", circleDasharray);
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="base-timer">
          <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g class="base-timer__circle">
              <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
              <path id="base-timer-path-remaining" stroke-dasharray="283"
                class="base-timer__path-remaining" style="stroke: ${this.color};" d="
                  M 50, 50
                  m -45, 0
                  a 45,45 0 1,0 90,0
                  a 45,45 0 1,0 -90,0
                "></path>
            </g>
          </svg>
          <span id="base-timer-label" class="base-timer__label">
            <slot name="time-unit"></slot>
          </span>
        </div>
      </div>
    `;
  }
}
