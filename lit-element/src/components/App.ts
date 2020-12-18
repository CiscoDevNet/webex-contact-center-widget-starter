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

@customElement("my-custom-component")
export default class MyCustomComponent extends LitElement {
  /**
   * Replace this with the logic to obtain interaction ID you need
   * through agentxJsApi.actions sub-module or through external props
   */
  @internalProperty() sampleInteractionId =
    "58f76ca3-409f-11eb-8606-f1b296a9b969";
  @internalProperty() agentId = "7d12d9ea-e8e0-41ee-81bf-c11a685b64ed";
  @internalProperty() buddyAgents: any = null;
  @internalProperty() vTeam: any = null;

  static get styles() {
    return styles;
  }
  connectedCallback() {
    super.connectedCallback();
    this.init();
    this.getCurrentInteractionId();
  }

  async init() {
    await agentxJsApi.config.init();
  }

  getCurrentInteractionId() {
    let path = window.location.pathname;
    if (path.indexOf("task") >=0 && path.replace("task/", "").length > 0) {
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

  async getBuddyAgents() {
    const buddyAgentPayload = {
      agentProfileId: "AXCLfZhH9S1oTdqE1OFw",
      channelName: "chat",
      state: "Available"
    };
     
    this.buddyAgents = await agentxJsApi.agentContact.buddyAgents({ data: buddyAgentPayload });
    logger.info(this.buddyAgents);
  }

  async getVTeamList() {
    const vTeamPayload = {
      agentProfileId: "AXCLfZhH9S1oTdqE1OFw",
      agentSessionId: "5a84d32c-691b-4500-b163-d6cdba2a3163",
      channelType: "chat",
      type: "inboundqueue"
    };
     
    this.vTeam = await agentxJsApi.agentContact.vteamList({ data: vTeamPayload });
    logger.info(this.vTeam);
  }

  async endInteraction() {
    let endedInteraction = await agentxJsApi.agentContact.end({
      interactionId: this.sampleInteractionId
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
        }
    });
    logger.info(wrappedUpInteraction);
  }

  async consultWithAgent() {
    let consult = await agentxJsApi.agentContact.consult({
      interactionId: this.sampleInteractionId,
      data: {
        agentId: this.agentId,
        destAgentId: this.buddyAgents?.data.agentList[0].agentId,
        mediaType: "chat"
      },
      url: "consult"
    })
    logger.info(consult);
  }

  async consultConferenceWithAgent() {
    let consult = await agentxJsApi.agentContact.consultConference({
      interactionId: this.sampleInteractionId,
      data: {
        agentId: this.agentId,
        destAgentId: this.buddyAgents?.data.agentList[0].agentId,
        mediaType: "chat"
      }
    })
    logger.info(consult);
  }

  async endConferenceWithAgent() {
    let consult = await agentxJsApi.agentContact.consultEnd({
      interactionId: this.sampleInteractionId,
      isConsult: false
    })
    logger.info(consult);
  }

  async endConsultConferenceWithAgent() {
    let consult = await agentxJsApi.agentContact.consultEnd({
      interactionId: this.sampleInteractionId,
      isConsult: true
    })
    logger.info(consult);
  }

  async consultTransferToAgent() {
    let consult = await agentxJsApi.agentContact.consultTransfer({
      interactionId: this.sampleInteractionId,
      data: {
        agentId: this.agentId,
        destAgentId: this.buddyAgents?.data.agentList[0].agentId,
        mediaType: "chat",
        mediaResourceId: "b102ed10-fac2-4f8e-bece-1c2da6ba6dd8"
      }
    })
    logger.info(consult);
  }

  async vTeamTransfer() {
    let consult = await agentxJsApi.agentContact.vteamTransfer({
      interactionId: this.sampleInteractionId,
      data: {
        vteamId: this.vTeam?.data.data.vteamList[0].analyzerId,
        vteamType: this.vTeam?.data.data.vteamList[0].type
      }
    })
    logger.info(consult);
  }

  render() {
    return html`
      <div class="container">
        <h1>Custom Component Contents</h1>
        <md-tabs>
          <md-tab slot="tab">Request Data</md-tab>
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

              <h3>End interaction</h3>
              <md-button @button-click=${() => this.endInteraction()}
                >End interaction for ${this.sampleInteractionId}</md-button
              >

              <h3>Wrap Up interaction</h3>
              <md-button @button-click=${() => this.wrapUpInteraction()}
                >Wrap Up interaction for ${this.sampleInteractionId}</md-button
              >

              <h3>Consult</h3>
              <md-label>Fetch buddy agents before initiating a consult</md-label>
              <md-button @button-click=${() => this.consultWithAgent()}
                >Consult with ${this.buddyAgents?.data.agentList[0].agentId}</md-button
              >

              <md-label>Make sure to have active conference before ending</md-label>
              <md-button @button-click=${() => this.endConferenceWithAgent()}
                >End Consult with ${this.buddyAgents?.data.agentList[0].agentId}</md-button
              >

              <h3>Consult Conference</h3>

              <md-button @button-click=${() => this.consultConferenceWithAgent()}
                >Consult Conference with ${this.buddyAgents?.data.agentList[0].agentId}</md-button
              >
              <md-label>Make sure to have active conference before ending</md-label>
              <md-button @button-click=${() => this.endConsultConferenceWithAgent()}
                >End Consult Conference with ${this.buddyAgents?.data.agentList[0].agentId}</md-button
              >

              <h3>Consult Transfer</h3>
              <md-button @button-click=${() => this.consultTransferToAgent()}
                >Consult Transfer to ${this.buddyAgents?.data.agentList[0].agentId}</md-button
              >

              <h3>vTeam Transfer</h3>
              <md-label>Fetch vTeam before initiating a transfer</md-label>
              <md-button @button-click=${() => this.vTeamTransfer()}
                >Consult Transfer to ${this.vTeam?.data.data.vteamList[0].analyzerId}</md-button
              >

            </div>
          </md-tab-panel>

          <md-tab slot="tab">Two</md-tab>
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
