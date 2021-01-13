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
  query,
} from "lit-element";
import { nothing } from "lit-html";
import styles from "./Table.scss";

@customElement("my-table")
export default class MyCustomComponent extends LitElement {
  @property({ type: Boolean }) sorted = false;
  @property({ type: Array, attribute: false }) stateCountyData:
    | Array<Object>
    | undefined = undefined;

  @internalProperty() tableReady = false;
  @internalProperty() statePostal = "";
  @internalProperty() countyCases: Array<string> = [];
  @internalProperty() countyNewCases: Array<string> = [];

  casesHeader = "County, Total Cases, New Cases \n";
  deathsHeader = "County, Total Deaths \n";
  @internalProperty() casesTableData = this.casesHeader;
  @internalProperty() deathsTableData = this.deathsHeader;
  @internalProperty() stateTotalCases = 0;
  @internalProperty() stateTotalNewCases = 0;
  @internalProperty() stateTotalDeaths = 0;

  @query(".table-section") tableContainer!: HTMLDivElement;
  @query(".sub-body") subBody!: HTMLDivElement;

  static get styles() {
    return styles;
  }

  resetData = () => {
    this.tableReady = false;
    this.casesTableData = this.casesHeader;
    this.deathsTableData = this.deathsHeader;
    this.statePostal = "";
  };

  firstUpdated(changeProperties: PropertyValues) {
    super.firstUpdated(changeProperties);


    // @ts-ignore
    var ro = new ResizeObserver((entries: any) => {
      for (let entry of entries) {
        const cr = entry.contentRect;
        this.subBody.style.height = `${cr.height - 45}px`;
      }
    });
    ro.observe(this.tableContainer);
  }

  updated(changeProperties: PropertyValues) {
    super.updated(changeProperties);

    if (this.stateCountyData && changeProperties.has("stateCountyData")) {
      this.resetData();

      let totalStateCases = 0;
      let totalStateNewCases = 0;
      let totalStateDeaths = 0;
      let generatedCasesTableData = "";
      let generatedDeathTableData = "";

      if (this.stateCountyData.length) {
        this.statePostal = (this.stateCountyData[0] as any).state;
      }

      this.stateCountyData.forEach((countyData: any, index) => {
        const countyName = countyData.county;
        const cases = countyData.actuals.cases;
        const newCases = countyData.actuals.newCases;
        const deaths = countyData.actuals.deaths;

        totalStateCases = totalStateCases + cases;
        totalStateNewCases = totalStateNewCases + newCases;
        totalStateDeaths = totalStateDeaths + deaths;

        generatedCasesTableData =
          generatedCasesTableData + `${countyName}, ${cases}, ${newCases}`;

        generatedDeathTableData =
          generatedDeathTableData + `${countyName}, ${deaths}`;

        if (this.stateCountyData && index < this.stateCountyData?.length - 1) {
          generatedCasesTableData = generatedCasesTableData + ` \n`;
          generatedDeathTableData = generatedDeathTableData + "\n";
        }
      });

      this.stateTotalCases = totalStateCases;
      this.stateTotalNewCases = totalStateNewCases;
      this.stateTotalDeaths = totalStateDeaths;

      const statePostalValue =
        this.statePostal.length === 2 ? this.statePostal : "State";

      if (this.stateTotalCases > 0) {
        this.casesTableData =
          this.casesTableData +
          `Total ${statePostalValue} Cases, ${this.stateTotalCases}, ${this.stateTotalNewCases} \n`;

        this.casesTableData = this.casesTableData + generatedCasesTableData;

        this.deathsTableData =
          this.deathsTableData +
          `Total ${statePostalValue} Deaths, ${this.stateTotalDeaths} \n`;

        this.deathsTableData = this.deathsTableData + generatedDeathTableData;

        this.tableReady = true;
      }
    }
  }

  handleSort = () => {
    this.sorted = !this.sorted;
  };

  renderTable = (type: string) => {
    if (
      this.casesTableData.length > this.casesHeader.length &&
      type === "cases"
    ) {
      return html`
        <md-table
          class="covid-table"
          format="number"
          tabledata="${this.casesTableData}"
          ?sorting=${this.sorted}
          no-borders
        ></md-table>
      `;
    } else if (
      this.deathsTableData.length > this.deathsHeader.length &&
      this.deathsTableData &&
      type === "recovered"
    ) {
      return html`
        <md-table
          class="covid-table"
          format="number"
          tabledata="${this.deathsTableData}"
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
          <md-tooltip message="Covid-19 trends by county">
            <md-button circle hasRemoveStyle size="28"
              ><md-icon slot="icon" name="info_12"></md-icon
            ></md-button>
          </md-tooltip>
          <md-button class="button-right-align" circle hasRemoveStyle size="28"
            ><md-icon slot="icon" name="more_20"></md-icon
          ></md-button>
        </div>
        <div class="sub-body">
          <div class="tab-header-row">
            <md-tabs>
              <md-tab slot="tab">
                <span>Cases</span>
              </md-tab>
              <md-tab-panel slot="panel">
                ${this.tableReady ? this.renderTable("cases") : nothing}
              </md-tab-panel>
              <md-tab slot="tab">
                <span>Deaths</span>
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
