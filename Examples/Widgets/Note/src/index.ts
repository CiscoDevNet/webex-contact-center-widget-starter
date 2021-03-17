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
} from "lit-element";
import styles from "./components/scss/main-style.scss";
import "@momentum-ui/web-components";
import "./components/NotesList";

export type Localization = {
  wrapTitle: string;
  timeText: string;
  clearButtonText: string;
  emptyStateText: string;
};

export const noteList = [
  {
    title: "Test title 1",
    content: "Test content message 1",
    color: "mint",
    time: "",
    priority: false,
    complete: false,
  },
  {
    title: "Test title 2",
    content: "Test content message 2",
    color: "gold",
    time: "",
    priority: false,
    complete: false,
  },
  {
    title: "TAppointment Confirmation",
    content: "Confirm Dr. Lee’s Availability on appointment on Monday",
    color: "cyan",
    time: "12:01",
    priority: true,
    complete: false,
  },
];

@customElement("notes-header-widget")
export default class NotesHeaderComponent extends LitElement {
  @internalProperty() private contacts: string[] = [];
  @internalProperty() t: Localization = {
    wrapTitle: "Notes",
    timeText: "min",
    clearButtonText: "Mark All as Read",
    emptyStateText: "No Note Items",
  };

  static get styles() {
    return styles;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <md-menu-overlay placement="bottom-start">
        <md-button slot="menu-trigger" color="white" size="40" circle
          ><md-icon slot="icon" name="note_20"></md-icon
        ></md-button>
        <div class="notes-menu-wrap">
          <div class="notes-menu-wrap_title">
            ${this.t.wrapTitle}
            <span>(${noteList.length})</span>
          </div>
          <notes-list-component .notesList=${noteList}></notes-list-component>
          <div class="notes-menu-cleaner">
            <md-button color="color-none" ariaLabel="Clear Notes button">
              <md-icon slot="icon" name="check_16"></md-icon>
              <span slot="text">${this.t.clearButtonText}</span>
            </md-button>
          </div>
        </div>
      </md-menu-overlay>
    `;
  }
}
