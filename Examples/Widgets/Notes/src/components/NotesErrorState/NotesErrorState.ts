/* eslint-disable @typescript-eslint/no-explicit-any */
import "@momentum-ui/web-components";
import {
  customElement,
  html,
  internalProperty,
  LitElement,
  property,
} from "lit-element";
import app from "../../assets/localisation/app.json";
import style from "./WidgetError.scss";

export namespace NotesErrorState {
  /**
   * @element wc-notes-error-state
   */
  @customElement("wc-notes-error-state")
  export class Element extends LitElement {
    @property({ type: Boolean }) isFeatureFlagEnabled = true;
    @property({ type: String }) trackingId = "";

    FEATURE_FLAG_ERROR_DETAILS = {
      header: app.notes.notConfigured,
    };

    DEFAULT_ERROR_DETAILS = {
      header: app.notes.failedToLoadNotes,
    };

    @internalProperty() detail: any = this.isFeatureFlagEnabled
      ? this.DEFAULT_ERROR_DETAILS
      : this.FEATURE_FLAG_ERROR_DETAILS;

    static get styles() {
      return style;
    }

    render() {
      return html`
        <div class="widget-error">
          <div class="widget-error-content">
            <div class="widget-error-icon">
              <md-icon name="icon-warning_32"></md-icon>
            </div>
            <strong class="widget-error-heading"> ${this.detail.header}</strong>
          </div>
        </div>
      `;
    }
  }
}
