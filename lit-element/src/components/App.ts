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
import "./Hospitals";

@customElement("my-custom-component")
export default class MyCustomComponent extends LitElement {
  @property({ type: String }) localeState = "";

  @internalProperty() stateOptions: Array<string> = [];
  @internalProperty() selectedState = "";
  @internalProperty() stateCounties: Array<Object> | undefined = undefined;

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
        return data.region_code;
      });
  };

  fetchAllStates = async () => {
    await fetch(`https://api.covidtracking.com/v1/states/current.json`)
      .then((response) => {
        return response.json();
      })
      .then((allStates) => {
        Object.keys(allStates).forEach((key) => {
          const dayData = allStates[key]?.state;
          this.stateOptions.push(dayData);
        });
      });
  };

  fetchCovidDataByState = async (stateInitials: string) => {
    console.log(`[log] fetchCovidDataByState state:${stateInitials}`);
    if (!stateInitials) return;

    const key = "1318b408f01c4aa3b5f79dedc6c90848";

    return await fetch(
      `https://api.covidactnow.org/v2/counties.json?apiKey=${key}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const allCountyData = Object.values(data) as Array<any>;

        return allCountyData.filter((countyData) => {
          return countyData.state === stateInitials.toUpperCase();
        });
      });
  };

  handleStateSelection = (event: CustomEvent) => {
    this.selectedState = event?.detail?.value;
    console.log("[log] handleStateSelection", this.selectedState);
  };

  async firstUpdated(changeProperties: PropertyValues) {
    super.firstUpdated(changeProperties);

    await this.fetchAllStates();
    await this.fetchUsersLocation().then(
      (localState) => (this.localeState = localState)
    );
    console.log("[log] fetchUsersLocation", this.localeState);

    this.selectedState = this.localeState;
    await this.fetchCovidDataByState(this.selectedState).then((result) => {
      this.stateCounties = result;
    });
  }

  async updated(changeProperties: PropertyValues) {
    super.updated(changeProperties);

    if (changeProperties.has("selectedState")) {
      await this.fetchCovidDataByState(this.selectedState).then((result) => {
        this.stateCounties = result;
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
              .options=${this.stateOptions}
              placeholder="Placeholder"
              .value=${[this.selectedState]}
              @change-selected="${(e: CustomEvent) =>
                this.handleStateSelection(e)}"
            >
            </md-combobox>
          </div>
        </div>
        <div class="cases-by-location">
          <my-graph
            class="graph-widget"
            selectedState=${this.selectedState}
          ></my-graph>
          <my-table class="table-widget" .data=${this.stateCounties}></my-table>
        </div>
        <my-hospital-stats class="hospital-stats-widget"></my-hospital-stats>
      </div>
    `;
  }
}
