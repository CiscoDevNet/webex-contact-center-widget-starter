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
import "./components/NotesList";

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

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <notes-list-component .notesList=${noteList}></notes-list-component>
    `;
  }
}
