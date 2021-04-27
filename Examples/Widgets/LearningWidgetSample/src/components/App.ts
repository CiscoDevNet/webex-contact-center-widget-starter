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
  PropertyValues,
  internalProperty,
} from "lit-element";
import styles from "./App.scss";
import { Desktop } from "@wxcc-desktop/sdk";
import { Service } from "@wxcc-desktop/sdk-types";

const logger = Desktop.logger.createLogger("learning-sample");

@customElement("my-custom-component")
export default class MyCustomComponent extends LitElement {
  @internalProperty() entryPointId = "";
  @internalProperty() destinationNumber = "";
  @internalProperty() agentName: string | undefined = "";
  @internalProperty() userState: string | undefined = "";
  @internalProperty() teamName: string | undefined = "";
  @internalProperty() dn: string | undefined = "";

  @internalProperty() interactionId: any;
  @internalProperty() interactionType: any;
  @internalProperty() mediaChannel = "";
  @internalProperty() dnis = "";
  @internalProperty() fromAddress = "";
  @internalProperty() toAddress: any;
  @internalProperty() mediaType = "";
  @internalProperty() contactState = "";
  @internalProperty() responseData: any;

  static get styles() {
    return styles;
  }

  async updated(changeProperties: PropertyValues) {
    super.updated(changeProperties);
  }

  state = {
    defaultAuxCode: 0,
  };

  constructor() {
    super();
  }

  async firstUpdated(changeProperties: PropertyValues) {
    super.firstUpdated(changeProperties);
    try {
      setTimeout(async () => {
        logger.info("initializing sdk from learning-sample");
        await this.init();
        this.subscribeAgentContactDataEvents();
        this.subscribeDialerEvents();
        this.getAgentInfo();
        logger.info("initialized sdk from learning-sample");
      }, 2000);
    } catch (e) {
      logger.error("error while initializing sdk", e);
    }
  }

  async init() {
    // Initiating desktop config
    await Desktop.config.init();
    logger.info(
      "Desktop.agentStateInfo.latestData ",
      Desktop.agentStateInfo.latestData
    );
    this.agentName = Desktop.agentStateInfo.latestData.agentName;
    this.userState = Desktop.agentStateInfo.latestData.status;
    this.teamName = Desktop.agentStateInfo.latestData.teamName;
    this.dn = Desktop.agentStateInfo.latestData.dn;

    // Searching for default unavailble code in list of unavailable codes.
    let i = 0;
    const auxCount = Desktop.agentStateInfo.latestData.idleCodes
      ? Desktop.agentStateInfo.latestData.idleCodes.length
      : 0;
    while (i <= auxCount - 1) {
      logger.info("AuxCode list ", Desktop.agentStateInfo.latestData.idleCodes);

      if (
        Desktop.agentStateInfo.latestData.idleCodes &&
        Desktop?.agentStateInfo?.latestData?.idleCodes[i]?.isDefault == true
      ) {
        if (
          Desktop?.agentStateInfo?.latestData?.idleCodes &&
          Desktop?.agentStateInfo?.latestData?.idleCodes[i]?.id
        ) {
          this.state.defaultAuxCode =
            Desktop?.agentStateInfo?.latestData?.idleCodes[i]?.id;
          logger.info(" default aux found ", this.state.defaultAuxCode);
        }

        break;
      }
      i++;
    }
  }

  // function to change the state on button click
  async changeState(s: "Available" | "Idle") {
    logger.info("moving to state ", s);
    logger.info("latestData", Desktop.agentStateInfo.latestData);
    if (s == "Available") {
      const agentState = await Desktop.agentStateInfo.stateChange({
        state: s,
        auxCodeIdArray: "0",
      });

      logger.info("State Changed", agentState);
    }
    if (s == "Idle") {
      logger.info(s);
      const agentState = await Desktop.agentStateInfo.stateChange({
        state: s,
        auxCodeIdArray: "" + this.state.defaultAuxCode,
      });
      logger.info("State Changed to Idle", this.state.defaultAuxCode);
    }
  }

  // sample function to print latest data of agent
  getAgentInfo() {
    const latestData = Desktop.agentStateInfo.latestData;
    logger.info("learning-sample latestdata: ", latestData);
  }

  // Subscribing to Agent contact event
  subscribeAgentContactDataEvents() {
    Desktop.agentContact.addEventListener(
      "eAgentContact",
      (msg: Service.Aqm.Contact.AgentContact) => {
        logger.info("AgentContact eAgentContact: ", msg);
        this.responseData = msg.data;
      }
    );
    Desktop.agentContact.addEventListener(
      "eAgentContactAssigned",
      (msg: Service.Aqm.Contact.AgentContact) => {
        logger.info("AgentContact eAgentContactAssigned: ", msg);
        this.interactionId = msg.data.interactionId;
        this.mediaType = msg.data.interaction.mediaType;
        this.responseData = msg.data;
      }
    );
    Desktop.agentContact.addEventListener(
      "eAgentContactEnded",
      (msg: Service.Aqm.Contact.AgentContact) => {
        logger.info("AgentContact eAgentContactEnded: ", msg);
        this.responseData = msg.data;
      }
    );
    Desktop.agentContact.addEventListener(
      "eAgentContactWrappedUp",
      (msg: Service.Aqm.Contact.AgentContact) => {
        logger.info("AgentContact eAgentContactWrappedUp: ", msg);
        this.responseData = msg.data;
      }
    );
    Desktop.agentContact.addEventListener(
      "eAgentOfferContact",
      (msg: Service.Aqm.Contact.AgentContact) => {
        logger.info("AgentContact eAgentOfferContact: ", msg);
        this.interactionId = msg.data.interaction.interactionId;
        this.mediaType = msg.data.interaction.mediaType;
        this.dnis = msg.data.interaction.callProcessingDetails.dnis;
        this.fromAddress = msg.data.interaction.callProcessingDetails.ani;
        this.toAddress =
          msg.data.interaction.callProcessingDetails.virtualTeamName;
        this.contactState = "Contact Offered";
        this.responseData = msg.data;
      }
    );

    Desktop.agentContact.addEventListener(
      "eAgentOfferContactRona",
      (msg: Service.Aqm.Contact.AgentContact) => {
        logger.info("AgentContact eAgentOfferContactRona: ", msg);
        this.interactionId = "";
        this.interactionType = "";
        this.dnis = "";
        this.fromAddress = "";
        this.toAddress = "";
        this.mediaType = "";
        this.contactState = "";
        this.responseData = msg.data;
      }
    );
    Desktop.agentContact.addEventListener(
      "eAgentOfferConsult",
      (msg: Service.Aqm.Contact.AgentContact) => {
        logger.info("AgentContact eAgentOfferConsult: ", msg);
        this.responseData = msg.data;
      }
    );
    Desktop.agentContact.addEventListener(
      "eAgentWrapup",
      (msg: Service.Aqm.Contact.AgentContact) => {
        logger.info("AgentContact eAgentWrapup: ", msg);
        this.responseData = msg.data;
      }
    );
    Desktop.agentContact.addEventListener(
      "eAgentContactHeld",
      (msg: Service.Aqm.Contact.AgentContact) => {
        logger.info("AgentContact eAgentContactHeld: ", msg);
        this.responseData = msg.data;
      }
    );
    Desktop.agentContact.addEventListener(
      "eAgentContactUnHeld",
      (msg: Service.Aqm.Contact.AgentContact) => {
        logger.info("AgentContact eAgentContactUnHeld: ", msg);
        this.responseData = msg.data;
      }
    );
    Desktop.agentContact.addEventListener(
      "eCallRecordingStarted",
      (msg: Service.Aqm.Contact.AgentContact) => {
        logger.info("AgentContact eCallRecordingStarted: ", msg);
        this.responseData = msg.data;
      }
    );
    Desktop.agentContact.addEventListener(
      "eAgentConsultCreated",
      (msg: Service.Aqm.Contact.AgentContact) => {
        logger.info("AgentContact eAgentConsultCreated: ", msg);
        this.responseData = msg.data;
      }
    );
    Desktop.agentContact.addEventListener(
      "eAgentConsultConferenced",
      (msg: Service.Aqm.Contact.AgentContact) => {
        logger.info("AgentContact eAgentConsultConferenced: ", msg);
        this.responseData = msg.data;
      }
    );
    Desktop.agentContact.addEventListener(
      "eAgentConsultEnded",
      (msg: Service.Aqm.Contact.AgentContact) => {
        logger.info("AgentContact eAgentConsultEnded: ", msg);
        this.responseData = msg.data;
      }
    );
    Desktop.agentContact.addEventListener(
      "eAgentCtqCancelled",
      (msg: Service.Aqm.Contact.AgentContact) => {
        logger.info("AgentContact eAgentCtqCancelled: ", msg);
        this.responseData = msg.data;
      }
    );
    Desktop.agentContact.addEventListener("eAgentConsulting", (msg: any) => {
      logger.info("AgentContact eAgentConsulting: ", msg);
      this.responseData = msg.data;
    });
    Desktop.agentContact.addEventListener(
      "eAgentConsultFailed",
      (msg: Service.Aqm.Contact.AgentContact) =>
        logger.info("AgentContact eAgentConsultFailed: ", msg)
    );
    Desktop.agentContact.addEventListener(
      "eAgentConsultEndFailed",
      (msg: Service.Aqm.Contact.AgentContact) =>
        logger.info("AgentContact eAgentConsultEndFailed: ", msg)
    );
    Desktop.agentContact.addEventListener("eAgentCtqFailed", (msg: any) =>
      logger.info("AgentContact eAgentCtqFailed: ", msg)
    );
    Desktop.agentContact.addEventListener(
      "eAgentCtqCancelFailed",
      (msg: Service.Aqm.Contact.AgentContact) =>
        logger.info("AgentContact eAgentCtqCancelFailed: ", msg)
    );
    Desktop.agentContact.addEventListener(
      "eAgentConsultConferenceEndFailed",
      (msg: Service.Aqm.Contact.AgentContact) =>
        logger.info("AgentContact eAgentConsultConferenceEndFailed: ", msg)
    );

    Desktop.agentStateInfo.addEventListener("updated", (updatedList: any) => {
      logger.info("eAgentStateChangeSuccess", updatedList);
      updatedList.forEach((upd: any) => {
        logger.info("upd", upd);
        if (upd.name === "subStatus") {
          this.userState = upd.value;
          this.agentName = Desktop.agentStateInfo.latestData.agentName;
          this.teamName = Desktop.agentStateInfo.latestData.teamName;
          this.dn = Desktop.agentStateInfo.latestData.dn;
        }
      });
    });
  }

  subscribeDialerEvents() {
    Desktop.dialer.addEventListener(
      "eOutdialFailed",
      (msg: Service.Aqm.Contact.AgentContact) => logger.info(msg)
    );
  }

  inputHandler(e: any) {
    if (e.target.id === "entryPointId") {
      this.entryPointId = e.target.value;
    } else if (e.target.id === "destination") {
      this.destinationNumber = e.target.value;
    }
  }

  // function for making outdial call
  makeCall() {
    logger.info("makeCall", this.entryPointId, this.destinationNumber);
    const outdial = Desktop.dialer.startOutdial({
      data: {
        entryPointId: this.entryPointId, // analyzer id of outdial EP AXEWS1233.....
        destination: this.destinationNumber, // destination phone no.
        direction: "OUTBOUND",
        attributes: {},
        mediaType: "telephoney",
        outboundType: "OUTDIAL",
      },
    });
  }

  render() {
    return html`
      <div>
        <div
          class="container"
          style="padding: 12px; display: flex; flex-direction: row; width: 100%;"
        >
          <div style="flex: 1; padding: 10px">
            <h3>Agent State</h3>
            <hr />

            <div>
              <b> Agent Name: </b><span id="userId">${this.agentName}</span>
            </div>
            <div>
              <b> Team Name: </b><span id="teamName">${this.teamName}</span>
            </div>
            <div><b> Extension: </b><span id="extension">${this.dn}</span></div>
            <div>
              <b> Current User State: </b
              ><span id="userState">${this.userState}</span>
            </div>
            <md-button
              .disabled=${this.userState === "Available"}
              color="green"
              @click=${() => {
                this.changeState("Available");
              }}
              >Go Available</md-button
            >
            <md-button
              .disabled=${this.userState !== "Available"}
              @click=${() => {
                this.changeState("Idle");
              }}
              >Go Idle</md-button
            >
          </div>
          <div style="flex: 1;padding: 10px">
            <h3>Interaction</h3>
            <hr />

            <div>
              <b> Interaction Id: </b
              ><span id="interactionId">${this.interactionId}</span>
            </div>
            <div>
              <b> Channel Type: </b
              ><span id="interactionType">${this.mediaType}</span>
            </div>
            <div><b> DNIS: </b><span id="dnis">${this.dnis}</span></div>
            <div>
              <b> From Address: </b
              ><span id="fromAddress">${this.fromAddress}</span>
            </div>
            <div>
              <b> To Address: </b><span id="toAddress">${this.toAddress}</span>
            </div>
            <div>
              <b> Call State: </b
              ><span id="callState">${this.contactState}</span>
            </div>
          </div>
          <div style="flex: 1;padding: 10px">
            <h3>Outdial</h3>
            <hr />

            <div id="makeCallButtondiv">
              <b> EntryPoint Id </b>
              <md-input
                type="text"
                value=${this.entryPointId}
                @input-change=${this.inputHandler}
                id="entryPointId"
              ></md-input>
              <b> Destination no. </b>
              <md-input
                value=${this.destinationNumber}
                @input-change=${this.inputHandler}
                type="text"
                id="destination"
              ></md-input>
              <md-button
                @click=${() => {
                  this.makeCall();
                }}
                id="makeCallButton"
                >Make Call</md-button
              >
            </div>
          </div>
        </div>
        <md-accordion>
          <md-accordion-item slot="accordion-item" label="Event Response">
            <div>Event Response</div>

            <pre
              style="height:40vh; overflow: auto; border: 1px solid grey;white-space: pre; font-family: monospace;"
            >
            ${JSON.stringify(this.responseData, null, 4)}
          </pre
            >
          </md-accordion-item>
        </md-accordion>
      </div>
    `;
  }
}
