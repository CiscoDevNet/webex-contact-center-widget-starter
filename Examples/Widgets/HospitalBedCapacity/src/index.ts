/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { html, LitElement, customElement, css, internalProperty, property } from "lit-element";
import "./components/Hospitals";

/**
 * Please give your widget a unique name. We recommend using prefix to identify the author and help avoid naming conflict. e.g. "2ring-timer-widget"
 */
@customElement("hospital-bed-capacity")
export default class HospitalBedCapacity extends LitElement {
    /**
     * Property googleApiKey
     * Access your API key from Google Maps Platform
     * https://cloud.google.com/maps-platform
     */
    @property({ type: String, reflect: true, attribute: "google-api-key" }) googleApiKey = "";
    /**
    * Property: covidApiKey
    * Access API Key: Covid Act Now Website
    * https://apidocs.covidactnow.org/access
    */
    @property({ type: String, reflect: true, attribute: "covid-api-key" }) covidApiKey = "";
    @property({ type: Number, reflect: true }) latitude = 37.405270;
    @property({ type: Number, reflect: true }) longitude = -122.012210;
  
  @internalProperty() private contacts: string[] = [];
  
  static get styles() {
    return css`
      :host {
        display: block;
        height: 100%;
        position: relative;
        overflow: auto;
      }
    `;
  }

  render() {
    return html`
      <my-hospital-stats
        covi-api-key=${this.covidApiKey}
        google-api-key=${this.googleApiKey}
        latitude=${this.latitude}
        longitude=${this.longitude}>
      </my-hospital-stats>
    `;
  }
}
