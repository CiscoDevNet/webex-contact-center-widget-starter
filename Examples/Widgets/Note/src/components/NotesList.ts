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
  internalProperty,
} from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import styles from "./scss/NotesList.scss";
import "@momentum-ui/web-components";
import { repeat } from "lit-html/directives/repeat";
import { color } from "./NoteItem";
import { nothing } from "lit-html";

export type Note = {
  title: string;
  content: string;
  color: color;
  time: string;
  priority?: boolean;
  complete?: boolean;
};

export type Localization = {
  addNoteBtn: string;
  addNoteBtnLabel: string;
  listLabel: string;
};

@customElement("notes-list-component")
export default class NotesListComponent extends LitElement {
  @property({ type: Array }) notesList: (any | Note)[] = [];

  @internalProperty() addNew: Boolean = false;
  @internalProperty() t: Localization = {
    addNoteBtn: "Add a Note",
    addNoteBtnLabel: "Add Note button",
    listLabel: "List Notes",
  };

  @query("md-button.note-add-new") addBtn!: HTMLButtonElement;
  static get styles() {
    return styles;
  }

  connectedCallback() {
    super.connectedCallback();
    //this.addEventListener("checkbox-change", this.handleComplete);
  }

  createNewItem() {
    this.addNew = true;
    this.addBtn.setAttribute("disabled", "true");
  }

  handleResetNew() {
    this.addNew = false;
    this.addBtn.removeAttribute("disabled");
  }

  render() {
    return html`
      <div class="note-additional">
        <md-button
          color="color-none"
          size="size-none"
          class="note-add-new"
          ariaLabel="${this.t.addNoteBtnLabel}"
          @button-click=${() => this.createNewItem()}
        >
          <span slot="text">${this.t.addNoteBtn}</span>
        </md-button>
        ${this.addNew
          ? html`
              <note-item-component
                edit-mode
                @note-item-reset=${() => this.handleResetNew()}
              >
              </note-item-component>
            `
          : nothing}
      </div>
      <md-list class="notes-lest" label="${this.t.listLabel}">
        ${repeat(
          this.notesList,
          (i) => i.title,
          (i, idx) => html`
            <li slot="list-item">
              <note-item-component
                id="${idx}"
                title="${i.title}"
                content="${i.content}"
                time="${i.time}"
                color="${i.color}"
                ?priority=${i.priority}
                ?complete=${i.complete}
              ></note-item-component>
            </li>
          `
        )}
      </md-list>
    `;
  }
}
