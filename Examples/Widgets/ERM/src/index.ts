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
  css,
  internalProperty,
  property
} from "lit-element";
import "./components/Summary";
import "./components/Visits";
import * as data from "./customer-data/mock-customer.json";
/**
 * Please give your widget a unique name. We recommend using prefix to identify the author and help avoid naming conflict. e.g. "2ring-timer-widget"
 */
@customElement("erm-widget")
export default class MyCustomComponent extends LitElement {
  @property({ type: String, attribute: "phone-number" }) phoneNumber:
    | string
    | undefined;

  @internalProperty() customerData!: Record<string, any>; // nice to define the interface when solidified

  connectedCallback() {
    super.connectedCallback();
    console.log(data);
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

  static get styles() {
    return css`
      :host {
        display: block;
        height: 100%;
        position: relative;
        overflow: auto;
      }
    `;
  }

  render() {
    return html`
      <div class="container">
        <customer-summary .customerData=${this.customerData}></customer-summary>
        <customer-visits .visits=${this.customerData.visits}></customer-visits>
      </div>
    `;
  }
}
