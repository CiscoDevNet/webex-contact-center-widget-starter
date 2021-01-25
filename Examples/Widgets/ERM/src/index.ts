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
  property,
  PropertyValues
} from "lit-element";
import "./components/Summary";
import "./components/Visits";
import { data } from "./customer-data/mock-customer";
import style from "./components/App.scss";

@customElement("erm-widget")
export default class MyCustomComponent extends LitElement {
  @property({ type: String, attribute: "phone-number" }) phoneNumber:
    | string
    | undefined;

  @internalProperty() customerData!: typeof data;

  connectedCallback() {
    super.connectedCallback();
    this.customerData = data;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  // formatPhoneNumber() {
  //   if (true) {
  //     return formattedNumber
  //   } else return errorMessage
  // }

  static get styles() {
    return [
      style,
      css`
        :host {
          display: block;
          height: 100%;
          position: relative;
          overflow: auto;
        }
      `
    ];
  }

  render() {
    return html`
      <div class="container">
        <customer-summary
          .customerData=${this.customerData ? this.customerData : undefined}
          >test</customer-summary
        >
        <customer-visits
          .visits=${this.customerData.visits
            ? this.customerData.visits
            : undefined}
          >test</customer-visits
        >
      </div>
    `;
  }
}
