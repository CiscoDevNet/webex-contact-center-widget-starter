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
  css,
  internalProperty,
  property
} from "lit-element";
import { agentxJsApi } from "@agentx/agentx-js-api";
import "./components/App";
/**
 * Please give your widget a unique name. We recommend using prefix to identify the author and help avoid naming conflict. e.g. "2ring-timer-widget"
 */
@customElement("map-widget")
// name as map widget

// leave comments for the adding of API key
export default class MyCustomComponent extends LitElement {
  /** 
  Configure your AgentX Environment with the default values needed.
  Latitude / Longitude: where you want the map to be centered by default
  Search-Enabled: what search term the map should load with
  Search: toggle search input field on/off
  Zoom: set default zoom level of map
  API Key: Add your Google Maps API key
  **/

  @property({ type: Number, reflect: true }) latitude = 47.6062;
  @property({ type: Number, reflect: true }) longitude = -122.3321;
  @property({ type: String, reflect: true }) search = "";
  @property({ type: Boolean, reflect: true, attribute: "search-enabled" })
  searchEnabled = false;
  @property({ type: String, reflect: true, attribute: "api-key" }) apiKey = "";
  @property({ type: Number, reflect: true }) zoom = 12;

  @internalProperty() private contacts: string[] = [];

  private readonly logger = agentxJsApi.logger.createLogger(
    "[Widget-Using-JSAPI]"
  );

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
      <map-component
        api-key=${this.apiKey}
        search=${this.search}
        ?search-enabled=${this.searchEnabled}
        latitude=${this.latitude}
        longitude=${this.longitude}
      ></map-component>
    `;
  }
}
