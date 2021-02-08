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
  property,
} from "lit-element";
import styles from "./HospitalItem.scss";

@customElement("my-hospital-item")
export default class HospitalItem extends LitElement {
  @property() map?: any;
  @property({ type: String }) name = "";
  @property({ type: String }) placeId = "";
  @property({ type: String }) vicinity = "";
  @property({ type: Boolean }) selected = false;
  @property({ type: Boolean }) expanded = false;

  @property({ type: String }) county = "NA";
  @property({ type: String }) statePostal = "NA";
  @property({ type: String }) bedCapacity = "NA";

  renderLoading = () => {
    return html`
      <div class="loading-wrapper">
        <md-spinner></md-spinner>
      </div>
    `;
  };

  renderDetails = () => {
    return html`
      <div class="details">
        <div class="row">
          <div class="title">Hospital</div>
          <div class="value">${this.name}</div>
        </div>
        <div class="row">
          <div class="title">Address</div>
          <div class="value">${this.vicinity}</div>
        </div>
      </div>
    `;
  };

  renderContent = () => {
    return html`
      <div class="hospital-header">
        <md-badge class="hospital-badge" color="mint" split>
          <span slot="split-left">
            ${`${this.county}, ${this.statePostal}`}
          </span>
          <span slot="split-right">${this.bedCapacity || "NA"}</span>
        </md-badge>
      </div>
      ${this.renderDetails()}
    `;
  };

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <li
        role="listitem"
        class=${`hospital-item ${this.expanded ? "expanded" : ""} ${
          this.selected ? "selected" : ""
        }`}
      >
        ${this.renderContent()}
      </li>
    `;
  }
}
