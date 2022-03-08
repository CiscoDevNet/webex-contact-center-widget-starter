/* eslint-disable @typescript-eslint/no-explicit-any */
// import { i18nMixin } from "@/mixins/i18nMixin";
import "@momentum-ui/web-components";
import { customElement, html, LitElement, property } from "lit-element";
import { NOTE_COLORS, DEFAULT } from "../../constants";
import style from "../../assets/styles/NotesWidget.scss";
import { checkIfSpaceOrEnterKeydown } from "../../Utils";

export namespace NotesColors {
  /**
   * @element agentx-wc-notes-colors
   * @fires color-selected
   */
  @customElement("agentx-wc-notes-colors")
  export class Element extends LitElement {
    @property({ type: String, reflect: true }) selectedColor = "";

    private handleKeyDown = (event: KeyboardEvent, color: string) => {
      if (checkIfSpaceOrEnterKeydown(event.code)) {
        this.handleNotesColorSelect(color);
      }
    };

    private handleNotesColorSelect = (color: string) => {
      this.dispatchEvent(
        new CustomEvent("color-selected", {
          composed: true,
          bubbles: true,
          detail: {
            value: color
          }
        })
      );
    };

    static get styles() {
      return style;
    }

    render() {
      return html`
        <div class="notes-color-wrapper">
          ${Object.keys(NOTE_COLORS).map((color: any) => {
            if (color !== DEFAULT) {
              return html`
                <span
                  ?selected=${color === this.selectedColor}
                  tabindex="0"
                  aria-label="${color}"
                  style="background-color: ${NOTE_COLORS[color]}"
                  @click=${() => this.handleNotesColorSelect(color)}
                  @keydown=${(event: KeyboardEvent) => this.handleKeyDown(event, color)}
                ></span>
              `;
            } else {
              return html``;
            }
          })}
        </div>
      `;
    }
  }
}
