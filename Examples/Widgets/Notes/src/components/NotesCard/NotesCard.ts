/* eslint-disable @typescript-eslint/no-explicit-any */
// import { i18nMixin, t } from "@/mixins/i18nMixin";
import "@momentum-ui/web-components";
import "@uuip/unified-ui-platform-common-components";
import { customElement, html, LitElement, property } from "lit-element";
import { nothing } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import { NOTE_COLORS } from "../../constants";
import { checkIfSpaceOrEnterKeydown, getTimestampInLocale, updateNotes } from "../../Utils";
import app from "../../assets/localisation/app.json";
import style from "./NotesCard.scss";

export namespace NotesCard {
  /**
   * @element agentx-wc-notes-card
   * @fires edit-note
   * @fires note-selected
   * @fires updated
   */
  @customElement("agentx-wc-notes-card")
  export class Element extends LitElement {
    @property({ type: Object, attribute: "note-details" }) noteDetails: any = {};
    @property({ type: Boolean, reflect: true }) readView = false;
    @property({ type: Boolean, reflect: true }) moreActionSelectView = false;
    @property({ type: Boolean, reflect: true }) selected = false;

    private handleNotesFavoriteUpdate(event: CustomEvent) {
      event.stopPropagation();
      this.noteDetails = { ...this.noteDetails, favorite: event.detail.isFavorite };
      updateNotes(this.noteDetails);
      this.dispatchNotesUpdated();
    }

    private checkCardClickElm = (event: MouseEvent | any) => {
      const eventSrcElm = event.target.localName;
      return !["agentx-wc-notes-favorite-btn", "md-checkbox", "md-icon"].includes(eventSrcElm);
    };

    private handleNotesCardSelection = (event: MouseEvent | any) => {
      if (this.checkCardClickElm(event)) {
        this.dispatchEvent(
          new CustomEvent("note-selected", {
            detail: {
              noteDetails: this.noteDetails
            }
          })
        );
      }
    };

    private checkForKeyDown = (event: KeyboardEvent, handleAction: any) => {
      if (checkIfSpaceOrEnterKeydown(event.code)) {
        handleAction(event);
      }
    };

    private handleEditNotes = () => {
      if (this.moreActionSelectView) {
        return;
      }
      this.dispatchEvent(
        new CustomEvent("edit-note", {
          detail: {
            noteDetails: this.noteDetails
          }
        })
      );
    };

    private dispatchNotesUpdated = (): void => {
      this.dispatchEvent(new CustomEvent("updated", { detail: { noteDetails: this.noteDetails } }));
    };

    static get styles() {
      return style;
    }

    renderEditButton() {
      return html`
        <md-tooltip message="${app.notes.edit}" placement="top">
          <md-button
            circle
            size="20"
            class="notes-edit-btn"
            ariaLabel="${app.notes.edit}"
            @button-click=${this.handleEditNotes}
            @button-keydown=${this.handleEditNotes}
          >
            <md-icon class="notes-edit-icon" slot="icon" name="icon-edit_12"></md-icon>
          </md-button>
        </md-tooltip>
      `;
    }

    renderCardHeaderSection() {
      return html`
        <div class="notes-card-header">
          ${this.moreActionSelectView
            ? html`
                <md-checkbox ?checked=${this.selected}></md-checkbox>
              `
            : nothing}

          <agentx-wc-notes-favorite-btn
            .isFavorite=${this.noteDetails.favorite}
            @favorite-clicked=${(event: CustomEvent) => this.handleNotesFavoriteUpdate(event)}
          ></agentx-wc-notes-favorite-btn>

          <span class="notes-title ellipsis-view">${this.noteDetails.title}</span>
          ${this.renderEditButton()}
          <span class="notes-timestamp">${getTimestampInLocale(this.noteDetails.timestampUTC)}</span>
        </div>
      `;
    }

    renderNotesBodySection() {
      return html`
        <div class="notes-card-body">
          <p
            class="${classMap({
              "ellipsis-view": !this.readView
            })}"
          >
            ${this.noteDetails.content}
          </p>
        </div>
      `;
    }

    render() {
      return html`
        <div
          class="notes-card-wrapper"
          style="border-left-color: ${NOTE_COLORS[this.noteDetails.color]}"
          tabindex="0"
          aria-label=${`${this.noteDetails.title} ${this.noteDetails.content}`}
          @click=${(event: MouseEvent) => this.handleNotesCardSelection(event)}
          @keydown=${(event: KeyboardEvent) => this.checkForKeyDown(event, this.handleNotesCardSelection)}
        >
          ${this.renderCardHeaderSection()} ${this.renderNotesBodySection()}
        </div>
      `;
    }
  }
}
