/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { html, LitElement, customElement, property } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import styles from "./scss/NoteItem.scss";
import "@momentum-ui/web-components";

export const noteColor = [
  "mint",
  "cyan",
  "slate",
  "violet",
  "purple",
  "pink",
  "orange",
  "gold",
  "",
] as const;

export type color = typeof noteColor[number];

export type Note = {
  title: string;
  content: string;
  color: color;
  time: string;
  priority: boolean;
  checked: boolean;
};

@customElement("note-item-component")
export default class NoteItemComponent extends LitElement {
  @property({ type: String }) title: Note["title"] = "";
  @property({ type: String }) content: Note["content"] = "";
  @property({ type: Boolean }) editMode = false;
  @property({ type: Boolean }) priority: Note["priority"] = false;
  @property({ type: Boolean }) checked: Note["checked"] = false;
  @property({ type: String }) color: Note["color"] = "";
  @property({ type: String }) time: Note["time"] = "";

  static get styles() {
    return styles;
  }

  get noteItemClassMap() {
    return {
      [`note-item--${this.color}`]: !!this.color,
    };
  }

  render() {
    return html`
      <div class="note-item ${classMap(this.noteItemClassMap)}">
        <div class="note-item-top">
          <md-checkbox aria-label="${this.title}"
            ><span class="note-item-title">${this.title}</span></md-checkbox
          >
        </div>
        <div class="note-item-actions">
          <md-button class="note-edit-mode" color="color-none" size="size-none">
            <md-icon slot="icon" name="edit_12"></md-icon>
          </md-button>
          <md-favorite value="${this.title}"></md-favorite>
        </div>
        <div class="note-item-bottom">
          <span class="note-item-content">${this.content}</span>
          <span class="note-item-time">${this.time}</span>
        </div>
      </div>
    `;
  }
}
