/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Desktop } from "@wxcc-desktop/sdk";
import {
  html,
  LitElement,
  customElement,
  internalProperty,
  property
} from "lit-element";
import styles from "./App.scss";
import { logger } from "./sdk";
import { Service } from "@wxcc-desktop/sdk-types";
import { Notifications } from "@uuip/unified-ui-platform-sdk";

@customElement("my-custom-component")
export default class MyCustomComponent extends LitElement {
  /**
   * These values will be replaced with STORE values through Data provider
   * in JSON layout configuration file
   * Data provider documentation:
   * https://apim-dev-portal.appstaging.ciscoccservice.com/documentation/guides/desktop#data-provider%E2%80%94widget-properties-and-attributes
   */

  @property({ type: String, attribute: "agent-id", reflect: true }) agentId =
    "7d12d9ea-e8e0-41ee-81bf-c11a685b64ed";
  @property({ type: String, attribute: "agent-profile-id", reflect: true })
  agentProfileId = "AXCLfZhH9S1oTdqE1OFw";
  @property({ type: String, attribute: "agent-session-id", reflect: true })
  agentSessionId = "5a84d32c-691b-4500-b163-d6cdba2a3163";

  /**
   * Replace this with the logic to obtain interaction ID you need
   * through Desktop.actions sub-module or through external props
   */

  @internalProperty()
  sampleInteractionId: Service.Aqm.Contact.Interaction["interactionId"] =
    "58f76ca3-409f-11eb-8606-f1b296a9b969";

  /**
   * Replace this with the logic to obtain mediaResourceId you need
   * through Desktop.actions sub-module or through external props
   */

  @internalProperty()
  mediaResourceId: Service.Aqm.Contact.consultTransferPayLoad["mediaResourceId"] =
    "b102ed10-fac2-4f8e-bece-1c2da6ba6dd8";
  @internalProperty()
  buddyAgents: Service.Aqm.Contact.BuddyAgentsSuccess | null = null;
  @internalProperty() vTeam: Service.Aqm.Contact.VTeamSuccess | null = null;
  @internalProperty()
  contacts: Service.Aqm.Contact.Interaction["interactionId"][] = [];
  @internalProperty()
  acceptedContacts: Service.Aqm.Contact.Interaction["interactionId"][] = [];
  @internalProperty() assignedContacts: {
    interaction: Service.Aqm.Contact.Interaction;
  }[] = [];

  static get styles() {
    return styles;
  }
  async connectedCallback() {
    super.connectedCallback();

    await Desktop.config.init();

    this.getCurrentInteractionId();
    this.subscribeAgentContactDataEvents();
    this.subscribeDialerEvents();
    this.subscribeScreenpopEvent();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    Desktop.agentContact.removeAllEventListeners();
    Desktop.dialer.removeAllEventListeners();
    Desktop.screenpop.removeAllEventListeners();
  }

  subscribeScreenpopEvent() {
    Desktop.screenpop.addEventListener("eScreenPop", msg => logger.info(msg));
  }

  subscribeDialerEvents() {
    Desktop.dialer.addEventListener("eOutdialFailed", msg => logger.info(msg));
  }

  subscribeAgentContactDataEvents() {
    Desktop.agentContact.addEventListener("eAgentContact", msg =>
      logger.info("AgentContact eAgentContact: ", msg)
    );
    Desktop.agentContact.addEventListener("eAgentContactAssigned", msg => {
      logger.info("AgentContact eAgentContactAssigned: ", msg);

      this.acceptedContacts = [
        ...this.acceptedContacts,
        msg.data.interactionId
      ];

      logger.info(this.acceptedContacts);
    });
    Desktop.agentContact.addEventListener("eAgentContactEnded", msg => {
      logger.info("AgentContact eAgentContactEnded: ", msg);
      const idx = this.acceptedContacts.indexOf(msg.data.interactionId);
      if (idx != -1) {
        this.acceptedContacts = this.acceptedContacts.slice(idx, 1);
        logger.info(this.acceptedContacts);
      }
    });
    Desktop.agentContact.addEventListener("eAgentContactWrappedUp", msg =>
      logger.info("AgentContact eAgentContactWrappedUp: ", msg)
    );
    Desktop.agentContact.addEventListener("eAgentOfferContact", msg => {
      logger.info("AgentContact eAgentOfferContact: ", msg.data.interactionId);
      // AUX Sandbox Contact
      this.contacts = [...this.contacts, msg.data.interactionId];
      logger.info("AgentContact eAgentOfferContact: ", this.contacts);
    });
    Desktop.agentContact.addEventListener("eAgentOfferContactRona", msg => {
      logger.info(
        "AgentContact eAgentOfferContactRona: ",
        msg.data.interactionId
      );
      // AUX Sandbox Contact
      const idx = this.contacts.indexOf(msg.data.interactionId);
      if (idx != -1) {
        this.contacts = [
          ...this.contacts.filter(
            interactionId => interactionId !== msg.data.interactionId
          )
        ];
        logger.info("AgentContact eAgentOfferContactRona: ", this.contacts);
      }
    });
    Desktop.agentContact.addEventListener("eAgentOfferConsult", msg =>
      logger.info("AgentContact eAgentOfferConsult: ", msg)
    );
    Desktop.agentContact.addEventListener("eAgentWrapup", msg =>
      logger.info("AgentContact eAgentWrapup: ", msg)
    );
    Desktop.agentContact.addEventListener("eAgentContactHeld", msg =>
      logger.info("AgentContact eAgentContactHeld: ", msg)
    );
    Desktop.agentContact.addEventListener("eAgentContactUnHeld", msg =>
      logger.info("AgentContact eAgentContactUnHeld: ", msg)
    );
    Desktop.agentContact.addEventListener("eCallRecordingStarted", msg =>
      logger.info("AgentContact eCallRecordingStarted: ", msg)
    );
    Desktop.agentContact.addEventListener("eAgentConsultCreated", msg =>
      logger.info("AgentContact eAgentConsultCreated: ", msg)
    );
    Desktop.agentContact.addEventListener("eAgentConsultConferenced", msg =>
      logger.info("AgentContact eAgentConsultConferenced: ", msg)
    );
    Desktop.agentContact.addEventListener("eAgentConsultEnded", msg =>
      logger.info("AgentContact eAgentConsultEnded: ", msg)
    );
    Desktop.agentContact.addEventListener("eAgentCtqCancelled", msg =>
      logger.info("AgentContact eAgentCtqCancelled: ", msg)
    );
    Desktop.agentContact.addEventListener("eAgentConsulting", msg =>
      logger.info("AgentContact eAgentConsulting: ", msg)
    );
    Desktop.agentContact.addEventListener("eAgentConsultFailed", msg =>
      logger.info("AgentContact eAgentConsultFailed: ", msg)
    );
    Desktop.agentContact.addEventListener("eAgentConsultEndFailed", msg =>
      logger.info("AgentContact eAgentConsultEndFailed: ", msg)
    );
    Desktop.agentContact.addEventListener("eAgentCtqFailed", msg =>
      logger.info("AgentContact eAgentCtqFailed: ", msg)
    );
    Desktop.agentContact.addEventListener("eAgentCtqCancelFailed", msg =>
      logger.info("AgentContact eAgentCtqCancelFailed: ", msg)
    );
    Desktop.agentContact.addEventListener(
      "eAgentConsultConferenceEndFailed",
      msg => logger.info("AgentContact eAgentConsultConferenceEndFailed: ", msg)
    );
  }

  getCurrentInteractionId() {
    const path = window.location.pathname;
    if (path.indexOf("task") >= 0 && path.replace("task/", "").length > 0) {
      this.sampleInteractionId = path.replace("/task/", "");
      logger.info("Current interactionID: ", this.sampleInteractionId);
    }
  }

  async changeState(s: "Available" | "Idle") {
    const agentState = await Desktop.agentStateInfo.stateChange({
      state: s,
      auxCodeIdArray: "0"
    });
    logger.info("State Changed", agentState);
  }

  async getAgentAddressBooks() {
    const books = await Desktop.agentStateInfo.fetchAddressBooks();
    logger.info("Address books: ", books);
  }

  async getAgentInfo() {
    const latestData = Desktop.agentStateInfo.latestData;
    logger.info("AgentStateInfo latestData: ", latestData);
    if (latestData.agentSessionId && latestData.agentProfileID) {
      this.agentSessionId = latestData.agentSessionId;
      this.agentProfileId = latestData.agentProfileID;
    }
  }

  getClientLocale() {
    logger.info("Client locale: ", Desktop.config.clientLocale);
  }

  async getToken() {
    const token = await Desktop.actions.getToken();
    logger.info(token);
  }

  async getIdleCodes() {
    const idle = await Desktop.actions.getIdleCodes();
    logger.info(idle);
  }

  async getwrapupCodes() {
    const wrapup = await Desktop.actions.getWrapUpCodes();
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
    const res = await Desktop.actions.fireGeneralAutoDismissNotification(
      raw as Notifications.ItemMeta.Raw & {
        data: { mode: Notifications.ItemMeta.Mode.AutoDismiss };
      }
    );
    if (res) {
      const [status, reason, mode] = res;
      logger.info(status, reason, mode);
    }
  }

  async getTaskMap() {
    const taskMap = await Desktop.actions.getTaskMap();
    console.log(taskMap);
    this.assignedContacts = Array.from(taskMap?.values() || []);
    console.log(this.assignedContacts[0]);
  }

  async getBuddyAgents() {
    const buddyAgentPayload = {
      agentProfileId: this.agentProfileId,
      channelName: "chat",
      state: "Available"
    };

    this.buddyAgents =
      (await Desktop.agentContact.buddyAgents({
        data: buddyAgentPayload
      })) || null;
    logger.info(this.buddyAgents);
  }

  async getVTeamList() {
    const vTeamPayload = {
      agentProfileId: this.agentProfileId,
      agentSessionId: this.agentSessionId,
      channelType: "chat",
      type: "inboundqueue"
    };

    this.vTeam =
      (await Desktop.agentContact.vteamList({
        data: vTeamPayload
      })) || null;
    logger.info(this.vTeam, this.vTeam!.data.data.vteamList);
  }

  async acceptInteraction(interactionId: string) {
    const acceptInteraction = await Desktop.agentContact.accept({
      interactionId: interactionId
    });
    logger.info(acceptInteraction);
  }

  async endInteraction() {
    const endedInteraction = await Desktop.agentContact.end({
      interactionId: this.sampleInteractionId
    });
    logger.info(endedInteraction);
  }

  async wrapUpInteraction() {
    const wrappedUpInteraction = await Desktop.agentContact.wrapup({
      interactionId: this.sampleInteractionId,
      data: {
        wrapUpReason: "Example reason here",
        auxCodeId: "0",
        isAutoWrapup: "false"
      }
    });
    logger.info(wrappedUpInteraction);
  }

  async consultWithAgent() {
    const consult = await Desktop.agentContact.consult({
      interactionId: this.sampleInteractionId,
      data: {
        agentId: this.agentId,
        destAgentId: this.buddyAgents?.data.agentList[0].agentId,
        mediaType: "chat"
      },
      url: "consult"
    });
    logger.info(consult);
  }

  async consultConferenceWithAgent() {
    const consult = await Desktop.agentContact.consultConference({
      interactionId: this.sampleInteractionId,
      data: {
        agentId: this.agentId,
        destAgentId: this.buddyAgents?.data.agentList[0].agentId,
        mediaType: "chat"
      }
    });
    logger.info(consult);
  }

  async endConferenceWithAgent() {
    const consult = await Desktop.agentContact.consultEnd({
      interactionId: this.sampleInteractionId,
      isConsult: false
    });
    logger.info(consult);
  }

  async endConsultConferenceWithAgent() {
    const consult = await Desktop.agentContact.consultEnd({
      interactionId: this.sampleInteractionId,
      isConsult: true
    });
    logger.info(consult);
  }

  async consultTransferToAgent() {
    if (this.buddyAgents?.data.agentList[0].agentId) {
      const consult = await Desktop.agentContact.consultTransfer({
        interactionId: this.sampleInteractionId,
        data: {
          agentId: this.agentId,
          destAgentId: this.buddyAgents?.data.agentList[0].agentId,
          mediaType: "chat",
          mediaResourceId: "b102ed10-fac2-4f8e-bece-1c2da6ba6dd8"
        }
      });
      logger.info(consult);
    } else {
      logger.info("consultTransferToAgent(): agentId is not defined");
    }
  }

  async vTeamTransfer() {
    if (
      this.vTeam?.data.data.vteamList[0].analyzerId &&
      this.vTeam?.data.data.vteamList[0].type
    ) {
      const consult = await Desktop.agentContact.vteamTransfer({
        interactionId: this.sampleInteractionId,
        data: {
          vteamId: this.vTeam?.data.data.vteamList[0].analyzerId,
          vteamType: this.vTeam?.data.data.vteamList[0].type
        }
      });
      logger.info(consult);
    } else {
      if (!this.vTeam?.data.data.vteamList[0].analyzerId) {
        logger.info("vTeamTransfer(): analyzerId is not defined");
      }
      if (!this.vTeam?.data.data.vteamList[0].type) {
        logger.info("vTeamTransfer(): type is not defined");
      }
    }
  }

  render() {
    return html`
      <div class="container">
        <h1>Custom Component Contents</h1>
        <md-tabs>
          <md-tab slot="tab">Desktop.agentStateInfo</md-tab>
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

          <md-tab slot="tab">Desktop.agentContact</md-tab>
          <md-tab-panel slot="panel">
            <div class="action-container">
              <h2>Desktop.agentContact sub-module</h2>
              <h3>Get Available Agents</h3>
              <p>
                Make sure to fetch latest agent info first before invoking this
                method
              </p>
              <md-button @button-click=${() => this.getBuddyAgents()}
                >Get Available Agents</md-button
              >

              <h3>Get channel specific team list</h3>
              <p>
                Make sure to fetch latest agent info first before invoking this
                method
              </p>
              <md-button @button-click=${() => this.getVTeamList()}
                >Get Team list</md-button
              >

              <h3>Accept interactions</h3>
              <span>New incoming interactions will appear here</span>
              ${this.contacts.map(interactionId => {
                if (this.acceptedContacts.indexOf(interactionId) == -1) {
                  return html`
                    <md-button
                      @button-click=${() =>
                        this.acceptInteraction(interactionId)}
                      >Accept interaction for ${interactionId}</md-button
                    >
                  `;
                }
              })}

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
                ${this.buddyAgents &&
                this.buddyAgents?.data.agentList.length > 0
                  ? this.buddyAgents?.data.agentList[0].agentId
                  : "No Agents available"}</md-button
              >

              <md-label
                >Make sure to have active conference before ending</md-label
              >
              <md-button @button-click=${() => this.endConferenceWithAgent()}
                >End Consult with
                ${this.buddyAgents &&
                this.buddyAgents?.data.agentList.length > 0
                  ? this.buddyAgents?.data.agentList[0].agentId
                  : "No Agents available"}</md-button
              >

              <h3>Consult Conference</h3>

              <md-button
                @button-click=${() => this.consultConferenceWithAgent()}
                >Consult Conference with
                ${this.buddyAgents &&
                this.buddyAgents?.data.agentList.length > 0
                  ? this.buddyAgents?.data.agentList[0].agentId
                  : "No Agents available"}</md-button
              >
              <md-label
                >Make sure to have active conference before ending</md-label
              >
              <md-button
                @button-click=${() => this.endConsultConferenceWithAgent()}
                >End Consult Conference with
                ${this.buddyAgents &&
                this.buddyAgents?.data.agentList.length > 0
                  ? this.buddyAgents?.data.agentList[0].agentId
                  : "No Agents available"}</md-button
              >

              <h3>Consult Transfer</h3>
              <md-button @button-click=${() => this.consultTransferToAgent()}
                >Consult Transfer to
                ${this.buddyAgents &&
                this.buddyAgents?.data.agentList.length > 0
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

          <md-tab slot="tab">Desktop.shortcutKey</md-tab>
          <md-tab-panel slot="panel">
            <div class="“action-container”">
              <h2>Monitor data output in console log</h2>
              <md-button
                @button-click=${() =>
                  logger.info(Desktop.shortcutKey.DEFAULT_SHORTCUT_KEYS)}
                >Get Default Shortcut Keys</md-button
              >

              <md-button
                @button-click=${() =>
                  logger.info(Desktop.shortcutKey.MODIFIERS)}
                >Get Shortcut Keys Modifiers</md-button
              >

              <md-button
                @button-click=${() =>
                  logger.info(Desktop.shortcutKey.REGISTERED_KEYS)}
                >Get all registered Shortcut Keys</md-button
              >

              <md-button
                @button-click=${() =>
                  logger.info(Desktop.shortcutKey.getRegisteredKeys())}
                >Get all registered Shortcut Keys</md-button
              >
            </div>
          </md-tab-panel>

          <md-tab slot="tab">Desktop.actions</md-tab>
          <md-tab-panel slot="panel">
            <div class="action-container">
              <h2>Monitor data output in console log</h2>
              <md-button @button-click=${() => this.getToken()}
                >Get Agent Desktop auth token</md-button
              >

              <md-button @button-click=${() => this.getIdleCodes()}
                >Get idle codes</md-button
              >

              <md-button @button-click=${() => this.getwrapupCodes()}
                >Get wrap up codes</md-button
              >

              <md-button @button-click=${() => this.fireNotification()}
                >Fire notification</md-button
              >

              <md-button @button-click=${() => this.getTaskMap()}
                >Get full ist of assigned tasks including CAD
                variables</md-button
              >
              <span>
                ${this.assignedContacts.length > 0
                  ? html`
                      ${this.assignedContacts[0].interaction
                        .callAssociatedData &&
                        this.assignedContacts[0].interaction.callAssociatedData[
                          "ani"
                        ]["value"] +
                          " " +
                          this.assignedContacts[0].interaction
                            .callAssociatedData["customerName"]["value"]}
                    `
                  : `First assigned task CAD variables will appear here.`}
              </span>
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
