/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import "@momentum-ui/web-components";
import {
  css,
  customElement,
  html,
  internalProperty,
  LitElement,
} from "lit-element";
import "../index";

@customElement("wcc-widget-starter-react")
export class Sandbox extends LitElement {
  @internalProperty() darkTheme = false;
  @internalProperty() containerWidth = "500px";
  @internalProperty() containerHeight = "80vh";

  static get styles() {
    return css`
      .container {
        box-sizing: border-box;
        padding: 20px;
        min-height: calc(100vh - 27px);
        background-color: var(--md-secondary-bg-color);
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 100vw;
      }
      .default-maximize-area {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        position: absolute;
      }
      .grid {
        display: grid;
        grid-template-areas: "iframes css" "async async";

        grid-template-columns: 1fr 1fr;
        grid-template-rows: 50% 50%;
        height: 80vh;
        background-color: #eee;
        border: 1px solid #ccc;
        grid-gap: 1px;
      }
      .toggle {
        display: flex;
        height: 50px;
      }

      .toggle-container {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
      }

      .switch-container {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .switch-container md-label {
        margin: 0 1em;
      }

      md-input.theme-switch::part(input) {
        margin-bottom: -1rem;
      }

      .widget-container {
        width: 500px;
        height: 80vh;
        border: 1px solid var(--md-primary-seperator-color, #000);
      }
    `;
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
          @checkbox-change=${(e: MouseEvent) => this.toggleSetting(e, 'darkTheme')}
          ?checked=${this.darkTheme}
          >
          <md-label>Dark Mode</md-label>
          </md-checkbox
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
            @click=${(e: MouseEvent) => this.toggleSetting(e, 'responsive-width')}
            @input-change=${(e: MouseEvent) => this.toggleSetting(e, 'responsive-width')}
            value=${this.containerWidth}
          ></md-input>
          <md-label>x</md-label>
          <md-input
            type="text"
            id="height-switch"
            class="theme-switch"
            data-aspect="responsive-height"
            @click=${(e: MouseEvent) => this.toggleSetting(e, 'responsive-height')}
            @input-change=${(e: MouseEvent) => this.toggleSetting(e, 'responsive-height')}
            value=${this.containerHeight}
          ></md-input>
        </div>
      </div>
    `;
  }

  toggleSetting(e: Event, aspect: string) {
    const composedPath = e.composedPath();
    const target = (composedPath[0] as unknown) as HTMLInputElement;
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
          <my-react-widget></my-react-widget>
          </div>
          </div>
        </md-theme>
        </div>
      </md-theme>
    `;
  }
}
