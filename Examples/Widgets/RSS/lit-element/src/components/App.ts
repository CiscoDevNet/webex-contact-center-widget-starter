/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { agentxJsApi } from "@agentx/agentx-js-api";
import { html, LitElement, customElement, internalProperty, property, PropertyValues, query } from "lit-element";
import styles from "./App.scss";
import { logger } from "./sdk";
import { Service } from "@agentx/agentx-services-types";
import { Notifications } from "@uuip/unified-ui-platform-sdk";
import { consultTransferMockPayLoad } from "@/[sandbox]/sandbox.mock";
import { isTemplatePartActive } from "lit-html";

interface FeedItem {
  title: string | undefined;
  link: string | undefined
}

@customElement("my-custom-component")
export default class MyCustomComponent extends LitElement {
  @property({ type: String }) rssFeedAddress = "https://www.who.int/feeds/entity/csr/don/en/rss.xml"
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

  @internalProperty() rawFeedData?: NodeListOf<Element>;
  @internalProperty() renderFeedData?: FeedItem[];
  @internalProperty() loading: boolean = true;
  @internalProperty() totalPage: number = 1;
  @internalProperty() hasPreviousPage: boolean = true;
  @internalProperty() hasNextPage: boolean = true;
  @internalProperty() currentPage: number = 0;
  @internalProperty() updateDelay: number = 5000;

  @query("md-link") link!: HTMLElement;

  static get styles() {
    return styles;
  }

  firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties)
    this.getFeed();
  }

  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties)
    if (this.link.clientWidth > this.link.parentElement!.clientWidth) 
    {this.link.className = "overflow"}
    // , getComputedStyle(this.link).direction)
    // if link width > wrapper width, then 1 sec pause and then slide left, then right
    // lol account for localization
  }

  connectedCallback() {
    super.connectedCallback();
    this.init();
    this.getCurrentInteractionId();
    this.subscribeAgentContactDataEvents()
    this.subscribeDialerEvents();
    this.subscribeScreenpopEvent();
    setInterval(()=>{this.computeNext(this.currentPage + 1)}, this.updateDelay)
  }

  disconnectedCallback() {
    super.disconnectedCallback();
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

  // async fireNotification() {
  //   const raw: Notifications.ItemMeta.Raw = {
  //     data: {
  //       type: Notifications.ItemMeta.Type.Info,
  //       mode: Notifications.ItemMeta.Mode.AutoDismiss,
  //       title: "Info - Acknowledge",
  //       data: "Lorem Ipsum Dolor"
  //     }
  //   };
  //   const [ status, reason, mode ]: [ Notifications.ItemMeta.Status, Notifications.ItemMeta.StatusChangeEventReason, Notifications.ItemMeta.Mode ] = await agentxJsApi.actions.fireGeneralAutoDismissNotification(raw as Notifications.ItemMeta.Raw & { data: { mode: Notifications.ItemMeta.Mode.AutoDismiss; }; })
  //   logger.info(status, reason, mode);
  // }

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

  // objective:
  // get feed data from address
  // update total pages when fetch runs
  async getFeed() {
    await fetch(this.rssFeedAddress)
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => {
        this.rawFeedData = data.querySelectorAll("item");
        this.totalPage = this.rawFeedData.length;
      })

    this.parseFeedItems()
    // show "loading" while it parses the content
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  // set timer to animate slide right to left, increment current page prop
  // increment currentPage, loop when hits totalPages

  // parse Items into <md-link> tags that have the <title> for text and <link> for hyperlink.
  parseFeedItems() {
    const feedData: FeedItem[] = []
    this.rawFeedData?.forEach(item => {
      feedData.push({
        title: item.querySelector("title")?.innerHTML,
        link: item.querySelector("link")?.innerHTML
      })
    })
    this.renderFeedData = feedData;
  }

  getCurrentItem(currentPage: number) {
    const item = this.renderFeedData && this.renderFeedData[currentPage];
    const title = item && item.title;
    const link = item && item.link;
    return html`
      <div class="link-wrapper">
        <md-link href=${link} target="blank">${this.currentPage + 1} - ${title}</md-link>
      </div>
    `
  }

  private computePrevious(page: number) {
    if (page >= 0 && page !== this.currentPage) {
      this.currentPage -= 1;
    } else {this.currentPage = this.totalPage - 1}
  }

  private computeNext(page: number) {
    if (page <= this.totalPage - 1 && page !== this.currentPage) {
      this.currentPage += 1;
    } else {this.currentPage = 0}
  }

  getPageArrows() {
    return html`
    <div class="feed-nav-arrows">
      <md-button hasRemoveStyle class="md-pagination-nav" aria-label="Next Page" ?disabled=${!this.hasPreviousPage}
        aria-disabled=${this.hasPreviousPage} @click=${()=> this.computePrevious(this.currentPage - 1)}
        part="pagination-prev">
        <md-icon name="icon-arrow-left_12"></md-icon>
      </md-button>
      <md-button hasRemoveStyle class="md-pagination-nav" aria-label="Previous Page" ?disabled=${!this.hasNextPage}
        aria-disabled=${this.hasNextPage} @click=${() => this.computeNext(this.currentPage + 1)}
        part="pagination-next"
        >
        <md-icon name="icon-arrow-right_12"></md-icon>
      </md-button>
    </div>
  `
  }

  render() {
    return html`
      <div class="container">
        <md-badge color="blue" width="400px">
          <md-icon name="icon-rss-circle_24" color="blue" size="16"></md-icon>
          ${this.loading ? html`<md-loading></md-loading>` : this.getCurrentItem(this.currentPage)}
          ${this.getPageArrows()}
        </md-badge>
      </div>
    `;
  }
}
