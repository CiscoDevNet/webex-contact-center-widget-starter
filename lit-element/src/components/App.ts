/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { agentxJsApi } from "@agentx/agentx-js-api";
import { html, LitElement, customElement, internalProperty } from "lit-element";
import styles from "./App.scss";
import { logger } from "./sdk";
import { Service } from "@agentx/agentx-services-types";
import { Notifications } from "@uuip/unified-ui-platform-sdk";
@customElement("my-custom-component")
export default class MyCustomComponent extends LitElement {
  /**
   * Replace this with the logic to obtain interaction ID you need
   * through agentxJsApi.actions sub-module or through external props
   */
  @internalProperty() sampleInteractionId: Service.Aqm.Contact.Interaction["interactionId"] =
    "58f76ca3-409f-11eb-8606-f1b296a9b969";
  @internalProperty() agentId = "7d12d9ea-e8e0-41ee-81bf-c11a685b64ed";
  @internalProperty() buddyAgents: Service.Aqm.Contact.BuddyAgentsSuccess | null = null;
  @internalProperty() vTeam: Service.Aqm.Contact.VTeamSuccess | null = null;
  @internalProperty() contacts: Service.Aqm.Contact.Interaction["interactionId"][] = [];
  @internalProperty() acceptedContacts: Service.Aqm.Contact.Interaction["interactionId"][] = [];

  static get styles() {
    return styles;
  }
  connectedCallback() {
    super.connectedCallback();
    this.init();
    this.getCurrentInteractionId();
    this.subscribeAgentContactDataEvents()
    this.subscribeDialerEvents();
    this.subscribeScreenpopEvent();
  }

  disconnectedCallback() {
    super. disconnectedCallback();
    agentxJsApi.agentContact.removeAllEventListeners();
    agentxJsApi.dialer.removeAllEventListeners();
    agentxJsApi.screenpop.removeAllEventListeners()
  }

  async init() {
    await agentxJsApi.config.init();
  }

  subscribeScreenpopEvent() {
    agentxJsApi.screenpop.addEventListener("eScreenPop", (msg: Service.Aqm.Contact.AgentContact) => logger.info(msg));
  }

  subscribeDialerEvents() {
    agentxJsApi.dialer.addEventListener("eOutdialFailed", (msg: Service.Aqm.Contact.AgentContact) => logger.info(msg));
  }

  subscribeAgentContactDataEvents() {
    agentxJsApi.agentContact.addEventListener("eAgentContact", (msg: Service.Aqm.Contact.AgentContact) =>
      logger.info("AgentContact eAgentContact: ", msg)
    );
    agentxJsApi.agentContact.addEventListener(
      "eAgentContactAssigned",
      (msg: Service.Aqm.Contact.AgentContact) => {
        logger.info("AgentContact eAgentContactAssigned: ", msg);
        this.acceptedContacts.push(msg.data.interactionId);
        logger.info(this.acceptedContacts);
      }
    );
    agentxJsApi.agentContact.addEventListener(
      "eAgentContactEnded",
      (msg: Service.Aqm.Contact.AgentContact) => {
        logger.info("AgentContact eAgentContactEnded: ", msg);
        const idx = this.acceptedContacts.indexOf(msg.data.interactionId);
        if (idx != -1) {
          this.acceptedContacts = this.acceptedContacts.slice(idx, 1);
          logger.info(this.acceptedContacts);
        }
      }
    );
    agentxJsApi.agentContact.addEventListener(
      "eAgentContactWrappedUp",
      (msg: Service.Aqm.Contact.AgentContact) => logger.info("AgentContact eAgentContactWrappedUp: ", msg)
    );
    agentxJsApi.agentContact.addEventListener(
      "eAgentOfferContact",
      (msg: Service.Aqm.Contact.AgentContact) => {
        logger.info("AgentContact eAgentOfferContact: ", msg);
        // AUX Sandbox Contact
        this.contacts.push(msg.data.interactionId);
        logger.info(this.contacts);
      }
    );
    agentxJsApi.agentContact.addEventListener(
      "eAgentOfferContactRona",
      (msg: Service.Aqm.Contact.AgentContact) => {
        logger.info("AgentContact eAgentOfferContactRona: ", msg);
        // AUX Sandbox Contact
        const idx = this.contacts.indexOf(msg.data.interactionId);
        if (idx != -1) {
          this.contacts = this.contacts.slice(idx, 1);
          logger.info(this.contacts);
        }
      }
    );
    agentxJsApi.agentContact.addEventListener(
      "eAgentOfferConsult",
      (msg: Service.Aqm.Contact.AgentContact) => logger.info("AgentContact eAgentOfferConsult: ", msg)
    );
    agentxJsApi.agentContact.addEventListener("eAgentWrapup", (msg: Service.Aqm.Contact.AgentContact) =>
      logger.info("AgentContact eAgentWrapup: ", msg)
    );
    agentxJsApi.agentContact.addEventListener("eAgentContactHeld", (msg: Service.Aqm.Contact.AgentContact) =>
      logger.info("AgentContact eAgentContactHeld: ", msg)
    );
    agentxJsApi.agentContact.addEventListener(
      "eAgentContactUnHeld",
      (msg: Service.Aqm.Contact.AgentContact) => logger.info("AgentContact eAgentContactUnHeld: ", msg)
    );
    agentxJsApi.agentContact.addEventListener(
      "eCallRecordingStarted",
      (msg: Service.Aqm.Contact.AgentContact) => logger.info("AgentContact eCallRecordingStarted: ", msg)
    );
    agentxJsApi.agentContact.addEventListener(
      "eAgentConsultCreated",
      (msg: Service.Aqm.Contact.AgentContact) => logger.info("AgentContact eAgentConsultCreated: ", msg)
    );
    agentxJsApi.agentContact.addEventListener(
      "eAgentConsultConferenced",
      (msg: Service.Aqm.Contact.AgentContact) => logger.info("AgentContact eAgentConsultConferenced: ", msg)
    );
    agentxJsApi.agentContact.addEventListener(
      "eAgentConsultEnded",
      (msg: Service.Aqm.Contact.AgentContact) => logger.info("AgentContact eAgentConsultEnded: ", msg)
    );
    agentxJsApi.agentContact.addEventListener(
      "eAgentCtqCancelled",
      (msg: Service.Aqm.Contact.AgentContact) => logger.info("AgentContact eAgentCtqCancelled: ", msg)
    );
    agentxJsApi.agentContact.addEventListener("eAgentConsulting", (msg: any) =>
      logger.info("AgentContact eAgentConsulting: ", msg)
    );
    agentxJsApi.agentContact.addEventListener(
      "eAgentConsultFailed",
      (msg: Service.Aqm.Contact.AgentContact) => logger.info("AgentContact eAgentConsultFailed: ", msg)
    );
    agentxJsApi.agentContact.addEventListener(
      "eAgentConsultEndFailed",
      (msg: Service.Aqm.Contact.AgentContact) => logger.info("AgentContact eAgentConsultEndFailed: ", msg)
    );
    agentxJsApi.agentContact.addEventListener("eAgentCtqFailed", (msg: any) =>
      logger.info("AgentContact eAgentCtqFailed: ", msg)
    );
    agentxJsApi.agentContact.addEventListener(
      "eAgentCtqCancelFailed",
      (msg: Service.Aqm.Contact.AgentContact) => logger.info("AgentContact eAgentCtqCancelFailed: ", msg)
    );
    agentxJsApi.agentContact.addEventListener(
      "eAgentConsultConferenceEndFailed",
      (msg: Service.Aqm.Contact.AgentContact) =>
        logger.info("AgentContact eAgentConsultConferenceEndFailed: ", msg)
    );
  }

  getCurrentInteractionId() {
    let path = window.location.pathname;
    if (path.indexOf("task") >= 0 && path.replace("task/", "").length > 0) {
      this.sampleInteractionId = path.replace("/task/", "");
      logger.info("Current interactionID: ", this.sampleInteractionId);
    }
  }

  async changeState(s: "Available" | "Idle") {
    const agentState = await agentxJsApi.agentStateInfo.stateChange({
      state: s,
      auxCodeIdArray: "0",
    });
    logger.info("State Changed", agentState);
  }

  async getAgentAddressBooks() {
    const books = await agentxJsApi.agentStateInfo.fetchAddressBooks();
    logger.info("Address books: ", books);
  }

  async getAgentInfo() {
    const latestData = agentxJsApi.agentStateInfo.latestData;
    logger.info("AgentStateInfo latestData: ", latestData);
  }

  getClientLocale() {
    logger.info("Client locale: ", agentxJsApi.config.clientLocale);
  }

  async getToken() {
    const token = await agentxJsApi.actions.getToken();
    logger.info(token);
  }

  async getIdleCodes() {
    const idle = await agentxJsApi.actions.getIdleCodes();
    logger.info(idle);
  }

  async getwrapupCodes() {
    const wrapup = await agentxJsApi.actions.getWrapUpCodes();
    logger.info(wrapup);
  }

  async fireNotification() {
    const raw: Notifications.ItemMeta.Raw = {
      data: {
        type: Notifications.ItemMeta.Type.Info,
        mode: Notifications.ItemMeta.Mode.AutoDismiss,
        title: "Info - Acknowledge",
        data: "Lorem Ipsum Dolor"
      }
    };
    const [ status, reason, mode ]: [ Notifications.ItemMeta.Status, Notifications.ItemMeta.StatusChangeEventReason, Notifications.ItemMeta.Mode ] = await agentxJsApi.actions.fireGeneralAutoDismissNotification(raw as Notifications.ItemMeta.Raw & { data: { mode: Notifications.ItemMeta.Mode.AutoDismiss; }; })
    logger.info(status, reason, mode);
  }

  async getBuddyAgents() {
    const buddyAgentPayload = {
      agentProfileId: "AXCLfZhH9S1oTdqE1OFw",
      channelName: "chat",
      state: "Available",
    };

    this.buddyAgents = await agentxJsApi.agentContact.buddyAgents({
      data: buddyAgentPayload,
    });
    logger.info(this.buddyAgents);
  }

  async getVTeamList() {
    const vTeamPayload = {
      agentProfileId: "AXCLfZhH9S1oTdqE1OFw",
      agentSessionId: "5a84d32c-691b-4500-b163-d6cdba2a3163",
      channelType: "chat",
      type: "inboundqueue",
    };

    this.vTeam = await agentxJsApi.agentContact.vteamList({
      data: vTeamPayload,
    });
    logger.info(this.vTeam, this.vTeam!.data.data.vteamList);
  }

  async acceptInteraction(interactionId: string) {
    let acceptInteraction = await agentxJsApi.agentContact.accept({
      interactionId: interactionId,
    });
    logger.info(acceptInteraction);
  }

  async endInteraction() {
    let endedInteraction = await agentxJsApi.agentContact.end({
      interactionId: this.sampleInteractionId,
    });
    logger.info(endedInteraction);
  }

  async wrapUpInteraction() {
    let wrappedUpInteraction = await agentxJsApi.agentContact.wrapup({
      interactionId: this.sampleInteractionId,
      data: {
        wrapUpReason: "Example reason here",
        auxCodeId: "0",
        isAutoWrapup: "false",
      },
    });
    logger.info(wrappedUpInteraction);
  }

  async consultWithAgent() {
    let consult = await agentxJsApi.agentContact.consult({
      interactionId: this.sampleInteractionId,
      data: {
        agentId: this.agentId,
        destAgentId: this.buddyAgents?.data.agentList[0].agentId,
        mediaType: "chat",
      },
      url: "consult",
    });
    logger.info(consult);
  }

  async consultConferenceWithAgent() {
    let consult = await agentxJsApi.agentContact.consultConference({
      interactionId: this.sampleInteractionId,
      data: {
        agentId: this.agentId,
        destAgentId: this.buddyAgents?.data.agentList[0].agentId,
        mediaType: "chat",
      },
    });
    logger.info(consult);
  }

  async endConferenceWithAgent() {
    let consult = await agentxJsApi.agentContact.consultEnd({
      interactionId: this.sampleInteractionId,
      isConsult: false,
    });
    logger.info(consult);
  }

  async endConsultConferenceWithAgent() {
    let consult = await agentxJsApi.agentContact.consultEnd({
      interactionId: this.sampleInteractionId,
      isConsult: true,
    });
    logger.info(consult);
  }

  async consultTransferToAgent() {
    let consult = await agentxJsApi.agentContact.consultTransfer({
      interactionId: this.sampleInteractionId,
      data: {
        agentId: this.agentId,
        destAgentId: this.buddyAgents?.data.agentList[0].agentId,
        mediaType: "chat",
        mediaResourceId: "b102ed10-fac2-4f8e-bece-1c2da6ba6dd8",
      },
    });
    logger.info(consult);
  }

  async vTeamTransfer() {
    let consult = await agentxJsApi.agentContact.vteamTransfer({
      interactionId: this.sampleInteractionId,
      data: {
        vteamId: this.vTeam?.data.data.vteamList[0].analyzerId,
        vteamType: this.vTeam?.data.data.vteamList[0].type,
      },
    });
    logger.info(consult);
  }

  render() {
    return html`
      <div class="container">
        <h1>Custom Component Contents</h1>
        <md-tabs>
          <md-tab slot="tab">agentxJsApi.agentStateInfo</md-tab>
          <md-tab-panel slot="panel">
            <div class="action-container">
              <h2>Monitor data output in console log</h2>
              <md-button @button-click=${() => this.getAgentInfo()}
                >Get latest Agent info</md-button
              >
              <md-button @button-click=${() => this.getClientLocale()}
                >Get current Locale</md-button
              >

              <md-button @button-click=${() => this.changeState("Idle")}
                >Change State to Idle</md-button
              >
              <md-button @button-click=${() => this.changeState("Available")}
                >Change State to Available</md-button
              >
              <md-button @button-click=${() => this.getAgentAddressBooks()}
                >Fetch Address Books</md-button
              >
            </div>
          </md-tab-panel>

          <md-tab slot="tab">agentxJsApi.agentContact</md-tab>
          <md-tab-panel slot="panel">
            <div class="action-container">
              <h2>agentxJsApi.agentContact sub-module</h2>
              <h3>Get Buddy Agents</h3>
              <md-button @button-click=${() => this.getBuddyAgents()}
                >Get Buddy Agents</md-button
              >

              <h3>Get vTeam list</h3>
              <md-button @button-click=${() => this.getVTeamList()}
                >Get vTeam list</md-button
              >

              <h3>Accept interactions</h3>

              ${
                this.contacts.map(contact => {
                  if (this.acceptedContacts.indexOf(contact) != -1) {
                    return html`
                      <md-button @button-click=${() => this.acceptInteraction(contact)}
                        >Accept interaction for ${contact}</md-button
                      >
                    `
                  }
                })
              }

              <h3>End interaction</h3>
              <md-button @button-click=${() => this.endInteraction()}
                >End interaction for ${this.sampleInteractionId}</md-button
              >

              <h3>Wrap Up interaction</h3>
              <md-button @button-click=${() => this.wrapUpInteraction()}
                >Wrap Up interaction for ${this.sampleInteractionId}</md-button
              >

              <h3>Consult</h3>
              <md-label
                >Fetch buddy agents before initiating a consult</md-label
              >
              <md-button @button-click=${() => this.consultWithAgent()}
                >Consult with
                ${this.buddyAgents && this.buddyAgents?.data.agentList.length > 0
                  ? this.buddyAgents?.data.agentList[0].agentId
                  : "No Agents available"}</md-button
              >

              <md-label
                >Make sure to have active conference before ending</md-label
              >
              <md-button @button-click=${() => this.endConferenceWithAgent()}
                >End Consult with
                ${this.buddyAgents && this.buddyAgents?.data.agentList.length > 0
                  ? this.buddyAgents?.data.agentList[0].agentId
                  : "No Agents available"}</md-button
              >

              <h3>Consult Conference</h3>

              <md-button
                @button-click=${() => this.consultConferenceWithAgent()}
                >Consult Conference with
                ${this.buddyAgents && this.buddyAgents?.data.agentList.length > 0
                  ? this.buddyAgents?.data.agentList[0].agentId
                  : "No Agents available"}</md-button
              >
              <md-label
                >Make sure to have active conference before ending</md-label
              >
              <md-button
                @button-click=${() => this.endConsultConferenceWithAgent()}
                >End Consult Conference with
                ${this.buddyAgents && this.buddyAgents?.data.agentList.length > 0
                  ? this.buddyAgents?.data.agentList[0].agentId
                  : "No Agents available"}</md-button
              >

              <h3>Consult Transfer</h3>
              <md-button @button-click=${() => this.consultTransferToAgent()}
                >Consult Transfer to
                ${this.buddyAgents && this.buddyAgents?.data.agentList.length > 0
                  ? this.buddyAgents?.data.agentList[0].agentId
                  : "No Agents available"}</md-button
              >

              <h3>vTeam Transfer</h3>
              <md-label>Fetch vTeam before initiating a transfer</md-label>
              <md-button @button-click=${() => this.vTeamTransfer()}
                >Consult Transfer to
                ${this.vTeam?.data.data.vteamList[0].analyzerId}</md-button
              >
            </div>
          </md-tab-panel>

          <md-tab slot="tab">agentxJsApi.shortcutKey</md-tab>
          <md-tab-panel slot="panel">
            <div class=“action-container”>
              <h2>Monitor data output in console log</h2>
              <md-button @button-click=${() => logger.info(agentxJsApi.shortcutKey.DEFAULT_SHORTCUT_KEYS)}
                  >Get Default Shortcut Keys</md-button
                >

                <md-button @button-click=${() => logger.info(agentxJsApi.shortcutKey.MODIFIERS)}
                  >Get Shortcut Keys Modifiers</md-button
                >

                <md-button @button-click=${() => logger.info(agentxJsApi.shortcutKey.REGISTERED_KEYS)}
                  >Get all registered Shortcut Keys</md-button
                >

                <md-button @button-click=${() => logger.info(agentxJsApi.shortcutKey.getRegisteredKeys())}
                  >Get all registered Shortcut Keys</md-button
                >
            </div>
          </md-tab-panel>

          <md-tab slot="tab">agentxJsApi.actions</md-tab>
          <md-tab-panel slot="panel">
            <div class="action-container">
              <h2>Monitor data output in console log</h2>
              <md-button @button-click=${() => this.getToken()}
                >Get Agent Desktop auth token</md-button
              >

              <md-button @button-click=${() => this.getToken()}
                >Get idle codes</md-button
              >

              <md-button @button-click=${() => this.getToken()}
                >Get wrap up codes</md-button
              >

              <md-button @button-click=${() => this.getToken()}
                >Fire notification</md-button
              >
              
            </div>
          </md-tab-panel>

          <md-tab slot="tab">Vertical overflow tab</md-tab>
          <md-tab-panel slot="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              ultricies lorem sem, id placerat massa rutrum eu. Sed dui neque,
              tincidunt quis sapien in, aliquam dignissim nulla. Vestibulum
              mollis at orci ac facilisis. Sed ut aliquam nunc. Suspendisse eu
              interdum odio. Sed libero dui, malesuada ac vulputate id,
              vulputate vel nisi. Proin id egestas mi. Fusce ut sem nibh.
              Vivamus aliquet accumsan feugiat. Etiam accumsan tortor quis
              ultrices tempus. Aenean porta feugiat ex. Praesent dictum mauris
              et dui posuere aliquet et non arcu. Sed eget aliquam elit. Nullam
              ornare ipsum quis feugiat tincidunt. Nullam a libero sed enim
              dictum convallis. Suspendisse egestas elit risus, at ultrices
              massa blandit eget. Vivamus dapibus bibendum nisl, eget cursus
              risus ultrices et. Quisque felis tortor, accumsan vel tempus quis,
              rutrum sed urna. Nulla quis magna et eros facilisis blandit. Nunc
              mattis urna eget diam accumsan, non vehicula est aliquet. Etiam
              vestibulum dui neque, faucibus sollicitudin nibh vestibulum vel.
              Nullam semper porta ipsum non varius. Vestibulum sollicitudin
              ipsum mauris. Praesent quis nisi sagittis, malesuada lacus semper,
              iaculis elit. Maecenas hendrerit quam ut felis pretium volutpat.
              Nulla molestie et tellus ac tincidunt. Sed sodales ultrices
              condimentum. Fusce quis rutrum dui, ut consectetur ante. Morbi
              quis sem in ipsum tempor mollis. Curabitur ac risus sed quam
              consequat faucibus quis nec neque. Nullam porttitor felis ut felis
              cursus dignissim. Curabitur tincidunt tortor et pharetra
              malesuada. Phasellus tempor ullamcorper scelerisque. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nulla porttitor ex
              vel egestas tristique. Aenean molestie cursus tortor at cursus.
              Sed interdum volutpat leo, sit amet placerat velit congue eu.
              Vestibulum vitae consequat ex. Ut nec venenatis augue, in porta
              massa. Curabitur quis porta felis, vel eleifend nisl. Nulla
              facilisi. Integer sagittis felis nec lacinia rutrum. Etiam a
              mauris eu nulla pulvinar auctor nec sit amet ex. Quisque turpis
              ipsum, lacinia in ex ut, tempor tempus est. Vivamus a rutrum
              velit. Donec eleifend fermentum sollicitudin. Quisque condimentum
              mauris convallis viverra tempus. Ut enim quam, pulvinar et metus
              interdum, sagittis ultricies dui. Aenean consectetur at risus eget
              ornare. Mauris pretium consequat metus a vestibulum. Nulla sit
              amet nisl eleifend, faucibus turpis at, mattis tellus. Aliquam
              vehicula orci ac nisi elementum, vitae sollicitudin odio ultrices.
              Proin in laoreet mi, vitae condimentum nibh. Nunc quis dictum
              urna, at imperdiet augue. Donec congue tempus elit quis rhoncus.
              Etiam orci quam, vestibulum egestas rutrum non, dapibus a justo.
            </p>
          </md-tab-panel>

        </md-tabs>
        <slot></slot>
      </div>
    `;
  }
}
