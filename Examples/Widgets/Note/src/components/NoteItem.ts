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
  property,
  PropertyValues,
  query,
} from "lit-element";
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

@customElement("note-item-component")
export default class NoteItemComponent extends LitElement {
  @property({ type: String }) title = "";
  @property({ type: String }) content = "";
  @property({ type: Boolean }) editMode = false;
  @property({ type: Boolean }) priority = false;
  @property({ type: Boolean }) complete = false;
  @property({ type: String }) color = "";
  @property({ type: String }) time = "";

  @query("md-checkbox") checkbox!: HTMLElement;

  static get styles() {
    return styles;
  }

  get noteItemClassMap() {
    return {
      [`note-item--${this.color}`]: !!this.color,
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("checkbox-change", this.handleComplete);
  }

  handleComplete(e: Event) {
    if (this.checkbox.hasAttribute("checked")) {
      this.complete = true;
    } else {
      this.complete = false;
    }
  }

  protected update(changedProperties: PropertyValues) {
    super.update(changedProperties);
    // if (changedProperties.has("checked")) {
    //   if (this.checked) {
    //     this.setAttribute("checked", "true");
    //   } else {
    //     this.setAttribute("checked", "false");
    //   }
    // }
  }

  render() {
    return html`
      <div class="note-item ${classMap(this.noteItemClassMap)}">
        <div class="note-item-top">
          <md-checkbox aria-label="${this.title}" ?checked=${this.complete}>
            <span class="note-item-title">${this.title}</span>
          </md-checkbox>
        </div>
        <div class="note-item-actions">
          <md-button class="note-edit-mode" color="color-none" size="size-none">
            <md-icon slot="icon" name="edit_12"></md-icon>
          </md-button>
          <md-favorite
            class="${this.priority ? `note-item-favored` : `note-item-favor`}"
            value="${this.title}"
            ?checked=${this.priority}
          ></md-favorite>
        </div>
        <div class="note-item-bottom">
          <span class="note-item-content">${this.content}</span>
          <span class="note-item-time">${this.time}</span>
        </div>
      </div>
    `;
  }
}
