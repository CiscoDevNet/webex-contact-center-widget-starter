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
import Chart from "chart.js";
import styles from "./Graph.scss";

const SPECIFICITY = {
  DAILY: 'daily',
  WEEKLY: "weekly",
  MONTHY: 'monthly'
};
export const specificityType = ["daily", "weekly", "monthly"] as const;

export namespace Graph {
  export type specificity = typeof specificityType[number];
}

@customElement("my-graph")
export default class MyCustomComponent extends LitElement {
    /**
   * Property: apiKey
   * Access API Key: Covid Act Now Website
   * https://apidocs.covidactnow.org/access
   */
  @property({ type: String, reflect: true, attribute: "api-key" }) apiKey = "";
  @property({ type: String }) locale = "en-US";
  @property({ type: String }) selectedCountyFIPS = "";
  @property({ type: Number }) maxDataPoints = 30;
  @property({ type: Boolean }) darkTheme = false;

  @internalProperty() myChart: Chart | undefined = undefined;
  @internalProperty() label: Array<string> = [];
  @internalProperty() activeCases: Array<number> = [];
  @internalProperty() dailyNewCases: Array<number> = [];
  @internalProperty() specificity: Graph.specificity = "daily";

  @query(".chart-container") chartContainer!: HTMLDivElement;

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
            fontColor: getComputedStyle(this).getPropertyValue("--md-primary-text-color"),
            fontSize: 10,
            boxWidth: 20
          },
        },
        elements: {
          point: {
            radius: 0
          }
        },
        scales: {
          xAxes: [{
            ticks: {
              fontColor: getComputedStyle(this).getPropertyValue("--md-secondary-text-color"),
            },
            gridLines: {
              display: false
            }
          }],
          yAxes: [
            {
              gridLines: {
                z: 2,
                color: getComputedStyle(this).getPropertyValue("--md-dynamic-layout-button-border-color")
              },
              ticks: {
                fontColor: getComputedStyle(this).getPropertyValue("--md-secondary-text-color"),
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

    return await fetch(`https://api.covidactnow.org/v2/county/${countyFIPS}.timeseries.json?apiKey=${this.apiKey}`)
    .then(response => {
      return response.json();
    }).then(data => {
      return data;
    })
  }

  closestElement(selector: string, base = this) {
    function __closestFrom(el: unknown): HTMLElement | null {
      if (!el || el === document || el === window) return null;
      // @ts-ignore
      const found = el.closest(selector);
      // @ts-ignore
      return found ? found : __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
  }

  refreshTokenData = () => {
    const themeWrapper: unknown = this.closestElement("md-theme");
    // @ts-ignore
    this.lumos = themeWrapper.lumos;
    // @ts-ignore
    this.darkTheme = themeWrapper.darkTheme;
  };

  handleRadioChange = (event: CustomEvent) => {
    this.specificity = event?.detail?.selected;
  };

  async firstUpdated(changeProperties: PropertyValues) {
    super.firstUpdated(changeProperties);

    document.addEventListener("theme-changed", this.refreshTokenData);

    await new Promise((resolve) => setTimeout(resolve, 0));

    // @ts-ignore
    var ro = new ResizeObserver((entries: any) => {
      for (let entry of entries) {
        this.renderChart();
      }
    });
    ro.observe(this.chartContainer);

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
      let countyTimeline = countyData.actualsTimeseries;

      countyTimeline.forEach((dateData: any, index: string, thisArray: Array<Object>) => {
        let divider = 1;
        if (this.specificity === SPECIFICITY.WEEKLY) {
          divider = 7;
          if (Number(index) % divider !== 0) return;
        }
        if (this.specificity === SPECIFICITY.MONTHY) {
          divider = 30;
          if (Number(index) % divider !== 0) return;
        }
        if (this.label.length > this.maxDataPoints) return;
        if (Number(index) < thisArray.length - (this.maxDataPoints * divider)) return;

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

    if (changeProperties.has("darkTheme")) {
      this.renderChart();
    }

    if (changeProperties.has("specificity")) {
      await this.collectChartData();
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
          <md-tooltip message="Covid-19 trends within county">
            <md-button circle hasRemoveStyle><md-icon slot="icon" name="info_12"></md-icon></md-button>
          </md-tooltip>
          <md-button class="button-right-align" circle hasRemoveStyle><md-icon slot="icon" name="more_20"></md-icon></md-button>
        </div>
        <div class="sub-body">
          <md-radiogroup group-label="group_process" alignment="horizontal" checked="0">
            <md-radio slot="radio" value="daily">Daily</md-radio>
            <md-radio slot="radio" value="weekly">Weekly</md-radio>
            <md-radio slot="radio" value="monthly">Monthly</md-radio>
          </md-radiogroup>
          <div class="chart-container">
            <canvas id="myChart" height="210" class="my-chart" aria-label="Covid Cases Graph" role="img"></canvas>
          </div>
        </div>
      </div>
    `;
  }
}
