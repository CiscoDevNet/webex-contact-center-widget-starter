/* eslint-disable @typescript-eslint/no-explicit-any */
// import { i18nMixin, t } from "@/mixins/i18nMixin";
import "@momentum-ui/web-components";
import { customElement, html, property, LitElement } from "lit-element";
import app from "../assets/localisation/app.json";
import style from "../assets/styles/NotesWidget.scss";

export namespace NotesSelectAll {
  /**
   * @element agentx-wc-notes-select-all
   */
  @customElement("agentx-wc-notes-select-all")
  export class Element extends LitElement {
    @property({ type: Boolean }) checked = false;

    private dispatchSelectAll = () => {
      this.checked = !this.checked;
      this.dispatchEvent(
        new CustomEvent("select-all", {
          composed: true,
          bubbles: true,
          detail: {
            checked: this.checked
          }
        })
      );
    };

    static get styles() {
      return style;
    }

    render() {
      return html`
        <div class="select-all-wrapper">
          <md-checkbox ?checked=${this.checked} @checkbox-change=${() => this.dispatchSelectAll()}
            >${app.notes.selectAll}</md-checkbox
          >
        </div>
      `;
    }
  }
}
