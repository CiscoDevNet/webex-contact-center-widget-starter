/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { html, LitElement, customElement, css, internalProperty } from "lit-element";
import "./components/Hospitals";

/**
 * Please give your widget a unique name. We recommend using prefix to identify the author and help avoid naming conflict. e.g. "2ring-timer-widget"
 */
@customElement("hospital-bed-capacity")
export default class HospitalBedCapacity extends LitElement {
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
      <my-hospital-stats></my-hospital-stats>
    `;
  }
}
