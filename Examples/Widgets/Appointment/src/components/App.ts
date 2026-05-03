/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { html, LitElement, customElement } from "lit-element";
import styles from "./App.scss";

@customElement("app-component")
export default class AppComponent extends LitElement {
  static get styles() {
    return styles;
  }

  render() {
    return html`
      <md-draggable></md-draggable>
    `;
  }
}
