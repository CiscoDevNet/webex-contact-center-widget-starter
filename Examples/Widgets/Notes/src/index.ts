/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  customElement,
  html,
  internalProperty,
  LitElement,
  property,
  PropertyValues,
  query,
  TemplateResult,
} from "lit-element";
import { nothing } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import app from "./assets/localisation/app.json";
import "./components";
import {
  INITIAL_FILTER,
  NotesFilter,
} from "./components/NotesWidgetHeader/NotesWidgetHeader";
import {
  COLORS,
  DATE,
  DELETE,
  EMPTY_STATE_ILLUSTRATION,
  FAVORITES,
  MAX_NOTES_COUNT,
} from "./constants";
import style from "./assets/styles/NotesWidget.scss";
import { fetchNotes, getBlankNote, getTimestampInDateLocale } from "./Utils";

export let agentId = "";

export namespace NotesWidget {
  /**
   * @element agentx-wc-notes-widget
   */
  @customElement("notes-widget")
  export class MyCustomComponent extends LitElement {
    // export default class MyCustomComponent extends LitElement {
    @property({ type: String, attribute: "agent-id" }) agentId = "";

    @internalProperty() private isFeatureFlagEnabled = false;
    @internalProperty() private showErrorState = false;
    @internalProperty() private originalNotes: Note[] = [];
    @internalProperty() private notes: Note[] = [];
    @internalProperty() private selectedNoteDetails:
      | Note
      | undefined = undefined;
    @internalProperty() private isEditMode = false;
    @internalProperty() private selectedNotes: Record<string, boolean> = {};
    @internalProperty() private action = "";
    @internalProperty() private filter: NotesFilter = { ...INITIAL_FILTER };

    @query(".notes-container") private notesContainer!: any;

    protected updated(changedProperties: PropertyValues): void {
      super.updated(changedProperties);
      if (changedProperties.has("agentId")) {
        this.updateAgentId();
      }
    }

    protected firstUpdated(changedProperties: PropertyValues): void {
      super.firstUpdated(changedProperties);
      // SERVICE.telemetry.track(SERVICE.telemetry.MIX_EVENT.NOTES_WIDGET_OPENED);
      this.updateAgentId();
    }

    updateAgentId(): void {
      agentId = this.agentId;
      this.isFeatureFlagEnabled = true;
      this.showErrorState = !this.isFeatureFlagEnabled || !this.agentId;
      this.fetchUpdatedNotes();
    }

    fetchUpdatedNotes(): void {
      this.originalNotes = fetchNotes();
      this.filterNotesList();
    }

    private filterNotesList = () => {
      let updatedNotesList = [...this.originalNotes];
      if (this.filter.name) {
        updatedNotesList = this.originalNotes.filter((note: Note) => {
          switch (this.filter.name) {
            case FAVORITES:
              return note.favorite === this.filter.value;
            case COLORS:
              return note.color === this.filter.value;
            case DATE:
              return (
                getTimestampInDateLocale(note.timestampUTC) ===
                getTimestampInDateLocale(this.filter.value)
              );
            default:
              return true;
          }
        });
      }
      this.notes = updatedNotesList;
    };

    private handleFilter = (event: CustomEvent) => {
      this.filter = event.detail.value;
      this.filterNotesList();
    };

    private handleNoteSelected = (selectedNote: Note) => {
      if (this.action || this.isEditMode) {
        return;
      }
      this.selectedNoteDetails = this.selectedNoteDetails
        ? undefined
        : selectedNote;
    };

    private handleCloseEditMode(event: CustomEvent) {
      this.isEditMode = false;
      this.updateNotesList(event);
      setTimeout(() => {
        this.notesContainer
          .querySelector(`#${this.selectedNoteDetails?.id}`)
          ?.shadowRoot?.children[0].focus();
        this.selectedNoteDetails = undefined;
      });
    }

    private updateNotesList(event: CustomEvent) {
      event.stopPropagation();
      const updatedNoteDetails = event.detail.noteDetails;
      const noteIndex = this.originalNotes.findIndex(
        (note: Note) => note.id === updatedNoteDetails.id
      );
      if (noteIndex !== -1) {
        if (!updatedNoteDetails.title && !updatedNoteDetails.content) {
          this.originalNotes.splice(noteIndex, 1);
        } else {
          this.originalNotes[noteIndex] = { ...updatedNoteDetails };
        }
      } else if (updatedNoteDetails.title && updatedNoteDetails.content) {
        this.originalNotes.unshift(updatedNoteDetails);
      }
      this.filterNotesList();
    }

    private handleEditNoteSelected = (selectedNote: Note) => {
      this.isEditMode = true;
      this.selectedNoteDetails = selectedNote;
    };

    private handleAddNewNoteSelected = () => {
      this.isEditMode = true;
      const newNote = getBlankNote();
      this.notes.unshift(newNote);
      this.selectedNoteDetails = newNote;
    };

    private handleMoreActions(event: CustomEvent) {
      this.action = event.detail.action;
    }

    private handleSelectAll(isChecked: boolean) {
      this.notes.forEach((note: Note) => {
        this.selectedNotes[note.id] = isChecked;
      });
      this.requestUpdate();
    }

    private handleCheckBoxChange(noteId: string) {
      this.selectedNotes[noteId] = !this.selectedNotes[noteId];
      this.requestUpdate();
    }

    private handleActionBarClose(event: CustomEvent) {
      if (this.action === DELETE) {
        const deleteNotesList = event.detail.selectedNotes;
        this.originalNotes = this.originalNotes.filter((note: Note) => {
          return !deleteNotesList[note.id];
        });
        this.filterNotesList();
      }
      this.selectedNotes = {};
      this.action = "";
    }

    private isHeaderActionDisabled() {
      return this.action || this.isEditMode ? true : false;
    }

    private isAddNoteDisabled() {
      return this.originalNotes.length >= MAX_NOTES_COUNT ? true : false;
    }

    private checkSelectAllChecked() {
      if (
        Object.keys(this.selectedNotes).length === this.notes.length &&
        Object.values(this.selectedNotes).every(Boolean)
      ) {
        return true;
      }
      return false;
    }

    static get styles() {
      return style;
    }

    renderErrorState(): TemplateResult {
      return html`
        <agentx-wc-notes-error-state
          .isFeatureFlagEnabled=${this.isFeatureFlagEnabled}
        ></agentx-wc-notes-error-state>
      `;
    }

    renderHeaderSection(): TemplateResult {
      return html`
        <div class="notes-widget-title">
          ${`${app.notes.notes} (${
            this.originalNotes.length
          }/${MAX_NOTES_COUNT})`}
        </div>
        ${this.action
          ? html`
              <agentx-wc-notes-select-all
                .checked=${this.checkSelectAllChecked()}
                @select-all=${(event: CustomEvent) =>
                  this.handleSelectAll(event.detail.checked)}
              ></agentx-wc-notes-select-all>
            `
          : html`
              <agentx-wc-notes-widget-header
                .filter=${this.filter}
                .disabled=${this.isHeaderActionDisabled()}
                .addNoteDisabled=${this.isAddNoteDisabled()}
                @more-action=${(event: CustomEvent) =>
                  this.handleMoreActions(event)}
                @add-note=${() => this.handleAddNewNoteSelected()}
                @filter=${(event: CustomEvent) => this.handleFilter(event)}
              ></agentx-wc-notes-widget-header>
            `}
      `;
    }

    renderNotesEmptyState(): TemplateResult {
      return html`
        <uuip-wc-empty-state .illustrationName=${EMPTY_STATE_ILLUSTRATION}>
          <p>${app.notes.noNotesToDisplay}</p>
        </uuip-wc-empty-state>
      `;
    }

    renderFooterAction(): TemplateResult {
      return html`
        ${this.action
          ? html`
              <agentx-wc-notes-action-bar
                .action=${this.action}
                .selectedNotes=${this.selectedNotes}
                @close=${(event: CustomEvent) =>
                  this.handleActionBarClose(event)}
              ></agentx-wc-notes-action-bar>
            `
          : nothing}
      `;
    }

    renderNotesWidget(): TemplateResult {
      return html`
        <div
          class="notes-widget-home-view ${classMap({
            "more-actions-view": this.action,
          })}"
        >
          ${this.renderHeaderSection()}
          <div class="notes-container">
            ${this.notes.length === 0
              ? this.renderNotesEmptyState()
              : html`
                  ${this.notes.map((note: Note) => {
                    if (
                      this.isEditMode &&
                      this.selectedNoteDetails?.id === note.id
                    ) {
                      return html`
                        <agentx-wc-notes-editor
                          .noteDetails=${this.selectedNoteDetails}
                          @close=${this.handleCloseEditMode}
                        ></agentx-wc-notes-editor>
                      `;
                    } else {
                      return html`
                        <agentx-wc-notes-card
                          id="${note.id}"
                          .noteDetails=${note}
                          .readView=${this.selectedNoteDetails?.id === note.id}
                          .moreActionSelectView=${!!this.action}
                          .selected=${!!this.selectedNotes[note.id]}
                          @note-selected=${(event: CustomEvent) =>
                            this.handleNoteSelected(event.detail.noteDetails)}
                          @edit-note=${(event: CustomEvent) =>
                            this.handleEditNoteSelected(
                              event.detail.noteDetails
                            )}
                          @checkbox-change=${() =>
                            this.handleCheckBoxChange(note.id)}
                          @updated=${(event: CustomEvent) =>
                            this.updateNotesList(event)}
                        ></agentx-wc-notes-card>
                      `;
                    }
                  })}
                `}
          </div>
        </div>
        ${this.renderFooterAction()}
      `;
    }

    render() {
      return html`
        <div class="notes-widget-container">
          ${this.showErrorState
            ? this.renderErrorState()
            : this.renderNotesWidget()}
        </div>
      `;
    }
  }
  export type Note = {
    id: string;
    title: string;
    content: string;
    color: string;
    favorite: boolean;
    timestampUTC: number;
  };
}
