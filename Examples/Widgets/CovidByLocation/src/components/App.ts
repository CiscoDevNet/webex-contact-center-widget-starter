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
  PropertyValues,
  property,
  query,
} from "lit-element";
import styles from "./App.scss";
import "./Graph";
import "./Table";

@customElement("my-custom-component")
export default class MyCustomComponent extends LitElement {
  /**
   * Property: apiKey
   * Access API Key: Covid Act Now Website
   * https://apidocs.covidactnow.org/access
   */
  @property({ type: String, reflect: true, attribute: "api-key" }) apiKey = "";
  @property({ type: String }) selectedCountyState = "";

  @internalProperty() allCounties?: Array<{
    fips: string;
    county: string;
    state: string;
  }>;
  @internalProperty() countyOptions: Array<string> = [];
  @internalProperty() selectedCounty = "";
  @internalProperty() selectedStatePostal = "";
  @internalProperty() selectedCountyFIPS = "";
  @internalProperty() stateCountyData: Array<Object> = [];
  @internalProperty() columnView = false;

  @query(".cases-by-location") flexContainer!: HTMLDivElement;

  static get styles() {
    return styles;
  }

  fetchAllCounties = async () => {
    return await fetch(
      `https://api.covidactnow.org/v2/counties.json?apiKey=${this.apiKey}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.allCounties = data;
        return data;
      });
  };

  generateCollections = async (
    selectedCounty: string,
    selectedStatePostal: string
  ) => {
    this.stateCountyData = [];
    const generatedStateCountyData: Object[] = [];
    this.countyOptions = [];
    const generatedCountyOptions: string[] = [];

    if (this.allCounties && selectedStatePostal && selectedCounty) {
      this.allCounties.forEach((countyData) => {
        generatedCountyOptions.push(
          `${countyData.county}, ${countyData.state}`
        );

        if (selectedStatePostal === countyData.state) {
          generatedStateCountyData.push(countyData);

          if (selectedCounty === countyData.county) {
            this.selectedCountyFIPS = countyData.fips;
          }
        }
      });

      this.stateCountyData = generatedStateCountyData;
      this.countyOptions = generatedCountyOptions;
    }
  };

  handleStateSelection = (event: CustomEvent) => {
    this.selectedCountyState = event?.detail?.value;
  };

  handleClear = () => {
    this.stateCountyData = [];
    this.selectedCounty = "";
    this.selectedCountyFIPS = "";
  };

  parseCountyAndState = () => {
    if (this.selectedCountyState) {
      this.selectedCounty = this.selectedCountyState.split(", ")[0];
      this.selectedStatePostal = this.selectedCountyState.split(", ")[1];
    }
  };

  async firstUpdated(changeProperties: PropertyValues) {
    super.firstUpdated(changeProperties);

    // @ts-ignore
    var ro = new ResizeObserver((entries: any) => {
      for (let entry of entries) {
        const cr = entry.contentRect;

        if (cr.width > 589) {
          this.columnView = false;
        } else {
          this.columnView = true;
        }
      }
    });
    ro.observe(this.flexContainer);

    if (this.selectedCountyState) {
      this.parseCountyAndState();
      await this.fetchAllCounties().then(() => {
        this.generateCollections(this.selectedCounty, this.selectedStatePostal);
      });
    }
  }

  async updated(changeProperties: PropertyValues) {
    super.updated(changeProperties);

    if (this.allCounties && this.selectedCountyState && changeProperties.has("selectedCountyState")) {
      this.parseCountyAndState();
      this.generateCollections(this.selectedCounty, this.selectedStatePostal);
    }
  }

  render() {
    return html`
      <div class="container">
        <div class="app-header">
          <div class="combobox-row">
            <md-combobox
              shape="pill"
              class="city-combobox"
              .options=${this.countyOptions}
              placeholder="US County"
              .value=${[this.selectedCountyState]}
              @remove-all-selected=${() => this.handleClear()}
              @change-selected="${(e: CustomEvent) =>
                this.handleStateSelection(e)}"
            >
            </md-combobox>
          </div>
        </div>
        <div
          class=${`cases-by-location ${this.columnView ? "column-view" : ""}`}
        >
          <my-graph
            api-key=${this.apiKey}
            class="graph-widget"
            selectedCountyFIPS=${this.selectedCountyFIPS}
          ></my-graph>
          <my-table
            class="table-widget"
            .stateCountyData=${this.stateCountyData}
          ></my-table>
        </div>
      </div>
    `;
  }
}
