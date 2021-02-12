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
// import { Service } from "@wxcc-desktop/sdk-types";
// import { Desktop } from "@wxcc-desktop/sdk";
import "./components/Summary";
import "./components/Visits";
import { data } from "./customer-data/mock-customer-blob";
import style from "./components/App.scss";
import { nothing } from "lit-html";

@customElement("crm-widget")
export default class MyCustomComponent extends LitElement {
  @property({ type: String, attribute: "phone-number" }) phoneNumber:
    | string
    | undefined;

  @internalProperty() compact = false;
  @internalProperty() customerData!: typeof data;
  @query(".container") container!: HTMLElement;

  // @internalProperty() assignedContacts: { 
  //   interaction: Service.Aqm.Contact.Interaction
  // }[] = [];

  connectedCallback() {
    super.connectedCallback();
    this.customerData = data;
  }

  // async getTaskMap() {
  //   const taskMap: Map<string, any> = await Desktop.actions.getTaskMap();
  //   console.log(taskMap);
  //   this.assignedContacts = Array.from(taskMap.values());
  //   console.log(this.assignedContacts[0])
  // }

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
    let result;

    if (x.query.formatValue) {
      try {
        result = x.result.map(x.query.formatValue).join(', ');
      } catch (err) {
        console.log('Unable to format value', err);
      }
    }

    if (result === null) {
      result = x.result.join(', ') || '-';
    }

    return result;
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
          phone-number=${"whatever"}
          >
          <table>
          ${this.customerData
              .filter((x: any) => x.type === 'summary')
              .map((x: any) => {
                console.log(x.result);
                return html`<tr>
                  <td class="title">${x.label}</td>
                  <td class="value">${x.value}</td>
              </tr>`;
              })}
          </table>
          </customer-summary
        >
      </div>
      `;
  }
}

// <customer-visits
//   .visits=${this.customerData.visits
//     ? this.customerData.visits
//     : undefined}
//   >test</customer-visits
// >

// <tr>
//             <td class="title">
//               Date of Birth
//             </td>
//             <td class="value">
//               ${this.customerData?.DOB}
//             </td>
//           </tr>
//           <tr>
//             <td class="title">
//               Address
//             </td>
//             <td class="value">
//               ${this.customerData?.address}
//             </td>
//           </tr>
//           <tr>
//             <td class="title">
//               Insurance
//             </td>
//             <td class="value">
//               <span>${this.customerData?.insurance.provider}</span><br />
//               <span>${this.customerData?.insurance.planName}</span><br />
//               <span>${this.customerData?.insurance.planNumber}</span><br />
//               <span>${this.customerData?.insurance.groupNumber}</span><br />
//               <span>${this.customerData?.insurance.memberID}</span>
//             </td>
//           </tr>
//           <tr>
//             <td class="title">
//               Next of Kin
//             </td>
//             <td class="value">
//               <span
//                 >${this.customerData?.nextToKin.name}
//                 ${this.customerData?.nextToKin["phone number"]}</span
//               >
//             </td>
//           </tr>
//           <tr>
//             <td class="title">
//               Conditions
//             </td>
//             <td class="value">
//               ${this.customerData?.conditions.map(
//                 condition =>
//                   html`
//                     <span>${condition}</span><br />
//                   `
//               )}
//             </td>
//           </tr>
//           <tr>
//             <td class="title">
//               Allergies
//             </td>
//             <td class="value">
//               ${this.customerData?.allergies.map((allergy, i, arr) => {
//                 return html`
//                   <span>${allergy}</span>${i < arr.length - 1 ? " | " : nothing}
//                 `;
//               })}
//             </td>
//           </tr>
//         </table>