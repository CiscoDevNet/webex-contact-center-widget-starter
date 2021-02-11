/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { html, LitElement, customElement, property } from "lit-element";
import { ifDefined } from "lit-html/directives/if-defined";
import styles from "./Summary.scss";
import { data } from "../customer-data/mock-customer";
import { nothing } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
@customElement("customer-summary")
export default class CustomerSummary extends LitElement {
  @property({ type: Boolean }) compact = false;
  @property({ type: Object, attribute: false }) customerData?:
    | typeof data
    | undefined;

  private get resizeClassMap() {
    return {
      compact: this.compact
    };
  }

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <div class="summary-container" part="summary">
        <section class="cust-info-header">
          <md-avatar
            src=${ifDefined(this.customerData?.picture)}
            size="56"
          ></md-avatar>
          <h1>${this.customerData?.name}</h1>
          <div class="age-gender">
            ${this.customerData?.age} years old, ${this.customerData?.gender}
          </div>
          <div class="phone">
            <md-icon name="icon-audio-call_14" size="10"></md-icon>
            ${this.customerData?.phone}
          </div>
        </section>

        <md-badge small color="green" pill="false"
          >MRN# ${this.customerData?.MRN}</md-badge
        >
        <slot class="${classMap(this.resizeClassMap)}"></slot>
      </div>
    `;
  }
}
