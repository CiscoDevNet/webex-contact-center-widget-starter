/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { html, LitElement, customElement } from "lit-element";
import "@/components/App";
@customElement("appointment-widget")
export default class AppointmentWidget extends LitElement {
  render() {
    return html`
      <app-component></app-component>
    `;
  }
}
