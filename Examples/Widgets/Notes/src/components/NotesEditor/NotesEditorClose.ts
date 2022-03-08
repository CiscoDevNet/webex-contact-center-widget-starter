/* eslint-disable @typescript-eslint/no-explicit-any */
// import { i18nMixin, t } from "@/mixins/i18nMixin";
import "@momentum-ui/web-components";
import { customElement, html, LitElement } from "lit-element";
import style from "../../assets/styles/NotesWidget.scss";
import { checkIfSpaceOrEnterKeydown } from "../../Utils";
import app from "../../assets/localisation/app.json";

export namespace NotesEditorClose {
  /**
   * @element agentx-wc-notes-editor-close
   * @fires close
   */
  @customElement("agentx-wc-notes-editor-close")
  export class Element extends LitElement {
    private handleCloseKeyDown = (event: KeyboardEvent) => {
      if (checkIfSpaceOrEnterKeydown(event.code)) {
        this.handleNotesCloseUpdate(event);
      }
    };

    private handleNotesCloseUpdate(event: CustomEvent | KeyboardEvent) {
      event.stopPropagation();
      this.dispatchEvent(new CustomEvent("close", {}));
    }

    static get styles() {
      return style;
    }

    render() {
      return html`
        <md-tooltip message="${app.notes.close}" placement="top">
          <md-icon
            ariaLabel="${app.notes.close}"
            class="notes-editor-close-btn"
            tabindex="0"
            name="icon-cancel_12"
            @icon-click=${(event: CustomEvent) => this.handleNotesCloseUpdate(event)}
            @keydown=${(event: KeyboardEvent) => this.handleCloseKeyDown(event)}
          ></md-icon>
        </md-tooltip>
      `;
    }
  }
}
