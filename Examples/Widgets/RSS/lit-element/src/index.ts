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
import { Desktop } from "@wxcc-desktop/sdk";
import "./components/App";
@customElement("rss-feed-widget")
export default class MyCustomComponent extends LitElement {
  @property({ type: String, attribute: "rss-feed" }) rssFeedAddress = "";
  // Insert your desired RSS Feed address in the config.json settings for your AgentX environment
  @property({ type: Number, attribute: "update-delay" }) updateDelay = 5000;

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
      <rss-component rss-feed=${this.rssFeedAddress}></rss-component>
    `;
  }
}
