/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { data } from "@/customer-data/mock-customer";
import { DateTime, Duration } from "luxon";
import { html, LitElement, customElement, property } from "lit-element";
import styles from "./Visits.scss";
import { weekStartDays } from "@momentum-ui/web-components/dist/types/components/datepicker/DatePicker";
@customElement("customer-visits")
export default class CustomerVisits extends LitElement {
  @property({ type: Array, attribute: false }) visits:
    | Array<CustomerVisit>
    | undefined;

  static get styles() {
    return styles;
  }

  connectedCallback() {
    super.connectedCallback();
    console.log(this.visits);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  generateTime = (i: number | string | undefined) => {
    if (typeof i === "number") {
      if (i >= 8 && i <= 16) {
        return html`
          <div class="time-of-day">
            ${String(i).padStart(2, "0")}:00
          </div>
        `;
      }
    } else if (typeof i === "undefined") {
      return html`
        <div class="month-line"></div>
      `;
    } else if (typeof i === "string") {
      return html`
        <div class="month">
          ${i}
        </div>
      `;
    }
  };

  matrixPosition = (date: string) => {
    const time = DateTime.fromISO(date).toLocal();
    const adjustedTime = time.minus({ minutes: 450 }); // 60 * 7.5 to set baseline of 7:30
    const hour = time.hour;
    // debugger;
    // const month = time.month;
    const day = time.day;

    // 0 out of 100 should equal 7:30AM  -  7 hours
    // 100 out of 100 should equal 16:30PM  -
    const xPosition = (400 / 9) * (hour - 7) - 33;
    console.log(time, hour);
    // const yPosition = (100 / 12) * month;
    // 0 is 0 days
    // 100 is 365 days
    const yPosition = (100 / 365) * day;

    return [xPosition, yPosition];
  };

  renderVisitBadge = (visit: CustomerVisit) => {
    const [bottom, left] = this.matrixPosition(visit.date);
    return html`
      <md-badge
        color="blue"
        small
        style="position: absolute; bottom: ${bottom}px; left: ${left}%"
      >
        ${visit.date}
      </md-badge>
    `;
  };

  render() {
    const hours = [...Array(24).keys()];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    return html`
      <div class="visits-container" part="visits">
        <div class="filters">
          <md-input searchable shape="pill"></md-input>
          <md-badge color="violet">9 visits</md-badge>
          <div class="more-actions">
            <md-icon name="icon-filter_16"></md-icon>
            <md-icon name="icon-more-adr_16"></md-icon>
          </div>
        </div>
        <div class="visits-grid">
          <div class="time">
            ${hours.map(i => this.generateTime(i))}
          </div>
          <div class="year">2020</div>
          <div class="months">
            <div class="months-line">
              ${months.map(i => this.generateTime(undefined))}
            </div>
            <div class="month-names">
              ${months.map(i => this.generateTime(i))}
            </div>
          </div>
          <div class="matrix-wrapper">
            <div class="visits-matrix">
              ${this.visits?.map(visit => this.renderVisitBadge(visit))}
            </div>
          </div>
          <div class="date"></div>
        </div>
      </div>
    `;
  }
}
