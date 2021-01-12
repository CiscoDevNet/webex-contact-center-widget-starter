/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { html, LitElement, customElement, internalProperty, property } from "lit-element";
import styles from "./App.scss";
import { logger } from "./sdk";
import { Service } from "@agentx/agentx-services-types";
@customElement("timer-component")
export default class MyCustomComponent extends LitElement {
  @property({ type: String, attribute: "start-time" }) startTime = "8:00:00"
  @property({ type: Boolean }) paused = false


  static get styles() {
    return styles;
  }
  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  render() {
    return html`
      <div class="container">
      
      </div>
    `;
  }
}
