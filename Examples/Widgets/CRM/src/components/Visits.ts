/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { DateTime } from "luxon";
import { html, LitElement, customElement, property } from "lit-element";
import styles from "./Visits.scss";
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
    const hour = time.hour;
    const day = time.ordinal;
    const formattedDate = time.toSQLDate();
    // this breaks hard-coded height of 400px into hour-sized chunks, & compensates for out-of-range hours and 33px baseline shift.
    const xPosition = (400 / 9) * (hour - 7) - 33;
    const yPosition = (100 / 365) * day;

    return [xPosition, yPosition, formattedDate];
  };

  renderVisitBadge = (visit: CustomerVisit) => {
    const [bottom, left, formattedDate] = this.matrixPosition(visit.date);
    return html`
    <md-tooltip message="${visit.title}" style="z-index: 100; position: absolute; bottom: ${bottom}px; left: ${left}%">
      <div class="mock-badge" >
        <span class="split-left">
          <md-badge circle small color="blue" style="margin-right: .25rem">
            <md-icon name="icon-document_12" size=12 ></md-icon>
          </md-badge>
          ${visit.title}</span>
          <span class="split-separator"> | </span>
          <span name="split-right" class="split split-right">
            ${formattedDate}
          </span>
        </div>
      </md-tooltip>
    `
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
          <md-badge color="violet" small>9 visits</md-badge>
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
