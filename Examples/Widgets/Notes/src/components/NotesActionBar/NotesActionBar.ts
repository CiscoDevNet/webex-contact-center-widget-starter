/* eslint-disable @typescript-eslint/no-explicit-any */
import "@momentum-ui/web-components";
import { customElement, html, LitElement, property } from "lit-element";
import { DELETE, DOWNLOAD } from "../../constants";
import { downloadNotes, removeNotes } from "../../Utils";
import app from "../../assets/localisation/app.json";
import style from "../../assets/styles/NotesWidget.scss";

export namespace NotesActionBar {
  /**
   * @element agentx-wc-notes-action-bar
   * @fires close
   */
  @customElement("agentx-wc-notes-action-bar")
  export class Element extends LitElement {
    @property({ type: Boolean, reflect: true }) action = DELETE;
    @property({ type: Array, reflect: true }) selectedNotes: Record<string, boolean> = {};

    private dispatchCloseActionBar() {
      this.dispatchEvent(new CustomEvent("close", { detail: { selectedNotes: this.selectedNotes } }));
    }

    private getSelectedNotesIdList = () => {
      return Object.keys(this.selectedNotes).filter((noteId: string) => {
        return this.selectedNotes[noteId];
      });
    };

    private handleDeleteNotes() {
      removeNotes(this.getSelectedNotesIdList());
      this.dispatchCloseActionBar();
    }

    private handleDownloadNotes() {
      downloadNotes(this.getSelectedNotesIdList());
      this.dispatchCloseActionBar();
    }

    private handleCancelClick() {
      this.selectedNotes = {};
      this.dispatchCloseActionBar();
    }

    static get styles() {
      return style;
    }

    render() {
      return html`
        <div class="action-button-container">
          <md-button
            variant="secondary"
            class="cancel-btn"
            @button-click=${this.handleCancelClick}
            @button-keydown=${this.handleCancelClick}
            ><span slot="text">${app.notes.cancel}</span></md-button
          >
          ${this.action === DELETE
            ? html`
                <md-button
                  class=${`${DELETE}-btn`}
                  variant="red"
                  ariaLabel="${app.notes.delete}"
                  @button-click=${this.handleDeleteNotes}
                  @button-keydown=${this.handleDeleteNotes}
                  ><span slot="text">${app.notes.delete}</span></md-button
                >
              `
            : html`
                <md-button
                  class=${`${DOWNLOAD}-btn`}
                  variant="primary"
                  ariaLabel="${app.notes.download}"
                  @button-click=${this.handleDownloadNotes}
                  @button-keydown=${this.handleDownloadNotes}
                  ><span slot="text">${app.notes.download}</span></md-button
                >
              `}
        </div>
      `;
    }
  }
}
