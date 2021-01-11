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
@customElement("my-custom-widget")
// name as map widget

// leave comments for the adding of API key

export default class MyCustomComponent extends LitElement {
  @internalProperty() private contacts: string[] = [];
  @property({ type: String, reflect: true, attribute: "api-key" }) apiKey = "AIzaSyDlVE8flzwPFbSzuGdaaatrGrG3WIULw5I";

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
      <my-custom-component
        api-key=${this.apiKey}
        search="Harborview medical"
        search-enabled
      ></my-custom-component>
    `;
  }
}
