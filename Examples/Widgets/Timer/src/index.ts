/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { html, LitElement, customElement, css, property } from "lit-element";
import "./components/App";
/**
 * Please give your widget a unique name. We recommend using prefix to identify the author and help avoid naming conflict. e.g. "2ring-timer-widget"
 */
@customElement("timer-widget")
export default class MyCustomComponent extends LitElement {
  @property({ type: String, reflect: true }) duration = ""
  @property({ type: Boolean }) paused = false
  
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
      <timer-component duration=${this.duration} ?paused=${this.paused}></timer-component>
    `;
  }
}
