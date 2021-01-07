/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { html, LitElement, customElement, css, internalProperty, property } from "lit-element";
import { agentxJsApi } from "@agentx/agentx-js-api";
import "./components/App";
/**
 * Please give your widget a unique name. We recommend using prefix to identify the author and help avoid naming conflict. e.g. "2ring-timer-widget"
 */
@customElement("covid-by-location")
export default class CovidByLocation extends LitElement {
  @internalProperty() private contacts: string[] = [];
  @property({ type: String }) selectedCountyState = "Santa Clara County, CA";
  @property({ type: String, reflect: true, attribute: "api-key" }) apiKey = "1318b408f01c4aa3b5f79dedc6c90848";
  
  private readonly logger = agentxJsApi.logger.createLogger("[Widget-Using-JSAPI]");

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
      <my-custom-component api-key=${this.apiKey} selectedCountyState=${this.selectedCountyState}></my-custom-component>
    `;
  }
}
