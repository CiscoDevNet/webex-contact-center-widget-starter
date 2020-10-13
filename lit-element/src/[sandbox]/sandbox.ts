import { Service } from "@agentx/agentx-services";
/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import "@momentum-ui-private/momentum-ui-web-components";
import { customElement, html, internalProperty, LitElement } from "lit-element";
import "../index";
import { agentContactData } from "./sandbox.mock";
import styles from "./sandbox.scss";

@customElement("wcc-widget-starter-lit")
export class Sandbox extends LitElement {
  @internalProperty() darkTheme = false;
  @internalProperty() containerWidth = "500px";

  async connectedCallback() {
    //send contact
  }

  static get styles() {
    return styles;
  }

  themeToggle() {
    return html`
      <div class="toggle-container">
        <label class="switch" text="Dark Mode">
          <input
            type="checkbox"
            id="theme-switch"
            class="theme-switch"
            data-aspect="darkTheme"
            @click=${(e: MouseEvent) => this.toggleSetting(e)}
            ?checked=${this.darkTheme}
          />
          Dark Mode
        </label>
        <label class="switch" text="Responsive">
          | Widget Boundary
          <input
            type="text"
            id="width-switch"
            class="theme-switch"
            data-aspect="responsive"
            @click=${(e: MouseEvent) => this.toggleSetting(e)}
            @change=${(e: MouseEvent) => this.toggleSetting(e)}
            value=${this.containerWidth}
          />
        </label>
        <label class="switch" text="Responsive">
          | Send Contact
          <button @click=${() => this.toggleSetting}>Send Chat Contact</button>
        </label>
      </div>
    `;
  }

  toggleSetting(e: MouseEvent) {
    const composedPath = e.composedPath();
    const target = (composedPath[0] as unknown) as HTMLInputElement;
    const aspect: string = target.dataset.aspect!;
    if (aspect === "responsive") {
      this.containerWidth = target.value;
    } else if (aspect === "darkTheme") {
      this.darkTheme = !this.darkTheme;
    } else return console.error("Invalid data-aspect input");
  }

  sendContact() {
    let contactEvent: Service.Aqm.Contact.AgentContact = {
      type: "",
      orgId: "",
      trackingId: "",
      data: agentContactData,
    };
    const event = new CustomEvent("eAgentContact", {
      detail: contactEvent,
    });
    document.dispatchEvent(event);
  }

  render() {
    return html`
    <div class="toggle">
        ${this.themeToggle()}
      </div>
      <md-theme lumos ?darkTheme=${this.darkTheme}>
        <div class="container">
          <div style=${`width: ${this.containerWidth};`} class="widget-container">
          <my-custom-widget></my-custom-widget>
          </div>
          </div>
        </md-theme>
        </div>
      </md-theme>
    `;
  }
}
