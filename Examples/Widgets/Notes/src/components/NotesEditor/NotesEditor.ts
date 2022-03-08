/* eslint-disable @typescript-eslint/no-explicit-any */
// import { i18nMixin, t } from "@/mixins/i18nMixin";
import { debounce } from "@/utils/helpers";
import "@momentum-ui/web-components";
import "@uuip/unified-ui-platform-common-components";
import { customElement, html, internalProperty, LitElement, property, PropertyValues, query } from "lit-element";
import {
  ESC_KEY_CODE,
  NOTES_CONTENT_CHARACTER_LIMIT,
  NOTES_TITLE_CHARACTER_LIMIT,
  NOTE_COLORS,
  SAVE_NOTES_DELAY
} from "../../constants";
import { NotesWidget } from "../../index";
import app from "../../assets/localisation/app.json";
import { getBlankNote, removeNotes, updateNotes } from "../../Utils";
import style from "./NotesEditor.scss";
import "./NotesEditorClose";
export namespace NotesEditor {
  /**
   * @element agentx-wc-notes-editor
   */
  @customElement("agentx-wc-notes-editor")
  export class Element extends LitElement {
    @property({ reflect: true }) noteDetails: NotesWidget.Note = getBlankNote();

    @internalProperty() notesColor = "";
    @internalProperty() isSaved = true;

    @query(".notes-editor-content-input") private contentInputElm!: any;

    protected firstUpdated(): void {
      setTimeout(() => {
        const inputField = this.contentInputElm.shadowRoot.querySelector("textarea");
        inputField.focus();
      });
    }

    protected updated(changedProperties: PropertyValues): void {
      super.updated(changedProperties);

      if (changedProperties.has("noteDetails")) {
        this.initiateNoteUpdate();
      }
    }

    initiateNoteUpdate = debounce(() => {
      if (this.noteDetails.title || this.noteDetails.content) {
        this.updateNotesInLS();
      } else if (this.noteDetails.content === "" && this.noteDetails.title === "") {
        removeNotes([this.noteDetails.id]);
      }
      this.isSaved = true;
    }, SAVE_NOTES_DELAY);

    private updateDefaultTitleAndContent() {
      if (this.noteDetails.title || this.noteDetails.content) {
        if (this.noteDetails.title === "") {
          this.noteDetails.title = app.notes.newNote;
        }
        if (this.noteDetails.content === "") {
          this.noteDetails.content = app.notes.noContentAdded;
        }
        this.updateNotesInLS();
      }
    }

    private updateNotesInLS() {
      updateNotes(this.noteDetails);
    }

    private handleNotesDetailsUpdate(name: string, value: any) {
      this.isSaved = false;
      this.noteDetails = { ...this.noteDetails, [name]: value };
    }

    private handleCloseKeyDown = (event: KeyboardEvent) => {
      event.stopPropagation();
      if (event.code === ESC_KEY_CODE) {
        this.dispatchCloseEvent();
      }
    };

    private dispatchCloseEvent() {
      this.updateDefaultTitleAndContent();
      this.dispatchEvent(new CustomEvent("close", { detail: { noteDetails: this.noteDetails } }));
    }

    private getSaveStatusText(): string {
      if (!this.noteDetails.title && !this.noteDetails.content) {
        return "";
      }
      return this.isSaved ? `${app.notes.saved}` : `${app.notes.saving}`;
    }

    static get styles() {
      return style;
    }

    render() {
      return html`
        <div
          class="notes-editor-wrapper"
          style="border-left-color: ${NOTE_COLORS[this.noteDetails.color]}"
          @keydown=${(event: KeyboardEvent) => this.handleCloseKeyDown(event)}
        >
          <div class="notes-editor-title-wrapper">
            <agentx-wc-notes-favorite-btn
              .isFavorite=${this.noteDetails.favorite}
              @favorite-clicked=${(event: CustomEvent) =>
                this.handleNotesDetailsUpdate("favorite", event.detail.isFavorite)}
            ></agentx-wc-notes-favorite-btn>

            <md-input
              class="notes-editor-title-input"
              value=${this.noteDetails.title}
              placeholder=${app.notes.addTitle}
              @input-change=${(event: CustomEvent) => this.handleNotesDetailsUpdate("title", event.detail.value.trim())}
              containerSize="small-12"
              maxLength=${NOTES_TITLE_CHARACTER_LIMIT}
            ></md-input>
            <agentx-wc-notes-editor-close @close=${this.dispatchCloseEvent}></agentx-wc-notes-editor-close>
          </div>
          <md-input
            class="notes-editor-content-input"
            value=${this.noteDetails.content}
            multiline
            autofocus
            containerSize="large-12"
            maxLength=${NOTES_CONTENT_CHARACTER_LIMIT}
            placeholder=${app.notes.typeNoteHere}
            @input-change=${(event: CustomEvent) => this.handleNotesDetailsUpdate("content", event.detail.value.trim())}
          ></md-input>
          <div class="notes-editor-footer">
            <agentx-wc-notes-colors
              .selectedColor=${this.noteDetails.color}
              @color-selected=${(event: CustomEvent) => this.handleNotesDetailsUpdate("color", event.detail.value)}
            ></agentx-wc-notes-colors>
            <span class="save-status">${this.getSaveStatusText()}</span>
            <span class="notes-char-counter"
              >${`${this.noteDetails.content.length}/${NOTES_CONTENT_CHARACTER_LIMIT}`}</span
            >
          </div>
        </div>
      `;
    }
  }
}
