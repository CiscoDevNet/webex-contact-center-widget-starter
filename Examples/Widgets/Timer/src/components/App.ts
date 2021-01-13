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

  @query(".container") container!: HTMLElement;

  // Start with an initial value of 20 seconds
  @internalProperty() TIME_LIMIT = 20;
  @internalProperty() FULL_DASH_ARRAY = 283;
  @internalProperty() COLOR_CODES = {
    info: {
      color: "green"
    }
  };

  connectedCallback() {
    super.connectedCallback();
    setInterval(() => {
      this.remaining = this.end.diff(DateTime.local()).toFormat('hh:mm:ss') // This is the meat
      this.remainingHours = this.remaining.split(":")[0]
      this.remainingMinutes = this.remaining.split(":")[1]
      this.remainingSeconds = this.remaining.split(":")[2]
      this.timePassed = this.timePassed += 1;
      this.timeLeft = this.TIME_LIMIT - this.timePassed;
      this.container.querySelector("#base-timer-label")!.innerHTML = this.formatTimeLeft(this.timeLeft);

      this.setCircleDasharray();
    }, 1000)
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  static get styles() {
    return styles;
  }

  formatTimeLeft(time: number) {
    // The largest round integer less than or equal to the result of time divided being by 60.
    const minutes = Math.floor(time / 60);
    
    // Seconds are the remainder of the time divided by 60 (modulus operator)
    let seconds: number | string = time % 60;
    
    // If the value of seconds is less than 10, then display seconds with a leading zero
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
  
    // The output in MM:SS format
    return `${minutes}:${seconds}`;
  }

  // Divides time left by the defined time limit.
  calculateTimeFraction() {
    return this.timeLeft / this.TIME_LIMIT;
  }

  // Update the dasharray value as time passes, starting with 283
  setCircleDasharray() {
    const circleDasharray = `${(
      this.calculateTimeFraction() * this.FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    this.container.querySelector("#base-timer-path-remaining")!
      .setAttribute("stroke-dasharray", circleDasharray);
  }


  // Initially, no time has passed, but this will count up
  // and subtract from the TIME_LIMIT
  timePassed = 0;
  timeLeft = this.TIME_LIMIT;



  remainingPathColor = this.COLOR_CODES.info.color;

  render() {
    return html`
      <div class="container">
        <div class="base-timer">
          <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g class="base-timer__circle">
              <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
              <path id="base-timer-path-remaining" stroke-dasharray="283"
                class="base-timer__path-remaining ${this.remainingPathColor}" d="
                                          M 50, 50
                                          m -45, 0
                                          a 45,45 0 1,0 90,0
                                          a 45,45 0 1,0 -90,0
                                        "></path>
            </g>
          </svg>
          <span id="base-timer-label" class="base-timer__label">
            ${this.remainingHours}h
          </span>
        </div>
        <div class="timer-unit hours">${this.remainingHours}h</div>
        <div class="timer-unit minutes">${this.remainingMinutes}m</div>
        <div class="timer-unit seconds">${this.remainingSeconds}s</div>
      </div>
    `;
  }
}
