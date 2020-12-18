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
  PropertyValues,
} from "lit-element";
import { nothing } from "lit-html";
import styles from "./Table.scss";

@customElement("my-table")
export default class MyCustomComponent extends LitElement {
  @property({ type: Boolean }) sorted = false;
  @property({ type: Array, attribute: false }) data:
    | Array<Object>
    | undefined = undefined;

  @internalProperty() tableReady = false;
  @internalProperty() countyCases: Array<string> = [];
  @internalProperty() countyNewCases: Array<string> = [];

  header = "County, Total Cases, New Cases \n";
  @internalProperty() casesTableData = this.header;
  @internalProperty() recoveredTableData = this.header;

  static get styles() {
    return styles;
  }

  resetData = () => {
    this.tableReady = false;
    this.casesTableData = this.header;
  };

  updated(changeProperties: PropertyValues) {
    super.updated(changeProperties);

    if (changeProperties.has("data")) {
      this.casesTableData = this.header;
      this.resetData();

      this.data?.forEach((countyData: any, index) => {
        const countyName = countyData.county;
        const cases = countyData.actuals.cases;
        const newCases = countyData.actuals.newCases;
        this.casesTableData =
          this.casesTableData + `${countyName}, ${cases}, ${newCases}`;

        if (this.data && index < this.data?.length - 1) {
          this.casesTableData = this.casesTableData + ` \n`;
        }
      });
      this.tableReady = true;
    }
  }

  handleSort = () => {
    this.sorted = !this.sorted;
  };

  renderTable = (type: string) => {
    if (type === "cases") {
      return html`
        <md-table
          tabledata="${this.casesTableData}"
          ?sorting=${this.sorted}
          no-borders
        ></md-table>
      `;
    } else if (type === "recovered") {
      return html`
        <md-table
          tabledata="${this.recoveredTableData}"
          ?sorting=${this.sorted}
          no-borders
        ></md-table>
      `;
    }
  };

  render() {
    return html`
      <div class="table-section">
        <div class="header">
          <span class="header-text">Total Cases by County</span>
          <md-button circle hasRemoveStyle size="28"
            ><md-icon slot="icon" name="info_12"></md-icon
          ></md-button>
          <md-button class="button-right-align" circle hasRemoveStyle size="28"
            ><md-icon slot="icon" name="more_20"></md-icon
          ></md-button>
        </div>
        <div class="sub-body">
          <div class="tab-header-row">
            <md-button
              class="sort-button-icon button-right-align"
              @button-click=${this.handleSort}
              circle
              hasRemoveStyle
              size="28"
            >
              <md-icon slot="icon" name="sort-down_16"></md-icon>
            </md-button>
            <md-tabs>
              <md-tab slot="tab">
                <span>Cases</span>
              </md-tab>
              <md-tab-panel slot="panel">
                ${this.tableReady ? this.renderTable("cases") : nothing}
              </md-tab-panel>
              <md-tab slot="tab">
                <span>Recovered</span>
              </md-tab>
              <md-tab-panel slot="panel">
                ${this.tableReady ? this.renderTable("recovered") : nothing}
              </md-tab-panel>
            </md-tabs>
          </div>
        </div>
      </div>
    `;
  }
}
