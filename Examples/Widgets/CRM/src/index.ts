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
  property,
  PropertyValues,
  query
} from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import { Service } from "@wxcc-desktop/sdk-types";
import { Desktop } from "@wxcc-desktop/sdk";
import "./components/Summary";
import "./components/Visits";
import { data } from "./customer-data/mock-customer-blob";
import style from "./components/App.scss";
import { ifDefined } from "lit-html/directives/if-defined";

@customElement("crm-widget")
export default class MyCustomComponent extends LitElement {
  @property({ type: String, attribute: "phone-number" }) phoneNumber:
    | string
    | undefined;

  @internalProperty() compact = false;
  @internalProperty() customerData!: typeof data;
  @query(".container") container!: HTMLElement;

  @internalProperty() assignedContacts: {
    interaction: Service.Aqm.Contact.Interaction;
  }[] = [];

  connectedCallback() {
    super.connectedCallback();
    this.customerData = data;
    this.getTaskMap();
    this.phoneNumber =
      this.assignedContacts[0].interaction.callAssociatedData &&
      this.assignedContacts[0].interaction.callAssociatedData["ani"]["value"];
  }

  async getTaskMap() {
    const taskMap:
      | Map<string, any>
      | undefined = await Desktop.actions.getTaskMap();
    console.log(taskMap);
    this.assignedContacts = Array.from(taskMap!.values());
    console.log(this.assignedContacts[0]);
  }

  firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    // @ts-ignore
    const ro = new ResizeObserver((entries: any) => {
      for (const entry of entries) {
        const cr = entry.contentRect;

        if (cr.width > 589) {
          this.compact = false;
        } else {
          this.compact = true;
        }
      }
    });
    ro.observe(this.container);
  }

  private get resizeClassMap() {
    return {
      compact: this.compact
    };
  }

  getValue(x: any) {
    if (Array.isArray(x)) {
      return x.join(", ");
    } else if (typeof x === "object" && x !== null) {
      const values = Object.values(x);
      const dataString = html`
        ${values.map(item => {
          return html`
            <span>${item}</span><br />
          `;
        })}
      `;
      return dataString;
    } else return x;
  }

  static get styles() {
    return [
      style,
      css`
        :host {
          display: block;
          height: 100%;
          position: relative;
          overflow: auto;
        }
      `
    ];
  }

  // re-wire the SDK to find the phone number and pipe that into the Summary

  render() {
    return html`
      <div class="container ${classMap(this.resizeClassMap)}">
        <customer-summary
          .customerData=${this.customerData ? this.customerData : undefined}
          ?compact=${this.compact}
          phone-number=${ifDefined(this.phoneNumber)}
        >
          <table>
            ${this.customerData
              .filter((x: any) => x.type === "summary")
              .map((x: any) => {
                console.log(x.result);
                return html`
                  <tr>
                    <td class="title">${x.label}</td>
                    <td class="value">${this.getValue(x.value)}</td>
                  </tr>
                `;
              })}
          </table>
        </customer-summary>
        <customer-visits .customerData=${this.customerData}></customer-visits>
      </div>
    `;
  }
}
