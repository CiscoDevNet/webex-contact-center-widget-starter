/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { html, LitElement, customElement, PropertyValues, property, internalProperty, query } from "lit-element";
import Chart from 'chart.js';
import styles from "./Graph.scss";
import { RadioGroup } from "@momentum-ui/web-components";

@customElement("my-graph")
export default class MyCustomComponent extends LitElement {
  @property({ type: String }) locale = "en-US";
  @property({ type: String }) selectedState = "AK";

  @internalProperty() myChart = undefined;
  @internalProperty() label: Array<string> = [];
  @internalProperty() activeCases: Array<number> = [];
  @internalProperty() dailyNewCases: Array<number> = [];
  @internalProperty() specificity = "Monthy";

  static get styles() {
    return styles;
  }

  @query("md-radiogroup") radioGroup!: RadioGroup;

  clearData = () => {
    this.label = [];
    this.activeCases = [];
    this.dailyNewCases = [];
  }

  renderChart = () => {
    const ctx = (this.shadowRoot?.getElementById('myChart') as any).getContext('2d');

    this.myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.label,
        datasets: [
        //   {
        //   label: 'Daily New Cases',
        //   data: this.dailyNewCases,
        //   backgroundColor: '#A87FF0',
        //   borderColor: '#ffffff',
        //   borderWidth: 1
        // }, 
        {
          label: 'Active Cases',
          data: this.activeCases,
          backgroundColor: '#E2CAFC',
          borderColor: '#ffffff',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  fetchCovidDataByState = async (state: string) => {
    if (!state) {
      return;
    }

    this.clearData();
    console.log('[log] fetchCovidDataByState', `state:${state}`);

    await fetch(`https://api.covidtracking.com/v1/states/${state}/daily.json`)
    .then(response => {
      return response.json();
    })
    .then(stateData => {
      Object.keys(stateData).forEach((key, index) => {
        if (Number(key) > 6) {
          return;
        }
        const dayData = stateData[key];

        const date: string = dayData.dateChecked;
        const dateObject = new Date(date);
        const localDate = dateObject.toLocaleDateString(this.locale, { month: 'numeric', day: 'numeric' });
        console.log('[log]: localDate', index, localDate);
        this.label.push(localDate);
        this.activeCases.push(dayData.positive);
        this.dailyNewCases.push(dayData.positiveIncrease);
        return;
      });
    }).then(() => {
      console.log('[log]: complete', this.activeCases);
    })
  }

  handleRadioChange = (event: CustomEvent) => {
    this.specificity = event?.detail?.selected;
  }

  async firstUpdated(changeProperties: PropertyValues) {
    super.firstUpdated(changeProperties);
    await new Promise(resolve => setTimeout(resolve, 0));

    this.radioGroup.addEventListener("radio-change", this.handleRadioChange as EventListener);
  }

  protected async updated(changeProperties: PropertyValues) {
    super.updated(changeProperties);

    if (changeProperties.has("specificity")) {
      // TODO: fetch data or parse data by specificity. Only have daily at the moment.
    }

    if (changeProperties.has("selectedState")) {
      console.log('[log]: updated & fetchCovidDataByState');
      await this.fetchCovidDataByState(this.selectedState);
      this.renderChart();
    }
  }

  render() {
    return html`
      <div class="graph-section">
        <div class="header">
          <span class="header-text">Active Cases Trend</span>
          <md-button circle variant="white"><md-icon slot="icon" name="info_12"></md-icon></md-button>
          <md-button circle variant="white"><md-icon slot="icon" name="more_20"></md-icon></md-button>
        </div>
        <div class="body">
          <md-radiogroup group-label="group_process" alignment="horizontal" value=>
            <md-radio slot="radio" value="Daily">Daily</md-radio>
            <md-radio slot="radio" value="Weekly">Weekly</md-radio>
            <md-radio slot="radio" value="Monthly">Monthly</md-radio>
          </md-radiogroup>
          <canvas id="myChart" width="262" height="140"></canvas>
        </div>
      </div>
    `;
  }
}
