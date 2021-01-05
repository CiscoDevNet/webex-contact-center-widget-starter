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
} from "lit-element";
import styles from "./App.scss";
import "./Graph";
import "./Table";

@customElement("my-custom-component")
export default class MyCustomComponent extends LitElement {
  @property() selectedCountyState = "Santa Clara County, CA";

  @internalProperty() countyOptions: Array<string> = [];
  @internalProperty() selectedCounty = "";
  @internalProperty() selectedStatePostal = "";
  @internalProperty() selectedCountyFIPS = "";
  @internalProperty() stateCountyData: Array<Object> = [];

  static get styles() {
    return styles;
  }

  fetchUsersLocation = async () => {
    return fetch("https://ipapi.co/json/")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log("[log] location data", data);
        return data;
      });
  };

  fetchAllCounties = async () => {
    const key = "1318b408f01c4aa3b5f79dedc6c90848";

    return await fetch(
      `https://api.covidactnow.org/v2/counties.json?apiKey=${key}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });
  };

  generateCollections = async (allUSACounties: Array<{ fips: string, county: string, state: string }>) => {
    this.stateCountyData = [];
    const generatedStateCountyData: Object[] = [];
    this.countyOptions = [];
    const generatedCountyOptions: string[] = [];

    allUSACounties.forEach(countyData => {
      generatedCountyOptions.push(`${countyData.county}, ${countyData.state}`);

      if (this.selectedStatePostal && this.selectedStatePostal === countyData.state) {
        generatedStateCountyData.push(countyData);

        if (this.selectedCounty && this.selectedCounty === countyData.county) {
          this.selectedCountyFIPS = countyData.fips;
        }
      }
    });

    this.stateCountyData = generatedStateCountyData;
    this.countyOptions = generatedCountyOptions;
  };

  handleStateSelection = (event: CustomEvent) => {
    this.selectedCountyState = event?.detail?.value;
    this.parseCountyAndState();
    console.log("[log] handleStateSelection", this.selectedCounty, this.selectedStatePostal);
  };

  parseCountyAndState = () => {
    this.selectedCounty = this.selectedCountyState.split(', ')[0];
    this.selectedStatePostal = this.selectedCountyState.split(', ')[1];
  }

  async firstUpdated(changeProperties: PropertyValues) {
    super.firstUpdated(changeProperties);

    if (!this.selectedStatePostal) {
      await this.fetchUsersLocation().then(userLocationData => {
        console.log("[log] fetchUsersLocation DATA", userLocationData);
        // TODO figure out county user Location

        this.selectedStatePostal = userLocationData.region_code;
      });
    }

    if (this.selectedCountyState) {
      this.parseCountyAndState();
      await this.fetchAllCounties().then(result => {
        this.generateCollections(result);
      });
    }
  }

  async updated(changeProperties: PropertyValues) {
    super.updated(changeProperties);

    if (changeProperties.has('selectedCountyState')) {
      this.parseCountyAndState();
      await this.fetchAllCounties().then(result => {
        this.generateCollections(result);
      });
    }
  }

  render() {
    return html`
      <div class="container">
        <div class="main-header">
          <span class="header-text">COVID Cases by Location</span>
          <md-button circle hasRemoveStyle
            ><md-icon slot="icon" name="maximize_16"></md-icon
          ></md-button>
        </div>
        <div class="body">
          <div class="combobox-row">
            <md-combobox
              shape="pill"
              class="city-combobox"
              .options=${this.countyOptions}
              placeholder="Placeholder"
              .value=${[this.selectedCountyState]}
              @change-selected="${(e: CustomEvent) =>
                this.handleStateSelection(e)}"
            >
            </md-combobox>
          </div>
        </div>
        <div class="cases-by-location">
          <my-graph
            class="graph-widget"
            selectedCountyFIPS=${this.selectedCountyFIPS}
          ></my-graph>
          <my-table class="table-widget" .stateCountyData=${this.stateCountyData}></my-table>
        </div>
      </div>
    `;
  }
}
