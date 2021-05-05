/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * !! API KEY REQUIRED !!
 * This Map Widget requires a Google Maps API Key that is configured to provide the JavaScript and Places API
 * Get your key by visiting https://developers.google.com/maps/documentation/javascript/get-api-key
 * Once Activated, place your API Key in the application config as an attribute
 * e.g. "attributes": { "title": "Maps Widget", "api-key": "AI----3W--w5I-etc" },
 *
 */
import "@momentum-ui/web-components";
import { customElement, html, internalProperty, LitElement } from "lit-element";
import "../index";
import styles from "./sandbox.scss";

@customElement("wcc-map-sandbox")
export class Sandbox extends LitElement {
  @internalProperty() darkTheme = false;
  @internalProperty() containerWidth = "500px";
  @internalProperty() containerHeight = "80vh";

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
        <div class="switch-container">
          <md-label class="switch" text="Responsive">
            Widget Boundary
          </md-label>
          <md-input
            type="text"
            id="width-switch"
            class="theme-switch"
            data-aspect="responsive-width"
            @click=${(e: MouseEvent) => this.toggleSetting(e)}
            @input-change=${(e: MouseEvent) => this.toggleSetting(e)}
            value=${this.containerWidth}
          ></md-input>
          <md-label>x</md-label>
          <md-input
            type="text"
            id="height-switch"
            class="theme-switch"
            data-aspect="responsive-height"
            @click=${(e: MouseEvent) => this.toggleSetting(e)}
            @input-change=${(e: MouseEvent) => this.toggleSetting(e)}
            value=${this.containerHeight}
          ></md-input>
        </div>
      </div>
    `;
  }

  toggleSetting(e: MouseEvent) {
    const composedPath = e.composedPath();
    const target = (composedPath[0] as unknown) as HTMLInputElement;
    const aspect: string = target.dataset.aspect!;
    if (aspect === "responsive-width") {
      this.containerWidth = target.value;
    } else if (aspect === "responsive-height") {
      this.containerHeight = target.value;
    } else if (aspect === "darkTheme") {
      this.darkTheme = !this.darkTheme;
    } else return console.error("Invalid data-aspect input");
  }

  render() {
    return html`
    <div class="toggle">
      ${this.themeToggle()}
    </div>
    <md-theme lumos ?darkTheme=${this.darkTheme}>
      <div class="container">
        <div style=${`width: ${this.containerWidth}; height: ${this.containerHeight};`} class="widget-container">
          <map-widget api-key="" search-enabled></map-widget>
        </div>
      </div>
    </md-theme>
    </div>
    </md-theme>
    `;
  }
}
