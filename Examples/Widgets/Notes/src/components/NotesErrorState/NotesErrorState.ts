/* eslint-disable @typescript-eslint/no-explicit-any */
// import { WidgetError } from "@/index";
// import { i18nMixin, t } from "@/mixins/i18nMixin";
import "@momentum-ui/web-components";
import { customElement, html, internalProperty, LitElement, property } from "lit-element";
import app from "../../assets/localisation/app.json";
import style from "../../assets/styles/NotesWidget.scss";

export namespace NotesErrorState {
  /**
   * @element agentx-wc-notes-error-state
   */
  @customElement("agentx-wc-notes-error-state")
  export class Element extends LitElement {
    @property({ type: Boolean }) isFeatureFlagEnabled = true;
    @property({ type: String }) trackingId = "";

    FEATURE_FLAG_ERROR_DETAILS = {
      header: app.notes.notConfigured
    };

    DEFAULT_ERROR_DETAILS = {
      header: app.notes.failedToLoadNotes
    };

    @internalProperty() detail: any = this.DEFAULT_ERROR_DETAILS;

    static get styles() {
      return style;
    }

    render() {
      return html`
        <div>${app.notes.failedToLoadNotes}</div>
      `;
    }
  }
}
