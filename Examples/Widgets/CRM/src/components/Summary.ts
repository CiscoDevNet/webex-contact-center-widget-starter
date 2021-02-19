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
import { data } from "../customer-data/mock-customer-blob";
import { classMap } from "lit-html/directives/class-map";
@customElement("customer-summary")
export default class CustomerSummary extends LitElement {
  @property({ type: Boolean }) compact = false;
  @property({ type: String, attribute: "phone-number" }) phoneNumber:
    | string
    | undefined;
  @property({ type: Object, attribute: false }) customerData?:
    | typeof data
    | undefined;

  private get resizeClassMap() {
    return {
      compact: this.compact
    };
  }

  getValue(search: string): string {
    let value: any;
    const result: any = this.customerData?.filter(x => x.label === search);
    value = result[0].value;
    return value;
  }

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <div class="summary-container" part="summary">
        <section class="cust-info-header">
          <md-avatar
            src=${ifDefined(this.getValue("Picture"))}
            size="56"
          ></md-avatar>
          <h1>${ifDefined(this.getValue("Name"))}</h1>
          <div class="age-gender">
            ${ifDefined(this.getValue("Age"))} years old,
            ${ifDefined(this.getValue("Gender"))}
          </div>
          <div class="phone">
            <md-icon name="icon-audio-call_14" size="10"></md-icon>
            ${this.phoneNumber || ifDefined(this.getValue("Phone"))}
          </div>
        </section>

        <md-badge small color="green" pill="false"
          >MRN# ${ifDefined(this.getValue("MRN"))}</md-badge
        >
        <slot class="${classMap(this.resizeClassMap)}"></slot>
      </div>
    `;
  }
}
