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
import styles from "./App.scss";
@customElement("customer-summary")
export default class CustomerSummary extends LitElement {
  @property({ type: String, attribute: "phone-number" }) phoneNumber:
    | string
    | undefined;

  @internalProperty() customerData!: Record<string, any>; // nice to define the interface when solidified

  static get styles() {
    return styles;
  }

  connectedCallback() {
    super.connectedCallback();
    // this.customerData = this.fetchCustomerData(number)
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  // fetchCustomerDate = async (queryValue) => {
  //   return customerData
  // }

  // formatPhoneNumber() {
  //   if (true) {
  //     return formattedNumber
  //   } else return errorMessage
  // }

  render() {
    return html`
      <div class="container">
        <customer-summary .customerData=${this.customerData}></customer-summary>
        <customer-visits .visits=${this.customerData.visits}></customer-visits>
      </div>
    `;
  }
}
