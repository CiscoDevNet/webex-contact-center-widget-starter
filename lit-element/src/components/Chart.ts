/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { agentxJsApi } from "@agentx/agentx-js-api";
import { html, LitElement, customElement } from "lit-element";
import styles from "./Chart.scss";

@customElement("my-chart")
export default class MyCustomComponent extends LitElement {
  static get styles() {
    return styles;
  }
  connectedCallback() {
    super.connectedCallback();
    agentxJsApi.agentContact.addEventListener("eAgentContact", (msg: any) => console.log(msg));
    document.addEventListener("eAgentContact", (msg: any) => console.log('my event listener', msg));
  }

  comboBoxOptions = [
    "Chicago, IL",
    "Denver, CO",
    "New York, NY",
    "Salt Lake City, UT",
    "San Francisco, CA"
  ];

  render() {
    return html`
      <div class="chart-section">
        <div class="header">
          <span class="header-text">Total Cases by County</span>
          <md-button circle variant="white"><md-icon slot="icon" name="info_12"></md-icon></md-button>
          <md-button circle variant="white"><md-icon slot="icon" name="more_20"></md-icon></md-button>
        </div>
        <div class="body">
        </div>
      </div>
    `;
  }
}
