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
@customElement("customer-summary")
export default class CustomerSummary extends LitElement {
  @property({ type: Object, attribute: false }) customerData?:
    | typeof data
    | undefined; // nice to define the interface when solidified

  static get styles() {
    return styles;
  }

  connectedCallback() {
    super.connectedCallback();
    console.log(this.customerData);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  render() {
    return html`
      <div class="summary-container" part="summary">
        <section class="cust-info-header">
          <md-avatar src=${ifDefined(
            this.customerData?.picture
          )} size="56"></md-avatar>
          <h1>${this.customerData?.name}</h1>
          <div class="age-gender">
            ${this.customerData?.age} years old, ${this.customerData?.gender}
          </div>
          <div class="phone">${this.customerData?.phone}</div>
        </section>

        <md-badge small color="green" pill="false"
          >MRN# ${this.customerData?.MRN}</md-badge
        >
        <table>
          <tr>
            <td class="title">
              Date of Birth
            </td>
            <td class="value">
              ${this.customerData?.DOB}
            </td>
          </tr>
          <tr>
            <td class="title">
              Address
            </td>
            <td class="value">
              ${this.customerData?.address}
            </td>
          </tr>
          <tr>
            <td class="title">
              Insurance
            </td>
            <td class="value">
              <span>${this.customerData?.insurance.provider}</span><br>
              <span>${this.customerData?.insurance.planName}</span><br>
              <span>${this.customerData?.insurance.planNumber}</span><br>
              <span>${this.customerData?.insurance.groupNumber}</span><br>
              <span>${this.customerData?.insurance.memberID}</span>
            </td>
          </tr>
          <tr>
            <td class="title">
              Next of Kin
            </td>
            <td class="value">
              <span>${this.customerData?.nextToKin.name} ${this.customerData?.nextToKin["phone number"]}</span>
            </td>
          </tr>
          <tr>
            <td class="title">
              Conditions
            </td>
            <td class="value">
              ${this.customerData?.conditions.map(condition => html`<span>${condition}</span><br>`)}
            </td>
          </tr>
          <tr>
            <td class="title">
              Allergies
            </td>
            <td class="value">
              ${this.customerData?.allergies.map((allergy, i, arr) => {
                return html`<span>${allergy}</span>${i < arr.length - 1 ? " | " : nothing}`})}
            </td>
          </tr>
          
        </table>
      </div>
    `;
  }
}
