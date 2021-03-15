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
import styles from "./scss/NotesList.scss";
import "@momentum-ui/web-components";
import { repeat } from "lit-html/directives/repeat";
import { color } from "./NoteItem";

export type Note = {
  title: string;
  content: string;
  color: color;
  time: string;
  priority?: boolean;
  complete?: boolean;
};

@customElement("notes-list-component")
export default class NotesListComponent extends LitElement {
  @property({ type: Array }) notesList: (any | Note)[] = [];

  static get styles() {
    return styles;
  }

  connectedCallback() {
    super.connectedCallback();
    //this.addEventListener("checkbox-change", this.handleComplete);
  }

  render() {
    return html`
      <md-list>
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
