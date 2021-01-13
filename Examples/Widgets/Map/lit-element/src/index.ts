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
import { Desktop } from "@wxcc-desktop/js-api";
import "./components/App";
@customElement("map-widget")
export default class MyCustomComponent extends LitElement {
  /**
   * Configure your AgentX Environment with the default values needed.
   * Latitude / Longitude: where you want the map to be centered by default
   * Search-Enabled: what search term the map should load with
   * Search: toggle search input field on/off
   * Zoom: set default zoom level of map
   * !! API KEY REQUIRED !!
   * This Map Widget requires a Google Maps API Key that is configured to provide the JavaScript and Places API
   * Get your key by visiting https://developers.google.com/maps/documentation/javascript/get-api-key
   * Once Activated, place your API Key in the application config as an attribute
   * e.g. "attributes": { "title": "Maps Widget", "api-key": "AI----3W--w5I-etc" },
   */

  @property({ type: Number, reflect: true }) latitude = 47.6062;
  @property({ type: Number, reflect: true }) longitude = -122.3321;
  @property({ type: String, reflect: true }) search = "";
  @property({ type: Boolean, reflect: true, attribute: "search-enabled" })
  searchEnabled = false;
  @property({ type: String, reflect: true, attribute: "api-key" }) apiKey = "";
  @property({ type: Number, reflect: true }) zoom = 12;

  @internalProperty() private contacts: string[] = [];

  private readonly logger = Desktop.logger.createLogger(
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
