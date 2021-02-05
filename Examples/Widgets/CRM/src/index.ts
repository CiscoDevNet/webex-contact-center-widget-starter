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
import "./components/Summary";
import "./components/Visits";
import { data } from "./customer-data/mock-customer";
import style from "./components/App.scss";

@customElement("erm-widget")
export default class MyCustomComponent extends LitElement {
  @property({ type: String, attribute: "phone-number" }) phoneNumber:
    | string
    | undefined;

  @internalProperty() compact = false;
  @internalProperty() customerData!: typeof data;
  @query(".container")container!: HTMLElement;

  connectedCallback() {
    super.connectedCallback();
    this.customerData = data;
  }

  firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties)
    // @ts-ignore
    var ro = new ResizeObserver((entries: any) => {
      for (let entry of entries) {
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
      "compact": this.compact
    }
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

  render() {
    return html`
      <div class="container ${classMap(this.resizeClassMap)}">
        <customer-summary
          .customerData=${this.customerData ? this.customerData : undefined}
          ?compact=${this.compact}
          >test</customer-summary
        >
        <customer-visits
          .visits=${this.customerData.visits
            ? this.customerData.visits
            : undefined}
          >test</customer-visits
        >
      </div>
    `;
  }
}
