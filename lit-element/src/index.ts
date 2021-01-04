/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { html, LitElement, customElement, css, internalProperty } from "lit-element";
import { agentxJsApi } from "@agentx/agentx-js-api";
import "./components/App";
/**
 * Please give your widget a unique name. We recommend using prefix to identify the author and help avoid naming conflict. e.g. "2ring-timer-widget"
 */
@customElement("my-custom-widget")
export default class MyCustomComponent extends LitElement {
  @internalProperty() private contacts: string[] = [];
  
  private readonly logger = agentxJsApi.logger.createLogger("[Widget-Using-JSAPI]");

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

  subscribeAgentxJsApiServiceEvents() {
    // Like user init jsApi
    this.subscribeAgentStateInfoEvents();

    this.subscribeAgentContactDataEvents();

    this.subscribeDialerDataEvents();

    this.subscribeScreenPopDataEvents();

    this.subscribeNotificationsEvents();
  }

  // AgentInfo events
  subscribeAgentStateInfoEvents() {
    agentxJsApi.agentStateInfo.addEventListener("updated", updatedList =>
      console.log("AgentStateInfo updated: ", updatedList)
    );
  }

  // Subscribe AgentCONTACT
  subscribeAgentContactDataEvents() {
    agentxJsApi.agentContact.addEventListener("eAgentContact", (msg: any /** Service.Aqm.Contact.AgentContact **/) =>
      console.log("AgentContact eAgentContact: ", msg.data)
    );
    agentxJsApi.agentContact.addEventListener("eAgentContactAssigned", (msg: any) =>
      console.log("AgentContact eAgentContactAssigned: ", msg)
    );
    agentxJsApi.agentContact.addEventListener("eAgentContactEnded", (msg: any) =>
      console.log("AgentContact eAgentContactEnded: ", msg)
    );
    agentxJsApi.agentContact.addEventListener("eAgentContactWrappedUp", (msg: any) =>
      console.log("AgentContact eAgentContactWrappedUp: ", msg)
    );
    agentxJsApi.agentContact.addEventListener("eAgentOfferContact", (msg: { data: { interactionId: string; }; }) => {
      console.log("AgentContact eAgentOfferContact: ", msg);
      // AUX Sandbox Contact
      this.contacts.push(msg.data.interactionId);
    });
    agentxJsApi.agentContact.addEventListener("eAgentOfferContactRona", (msg: { data: { interactionId: string; }; }) => {
      console.log("AgentContact eAgentOfferContactRona: ", msg);
      // AUX Sandbox Contact
      const idx = this.contacts.indexOf(msg.data.interactionId);
      if (idx != -1) {
        this.contacts.slice(idx, 1);
      }
    });
    agentxJsApi.agentContact.addEventListener("eAgentOfferConsult", (msg: any) =>
      console.log("AgentContact eAgentOfferConsult: ", msg)
    );
    agentxJsApi.agentContact.addEventListener("eAgentWrapup", (msg: any) =>
      console.log("AgentContact eAgentWrapup: ", msg)
    );
    agentxJsApi.agentContact.addEventListener("eAgentContactHeld", (msg: any) =>
      console.log("AgentContact eAgentContactHeld: ", msg)
    );
    agentxJsApi.agentContact.addEventListener("eAgentContactUnHeld", (msg: any) =>
      console.log("AgentContact eAgentContactUnHeld: ", msg)
    );
    agentxJsApi.agentContact.addEventListener("eCallRecordingStarted", (msg: any) =>
      console.log("AgentContact eCallRecordingStarted: ", msg)
    );
    agentxJsApi.agentContact.addEventListener("eAgentConsultCreated", (msg: any) =>
      console.log("AgentContact eAgentConsultCreated: ", msg)
    );
    agentxJsApi.agentContact.addEventListener("eAgentConsultConferenced", (msg: any) =>
      console.log("AgentContact eAgentConsultConferenced: ", msg)
    );
    agentxJsApi.agentContact.addEventListener("eAgentConsultEnded", (msg: any) =>
      console.log("AgentContact eAgentConsultEnded: ", msg)
    );
    agentxJsApi.agentContact.addEventListener("eAgentCtqCancelled", (msg: any) =>
      console.log("AgentContact eAgentCtqCancelled: ", msg)
    );
    agentxJsApi.agentContact.addEventListener("eAgentConsulting", (msg: any) =>
      console.log("AgentContact eAgentConsulting: ", msg)
    );
    agentxJsApi.agentContact.addEventListener("eAgentConsultFailed", (msg: any) =>
      console.log("AgentContact eAgentConsultFailed: ", msg)
    );
    agentxJsApi.agentContact.addEventListener("eAgentConsultEndFailed", (msg: any) =>
      console.log("AgentContact eAgentConsultEndFailed: ", msg)
    );
    agentxJsApi.agentContact.addEventListener("eAgentCtqFailed", (msg: any) =>
      console.log("AgentContact eAgentCtqFailed: ", msg)
    );
    agentxJsApi.agentContact.addEventListener("eAgentCtqCancelFailed", (msg: any) =>
      console.log("AgentContact eAgentCtqCancelFailed: ", msg)
    );
    agentxJsApi.agentContact.addEventListener("eAgentConsultConferenceEndFailed", (msg: any) =>
      console.log("AgentContact eAgentConsultConferenceEndFailed: ", msg)
    );
  }

  // Subscribe DIALER
  subscribeDialerDataEvents() {
    agentxJsApi.dialer.addEventListener("eOutdialFailed", (msg: any) => console.log("Dialer eOutdialFailed: ", msg));
  }

  ////// ScreenPop JSAPI
  // Subscribe SCREENPOP
  subscribeScreenPopDataEvents() {
    agentxJsApi.screenpop.addEventListener("eScreenPop", (msg: any) => console.log("ScreenPop eScreenPop: ", msg));
  }

  // Subscribe NOTIFICATIONS
  subscribeNotificationsEvents() {
    agentxJsApi.notifications.addEventListener("add", n => {
      console.log("Notifications Added: ", n);
      console.log("Notifications Total: ", agentxJsApi.notifications.added.length);
    });
    agentxJsApi.notifications.addEventListener("pending", n => {
      console.log("Notifications Pending: ", n);
      console.log("Notifications Total Added: ", agentxJsApi.notifications.added.length);
      console.log("Notifications Total Pending: ", agentxJsApi.notifications.pended.length);
      console.log("Notifications Total Activated: ", agentxJsApi.notifications.activated.length);
      console.log("Notifications Total Deactivated: ", agentxJsApi.notifications.deactivated.length);
    });
    agentxJsApi.notifications.addEventListener("activate", n => {
      console.log("Notifications Activated: ", n);
      console.log("Notifications Total Added: ", agentxJsApi.notifications.added.length);
      console.log("Notifications Total Pending: ", agentxJsApi.notifications.pended.length);
      console.log("Notifications Total Activated: ", agentxJsApi.notifications.activated.length);
      console.log("Notifications Total Deactivated: ", agentxJsApi.notifications.deactivated.length);
    });
    agentxJsApi.notifications.addEventListener("deactivate", n => {
      console.log("Notifications Deactivated: ", n);
      console.log("Notifications Total Added: ", agentxJsApi.notifications.added.length);
      console.log("Notifications Total Pending: ", agentxJsApi.notifications.pended.length);
      console.log("Notifications Total Activated: ", agentxJsApi.notifications.activated.length);
      console.log("Notifications Total Deactivated: ", agentxJsApi.notifications.deactivated.length);
    });
  }
  
  render() {
    return html`
      <my-custom-component></my-custom-component>
    `;
  }
}
