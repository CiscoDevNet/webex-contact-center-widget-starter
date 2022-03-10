/* eslint-disable @typescript-eslint/no-explicit-any */
import "@momentum-ui/web-components";
import app from "./assets/localisation/app.json";
import { customElement, html, LitElement, property } from "lit-element";
import style from "./assets/styles/NotesHeaderWidget.scss";
import "./notesWidget";

export namespace NotesHeaderWidget {
  /**
   * @element notes-header-widget
   */
  @customElement("notes-header-widget")
  export class Element extends LitElement {
    @property({ type: String, attribute: "agent-id" }) agentId = "";

    private handleMenuOpened() {
      //   SERVICE.telemetry.track(SERVICE.telemetry.MIX_EVENT.NOTES_WIDGET_OPENED);
      console.log("Noted Widget Opened");
    }

    static get styles() {
      return style;
    }

    render() {
      return html`
        <md-menu-overlay
          size="large"
          @menu-overlay-open=${this.handleMenuOpened}
        >
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
            <notes-widget .agentId=${this.agentId}></notes-widget>
          </div>
        </md-menu-overlay>
      `;
    }
  }
}
