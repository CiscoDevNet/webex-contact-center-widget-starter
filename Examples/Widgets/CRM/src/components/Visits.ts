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
  property,
  internalProperty,
  PropertyValues
} from "lit-element";
import styles from "./Visits.scss";
import "./VisitBadge";
import { VisitTypeNames } from "./VisitBadge";
import { data } from "../customer-data/mock-customer-blob";
import { nothing } from "lit-html";
@customElement("customer-visits")
export default class CustomerVisits extends LitElement {
  @property({ type: Array, attribute: false }) visits:
    | Array<Object>
    | undefined;

  @property({ type: Object, attribute: false }) customerData?:
  | typeof data
  | undefined;

  @internalProperty() filterSelection: string | undefined = undefined;

  connectedCallback() {
    super.connectedCallback()
    let visits = this.customerData?.filter(i => i.type === "visits")[0] as unknown
    // @ts-ignore
    this.visits = visits.value
  }

  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (changedProperties.has("filterSelection")) {
      this.render();
    }
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

  static get styles() {
    return styles;
  }

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
          <md-combobox
            searchable
            .options=${VisitTypeNames}
            placeholder="Filter by Visit Type"
            allow-custom-value
            shape="pill"
            @change-selected=${(e: CustomEvent) => {
              this.filterSelection = e.detail.value;
            }}
            @remove-all-selected=${() => {
              this.filterSelection = undefined;
            }}
          ></md-combobox>
          <md-badge color="violet" small
            >${this.visits?.length} visits</md-badge
          >
          <div class="more-actions">
            <md-button hasRemoveStyle>
              <md-icon name="icon-filter_16"></md-icon>
            </md-button>
            <md-button hasRemoveStyle>
              <md-icon name="icon-more-adr_16"></md-icon>
            </md-button>
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
              ${this.visits?.map((visit : any) => {
                if (this.filterSelection === undefined) {
                  return html`
                    <visit-badge
                      .visit=${visit}
                    ></visit-badge>
                  `;
                } else {
                  return visit.title === this.filterSelection
                    ? html`
                        <visit-badge
                          .visit=${visit}
                        ></visit-badge>
                      `
                    : nothing;
                }
              })}
            </div>
          </div>
          <div class="date"></div>
        </div>
      </div>
    `;
  }
}
