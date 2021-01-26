/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  html,
  LitElement,
  customElement,
  internalProperty,
  property
} from "lit-element";
import styles from "./Visits.scss";
@customElement("customer-visits")
export default class CustomerVisits extends LitElement {
  @property({ type: Array, attribute: false }) visits:
    | Array<object>
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

  // fetchCustomerDate = async (queryValue) => {
  //   return customerData
  // }

  // formatPhoneNumber() {
  //   if (true) {
  //     return formattedNumber
  //   } else return errorMessage
  // }

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
            <div class="visits-matrix"></div>
          </div>
          <div class="date"></div>
        </div>
      </div>
    `;
  }
}
