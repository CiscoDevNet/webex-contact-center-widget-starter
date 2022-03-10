/* eslint-disable @typescript-eslint/no-explicit-any */
import "@momentum-ui/web-components";
import { customElement, html, LitElement, property } from "lit-element";
import style from "./EmptyState.scss";

type IllustrationName = "Lighthouse_anding";

export namespace NotesEmptyState {
  /**
   * @element wc-notes-empty-state
   */
  @customElement("wc-notes-empty-state")
  export class Element extends LitElement {
    @property({ type: String, attribute: "illustration-name" }) illustrationName: IllustrationName = "Lighthouse_anding";
    @property({ type: String, attribute: "illustration-alt" }) illustrationAlt = "";

    static get styles() {
      return style;
    }


    get imagePath() {
        return require(`@img/${this.illustrationName}.svg`);
    }

    render() {
        return html`
        <div class="empty-state" part="container">
            <div class="empty-state__container">
            <img part="img" src="${this.imagePath}" alt="${this.illustrationAlt}" class="empty-state__illustration" />
            <slot></slot>
            </div>
        </div>
        `;
    }
  }
}
