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
  @property({ type: String }) selectedCountyFIPS = "";

  @internalProperty() myChart: Chart | undefined = undefined;
  @internalProperty() label: Array<string> = [];
  @internalProperty() activeCases: Array<number> = [];
  @internalProperty() dailyNewCases: Array<number> = [];
  @internalProperty() specificity = "Daily";

  @property({ type: Array, attribute: false }) data:
    | Array<{ county: string }>
    | undefined = undefined;

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
        legend: {
          position: 'bottom',
          labels: {
            fontSize: 10,
            boxWidth: 20
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                callback: function(value, index, values) {
                  if(Number(value) >= 1000){
                    const div = Number(value) / 1000;
                    return `${div}K`
                  } else {
                    return value;
                  }
                }
              },
            },
          ],
        },
      },
    });
  };

  fetchCountyTimeline = async (countyFIPS: string) => {
    if (!countyFIPS) return;

    const key = "1318b408f01c4aa3b5f79dedc6c90848";
    return await fetch(`https://api.covidactnow.org/v2/county/${countyFIPS}.timeseries.json?apiKey=${key}`)
    .then(response => {
      return response.json();
    }).then(data => {
      return data;
    })
  }

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

    if (this.selectedCountyFIPS) {
      await this.collectChartData();
    }

    this.renderChart();
  }

  collectChartData = async () => {
    if (!this.selectedCountyFIPS) return;

    this.clearData();

    return await this.fetchCountyTimeline(this.selectedCountyFIPS).then(countyData => {
      const countyTimeline = countyData.actualsTimeseries;

      countyTimeline.forEach((dateData: any) => {
        // if (Number(index) > 10) return; // TODO: specificity

        const date: string = dateData.date;
        const dateObject = new Date(date);
        const localDate = dateObject.toLocaleDateString(this.locale, {
          month: "numeric",
          day: "numeric",
        });

        this.label.push(localDate);
        this.activeCases.push(dateData.cases || 0);
        this.dailyNewCases.push(dateData.newCases || 0);
      });
    }).then(() => {
      this.renderChart();
    });
  }

  protected async updated(changeProperties: PropertyValues) {
    super.updated(changeProperties);

    if (changeProperties.has("specificity")) {
      // TODO: fetch data or parse data by specificity. Only have daily at the moment.
    }

    if (changeProperties.has("selectedCountyFIPS")) {
      await this.collectChartData();
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
          <canvas id="myChart" width="262" height="200" aria-label="Covid Cases Graph" role="img"></canvas>
        </div>
      </div>
    `;
  }
}
