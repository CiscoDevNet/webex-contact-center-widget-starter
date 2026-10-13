/**
 * Too wide for the header iframe. Shows a scrollbar on Desktop. No popover.
 * Compare HeaderFit.ts.
 */
import { css, customElement, html, LitElement } from "lit-element";

@customElement("header-overflow-widget")
export class HeaderOverflowWidget extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-flex;
        align-items: center;
        height: 40px;
        background: transparent;
      }
      .row {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        width: 280px;
        font-size: 12px;
        color: #e71924;
        white-space: nowrap;
      }
      button {
        height: 28px;
        padding: 0 8px;
      }
    `;
  }

  render() {
    return html`
      <div class="row">
        <span>Too wide for the header iframe</span>
        <button type="button">One</button>
        <button type="button">Two</button>
        <button type="button">Three</button>
      </div>
    `;
  }
}
