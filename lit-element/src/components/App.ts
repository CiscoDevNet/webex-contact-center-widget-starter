/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { agentxJsApi } from "@agentx/agentx-js-api";
import { html, LitElement, customElement, internalProperty, PropertyValues } from "lit-element";
import styles from "./App.scss";
import "./Graph";
import "./Chart";

@customElement("my-custom-component")
export default class MyCustomComponent extends LitElement {
  static get styles() {
    return styles;
  }

  @internalProperty() stateOptions: Array<string> = [];
  @internalProperty() selectedState = "";

  // connectedCallback() {
  //   super.connectedCallback();
  //   agentxJsApi.agentContact.addEventListener("eAgentContact", (msg: any) => console.log(msg));
  //   document.addEventListener("eAgentContact", (msg: any) => console.log('my event listener', msg));
  // }

  fetchAllStates = async () => {
    await fetch(`https://api.covidtracking.com/v1/states/current.json`)
    .then(response => {
      return response.json();
    })
    .then(allStates => {
      // console.log('stateData', stateData, stateData[0].dateChecked);
      Object.keys(allStates).forEach(key => {
        const dayData = allStates[key]?.state;
        // console.log('[log] each state', dayData);

        this.stateOptions.push(dayData);
      });
      // return stateData;
    }).then(() => {
      console.log('[log] stateOptions completed', this.stateOptions);
    });
  }

  handleStateSelection = (event: CustomEvent) => {
    this.selectedState = event?.detail?.value;
    console.log('[log] handleStateSelection', this.selectedState);

  }

  // // selected-changed
  async firstUpdated(changeProperties: PropertyValues) {
    super.firstUpdated(changeProperties);

    await this.fetchAllStates();
    this.selectedState = this.stateOptions[0];
  }

  render() {
    return html`
      <div class="container">
        <div class="header">
          <span class="header-text">COVID Cases by Location</span>
          <md-button circle variant="white"><md-icon slot="icon" name="maximize_16"></md-icon></md-button>
        </div>
        <div class="body">
        <div class="combobox-row">
          <md-combobox
            shape="pill"
            class="city-combobox"
            .options=${this.stateOptions}
            placeholder="Placeholder"
            .value=${[this.stateOptions[0]]}
            @change-selected="${(e: CustomEvent) => this.handleStateSelection(e)}"></md-combobox>
        </div>
        <div class="cases-by-location">
          <my-graph selectedState=${this.selectedState}></my-graph>
          <my-chart></my-chart>
        </div>
      </div>
    `;
  }
}
