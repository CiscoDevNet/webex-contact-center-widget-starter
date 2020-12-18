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
  PropertyValues,
  property,
  internalProperty,
  query,
} from "lit-element";
// import { RadioGroup } from "@momentum-ui/web-components";
import Chart from "chart.js";
import styles from "./Graph.scss";

@customElement("my-graph")
export default class MyCustomComponent extends LitElement {
  @property({ type: String }) locale = "en-US";
  @property({ type: String }) selectedState = "";

  @internalProperty() myChart: Chart | undefined = undefined;
  @internalProperty() label: Array<string> = [];
  @internalProperty() activeCases: Array<number> = [];
  @internalProperty() dailyNewCases: Array<number> = [];
  @internalProperty() specificity = "Monthy";

  static get styles() {
    return styles;
  }

  @query("md-radiogroup") radioGroup!: Element;

  clearData = () => {
    this.label = [];
    this.activeCases = [];
    this.dailyNewCases = [];
  };

  renderChart = () => {
    const ctx = (this.shadowRoot?.getElementById("myChart") as any).getContext(
      "2d"
    );

    this.myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: this.label,
        datasets: [
          {
            label: "Daily New Cases",
            data: this.dailyNewCases,
            backgroundColor: "#A87FF0",
            borderColor: "#ffffff",
            borderWidth: 1,
          },
          {
            label: "Active Cases",
            data: this.activeCases,
            backgroundColor: "#E2CAFC",
            borderColor: "#ffffff",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  };

  fetchCovidDataByCounty = async (countyCode: string) => {
    console.log(`[log] fetchCovidDataByCounty countyCode:${countyCode}`);

    if (!countyCode) return;

    this.clearData();
    const cCode = "06085";
    const key = "1318b408f01c4aa3b5f79dedc6c90848";
    await fetch(
      `https://api.covidactnow.org/v2/county/${cCode}.timeseries.json?apiKey=${key}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const timeSeries = data.actualsTimeseries;
        Object.keys(timeSeries).forEach((index) => {
          if (Number(index) > 10) {
            return;
          }
          const dayData = timeSeries[index];
          const date: string = dayData.date;
          const dateObject = new Date(date);
          const localDate = dateObject.toLocaleDateString(this.locale, {
            month: "numeric",
            day: "numeric",
          });

          this.label.push(localDate);
          this.activeCases.push(dayData.cases);
          this.dailyNewCases.push(dayData.newCases);
        });
      });
  };

  fetchCovidDataByState = async (state: string) => {
    if (!state) return;

    this.clearData();

    await fetch(`https://api.covidtracking.com/v1/states/${state}/daily.json`)
      .then((response) => {
        return response.json();
      })
      .then((stateData) => {
        Object.keys(stateData).forEach((key, index) => {
          if (Number(key) > 6) return;

          const dayData = stateData[key];
          const date: string = dayData.dateChecked;
          const dateObject = new Date(date);
          const localDate = dateObject.toLocaleDateString(this.locale, {
            month: "numeric",
            day: "numeric",
          });

          this.label.push(localDate);
          this.activeCases.push(dayData.positive);
          this.dailyNewCases.push(dayData.positiveIncrease);
          return;
        });
      });
  };

  handleRadioChange = (event: CustomEvent) => {
    this.specificity = event?.detail?.selected;
  };

  async firstUpdated(changeProperties: PropertyValues) {
    super.firstUpdated(changeProperties);
    await new Promise((resolve) => setTimeout(resolve, 0));

    this.radioGroup.addEventListener(
      "radio-change",
      this.handleRadioChange as EventListener
    );
  }

  protected async updated(changeProperties: PropertyValues) {
    super.updated(changeProperties);

    if (changeProperties.has("specificity")) {
      // TODO: fetch data or parse data by specificity. Only have daily at the moment.
    }

    if (this.selectedState && changeProperties.has("selectedState")) {
      await this.fetchCovidDataByState(this.selectedState);
      this.renderChart();
    }
  }

  render() {
    return html`
      <div class="graph-section">
        <div class="header">
          <span class="header-text">Active Cases Trend</span>
          <md-button circle hasRemoveStyle><md-icon slot="icon" name="info_12"></md-icon></md-button>
          <md-button class="button-right-align" circle hasRemoveStyle><md-icon slot="icon" name="more_20"></md-icon></md-button>
        </div>
        <div class="sub-body">
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
