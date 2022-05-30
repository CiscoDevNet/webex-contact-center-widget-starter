/* eslint-disable @typescript-eslint/no-explicit-any */
import "@momentum-ui/web-components";
import app from "./assets/localisation/app.json";
import { customElement, html, LitElement, property } from "lit-element";
import style from "./assets/styles/NotesHeaderWidget.scss";
// import "./NotesWidget";

export namespace NotesHeaderWidget {
  /**
   * @element notes-header-widget
   */
  @customElement("notes-header-widget")
  export class Element extends LitElement {
    @property({ type: String, attribute: "agent-id" }) agentId = "";

    static get styles() {
      return style;
    }

    render() {
      return html`
        <md-menu-overlay size="large">
          <md-tooltip
            slot="menu-trigger"
            placement="bottom"
            message="${app.notes.notes}"
          >
            <md-button class="notes-btn" variant="secondary" size="40" circle
              ><md-icon name="note_20"></md-icon
            ></md-button>
          </md-tooltip>
          <div class="notes-widget-container">
            <!-- <notes-widget .agentId=${this.agentId}></notes-widget> -->
          </div>
        </md-menu-overlay>

        <md-button class="notes-btn" variant="secondary" size="40" circle
              ><md-icon name="icon-response_16"></md-icon
            ></md-button>

            <md-button class="notes-btn" variant="secondary" size="40" circle
              ><md-icon name="icon-lock_12"></md-icon
            ></md-button>
            <md-button class="notes-btn" variant="secondary" size="40" circle
              ><md-icon name="icon-add_16"></md-icon
            ></md-button>
            <md-button class="notes-btn" variant="secondary" size="40" circle
              ><md-icon name="icon-filter_16"></md-icon
            ></md-button>
            <md-icon name="icon-pin_16"></md-icon
            >
            <md-icon name="icon-chat_14"></md-icon
            >
            <md-icon name="icon-cancel_16"></md-icon
            >
            <md-icon name="icon-apps_16"></md-icon
            >
            <md-icon name="icon-error_16"></md-icon
            >
            <md-icon name="icon-handset_16"></md-icon
            >
            <md-icon name="icon-contact-card_16"></md-icon
            >
            <md-icon name="icon-dialpad_16"></md-icon
            >
            <md-icon name="icon-refresh_16"></md-icon
            >
            <md-icon name="icon-send_16"></md-icon
            >
            <md-icon name="icon-more_16"></md-icon
            >
            <md-icon name="icon-attachment_16"></md-icon
            >
      `;
    }
  }
}
