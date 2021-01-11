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
  internalProperty,
  property,
  PropertyValues,
  query
} from "lit-element";
import styles from "./App.scss";
import { logger } from "./sdk";

interface FeedItem {
  title: string | undefined;
  link: string | undefined;
}

@customElement("rss-component")
export default class MyCustomComponent extends LitElement {
  @property({ type: String, attribute: "rss-feed" }) rssFeedAddress = "";
  @property({ type: Number, attribute: "update-delay" }) updateDelay = 5000;

  /**
   * Replace this with the logic to obtain interaction ID you need
   * through agentxJsApi.actions sub-module or through external props
   */

  @internalProperty() rawFeedData?: NodeListOf<Element>;
  @internalProperty() renderFeedData?: FeedItem[];
  @internalProperty() loading = true;
  @internalProperty() totalPage = 1;
  @internalProperty() hasPreviousPage = true;
  @internalProperty() hasNextPage = true;
  @internalProperty() currentPage = 0;

  @query("md-link") link!: HTMLElement;

  static get styles() {
    return styles;
  }

  firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    this.getFeed();
  }

  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (this.link.clientWidth > this.link.parentElement!.clientWidth) {
      this.link.className = "overflow";
    }
  }

  connectedCallback() {
    super.connectedCallback();
    setInterval(() => {
      this.computeNext(this.currentPage + 1);
    }, this.updateDelay);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  async getFeed() {
    await fetch(this.rssFeedAddress)
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => {
        this.rawFeedData = data.querySelectorAll("item");
        this.totalPage = this.rawFeedData.length;
      });

    this.parseFeedItems();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  parseFeedItems() {
    const feedData: FeedItem[] = [];
    this.rawFeedData?.forEach(item => {
      feedData.push({
        title: item.querySelector("title")?.innerHTML,
        link: item.querySelector("link")?.innerHTML
      });
    });
    this.renderFeedData = feedData;
  }

  getCurrentItem(currentPage: number) {
    const item = this.renderFeedData && this.renderFeedData[currentPage];
    const title = item && item.title;
    const link = item && item.link;
    // add text overflow ellipses
    return html`
      <div class="link-wrapper">
        <md-link href=${link} target="blank">
          ${this.currentPage + 1} - ${title}
        </md-link>
      </div>
    `;
  }

  private computePrevious(page: number) {
    if (page >= 0 && page !== this.currentPage) {
      this.currentPage -= 1;
    } else {
      this.currentPage = this.totalPage - 1;
    }
  }

  private computeNext(page: number) {
    if (page <= this.totalPage - 1 && page !== this.currentPage) {
      this.currentPage += 1;
    } else {
      this.currentPage = 0;
    }
  }

  getPageArrows() {
    return html`
      <div class="feed-nav-arrows">
        <md-button
          hasRemoveStyle
          class="md-pagination-nav"
          aria-label="Next Page"
          ?disabled=${!this.hasPreviousPage}
          aria-disabled=${this.hasPreviousPage}
          @click=${() => this.computePrevious(this.currentPage - 1)}
          part="pagination-prev"
        >
          <md-icon name="icon-arrow-left_12"></md-icon>
        </md-button>
        <md-button
          hasRemoveStyle
          class="md-pagination-nav"
          aria-label="Previous Page"
          ?disabled=${!this.hasNextPage}
          aria-disabled=${this.hasNextPage}
          @click=${() => this.computeNext(this.currentPage + 1)}
          part="pagination-next"
        >
          <md-icon name="icon-arrow-right_12"></md-icon>
        </md-button>
      </div>
    `;
  }

  render() {
    return html`
      <div class="container">
        <md-badge color="blue" width="400px">
          <md-icon name="icon-rss-circle_24" color="blue" size="16"></md-icon>
          ${this.loading
            ? html`
                <md-loading></md-loading>
              `
            : this.getCurrentItem(this.currentPage)}
          ${this.getPageArrows()}
        </md-badge>
      </div>
    `;
  }
}
