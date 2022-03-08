/* eslint-disable @typescript-eslint/no-explicit-any */
// import { i18nMixin, t } from "@/mixins/i18nMixin";
import "@momentum-ui/web-components";
import { customElement, html, LitElement, property } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import app from "../../assets/localisation/app.json";
import style from "../../assets/styles/NotesWidget.scss";
import { checkIfSpaceOrEnterKeydown } from "../../Utils";

export namespace NotesFavoriteBtn {
  /**
   * @element agentx-wc-notes-favorite-btn
   * @fires favorite-clicked
   */
  @customElement("agentx-wc-notes-favorite-btn")
  export class Element extends LitElement {
    @property({ type: Boolean, reflect: true }) isFavorite = false;

    private handleFavoriteKeyDown = (event: KeyboardEvent) => {
      if (checkIfSpaceOrEnterKeydown(event.code)) {
        this.handleNotesFavoriteUpdate(event);
      }
    };

    private handleNotesFavoriteUpdate(event: CustomEvent | KeyboardEvent) {
      event.stopPropagation();
      this.dispatchEvent(
        new CustomEvent("favorite-clicked", {
          detail: {
            isFavorite: !this.isFavorite
          }
        })
      );
      this.isFavorite = !this.isFavorite;
    }

    static get styles() {
      return style;
    }

    render() {
      return html`
        <md-tooltip
          message="${this.isFavorite ? `${app.notes.removeFavorites}` : `${app.notes.addToFavorites}`}"
          placement="top"
        >
          <md-icon
            class="notes-favorite-btn ${classMap({
              favorite: this.isFavorite
            })}"
            tabindex="0"
            aria-label="${this.isFavorite ? `${app.notes.removeFavorites}` : `${app.notes.addToFavorites}`}"
            name="${this.isFavorite ? "icon-favorite-filled_12" : "icon-favorite_12"}"
            @icon-click=${(event: CustomEvent) => this.handleNotesFavoriteUpdate(event)}
            @keydown=${(event: KeyboardEvent) => this.handleFavoriteKeyDown(event)}
          ></md-icon>
        </md-tooltip>
      `;
    }
  }
}
