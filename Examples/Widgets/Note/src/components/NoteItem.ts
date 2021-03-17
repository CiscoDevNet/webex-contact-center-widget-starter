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
import { nanoid } from "nanoid";
import "@momentum-ui/web-components";
import { nothing } from "lit-html";

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
  @property({ type: Boolean, attribute: "edit-mode" }) editMode = false;
  @property({ type: Boolean }) priority = false;
  @property({ type: Boolean }) complete = false;
  @property({ type: String }) color = "";
  @property({ type: String }) time = "";
  @property({ type: String }) id = "";

  @query("md-checkbox") checkbox!: HTMLElement;

  static get styles() {
    return styles;
  }

  get noteItemClassMap() {
    return {
      [`note-item--${this.color}`]: !!this.color,
      editable: this.editMode,
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.id = nanoid();
    this.addEventListener("checkbox-change", this.handleComplete);
  }

  handleComplete(e: Event) {
    if (this.checkbox.hasAttribute("checked")) {
      this.complete = true;
    } else {
      this.complete = false;
    }
  }

  handleEditMode(ev: CustomEvent, idx: string) {
    if (idx === this.id) {
      this.editMode = true;
      this.dispatchEvent(
        new CustomEvent("note-item-edit", {
          detail: {
            id: this.id,
          },
          composed: true,
          bubbles: true,
        })
      );
    }
  }

  handleResetEdit(i: string) {
    if (i === this.id) {
      this.editMode = false;
      this.removeAttribute("edit-mode");
      this.dispatchEvent(
        new CustomEvent("note-item-reset", {
          detail: {
            id: this.id,
            edit: this.editMode,
          },
          composed: true,
          bubbles: true,
        })
      );
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
        ${this.editMode
          ? html`
              <div class="note-item-top">
                <md-checkbox
                  aria-label="${this.title}"
                  ?checked=${this.complete}
                >
                  <input
                    class="note-item-editable-title"
                    placeholder="Title"
                    value="${this.title}"
                  />
                </md-checkbox>
              </div>
              <div class="note-item-actions">
                <md-button
                  class="note-remove"
                  color="color-none"
                  size="size-none"
                  @button-click=${() => this.handleResetEdit(this.id)}
                >
                  <md-icon slot="icon" name="icon-cancel_12"></md-icon>
                </md-button>
              </div>
              <div class="note-item-bottom">
                <input
                  class="note-item-editable-message"
                  placeholder="Start typing here..."
                  value="${this.content}"
                />
              </div>
              <div class="note-item-color_wrap">
                <md-icon class="note-color-alert" name="alert_10"></md-icon>
                <md-icon
                  class="note-color-mint"
                  color="mint"
                  name="unread-badge_10"
                ></md-icon>
                <md-icon
                  class="note-color-cyan"
                  color="cyan"
                  name="unread-badge_10"
                ></md-icon>
                <md-icon
                  class="note-color-slate"
                  color="slate"
                  name="unread-badge_10"
                ></md-icon>
                <md-icon
                  class="note-color-violet"
                  color="violet"
                  name="unread-badge_10"
                ></md-icon>
                <md-icon
                  class="note-color-purple"
                  color="purple"
                  name="unread-badge_10"
                ></md-icon>
                <md-icon
                  class="note-color-pink"
                  color="pink"
                  name="unread-badge_10"
                ></md-icon>
                <md-icon
                  class="note-color-orange"
                  color="orange"
                  name="unread-badge_10"
                ></md-icon>
                <md-icon
                  class="note-color-gold"
                  color="gold"
                  name="unread-badge_10"
                ></md-icon>
              </div>
            `
          : html`
              <div class="note-item-top">
                <md-checkbox
                  aria-label="${this.title}"
                  ?checked=${this.complete}
                >
                  <span class="note-item-title">${this.title}</span>
                </md-checkbox>
              </div>
              <div class="note-item-actions">
                <md-button
                  class="note-edit-mode"
                  color="color-none"
                  size="size-none"
                  @button-click=${(e: CustomEvent) =>
                    this.handleEditMode(e, this.id)}
                >
                  <md-icon slot="icon" name="edit_12"></md-icon>
                </md-button>
                <md-favorite
                  class="${this.priority
                    ? `note-item-favored`
                    : `note-item-favor`}"
                  value="${this.title}"
                  ?checked=${this.priority}
                ></md-favorite>
              </div>
              <div class="note-item-bottom">
                <span class="note-item-content">${this.content}</span>
                <span class="note-item-time">${this.time}</span>
              </div>
            `}
      </div>
      ${this.editMode
        ? html`
            <md-button class="note-item-save" variant="primary" size="32">
              <span slot="text">Save</span>
            </md-button>
          `
        : nothing}
    `;
  }
}
