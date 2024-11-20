/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import "@momentum-ui/web-components";
import { customElement, html, internalProperty, LitElement } from "lit-element";
import "@/index";
import styles from "./sandbox.scss";

@customElement("wcc-widget-starter-lit")
export class Sandbox extends LitElement {
  @internalProperty() darkTheme = false;

  static get styles() {
    return styles;
  }

  themeToggle() {
    return html`
      <div class="toggle-container">
        <md-checkbox
          type="checkbox"
          id="theme-switch"
          class="theme-switch"
          data-aspect="darkTheme"
          label="Dark Mode"
          @checkbox-change=${(e: MouseEvent) => this.toggleSetting(e)}
          ?checked=${this.darkTheme}
          >Dark Mode</md-checkbox
        >
      </div>
    `;
  }

  toggleSetting(event: MouseEvent) {
    const {
      dataset: { aspect }
    } = event.composedPath()[0] as HTMLInputElement;
    if (aspect === "darkTheme") {
      this.darkTheme = !this.darkTheme;
    }
  }

  render() {
    return html`
    <div class="toggle">
      ${this.themeToggle()}
    </div>
    <md-theme lumos ?darkTheme=${this.darkTheme}>
      <div class="container">
        <div class="appointment-widget-container">
          <appointment-widget></appointment-widget>
        </div>
      </div>
    </md-theme>
    </div>
    </md-theme>
    `;
  }
}
