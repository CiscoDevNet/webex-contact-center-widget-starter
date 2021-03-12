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
} from "lit-element";
import "./components/NoteItem";

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

  render() {
    return html`
      <note-item-component
        title="Appointment Confirmation"
        content="Confirm Dr. Lee’s Availability on appointment on Monday"
        time="12:01 PM"
        color="cyan"
      ></note-item-component>
    `;
  }
}
