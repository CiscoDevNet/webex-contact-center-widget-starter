/**
 * After Desktop shrink-wraps the header iframe, set an intrinsic width
 * (inline-flex / max-content / px). width: 100% on :host loops iframe ↔ widget
 * and the used size falls back to a default box again.
 * Compare HeaderOverflow.ts.
 */
import { css, customElement, html, LitElement } from "lit-element";

@customElement("header-fit-widget")
export class HeaderFitWidget extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        height: 40px;
        width: max-content;
        overflow: hidden;
        background: transparent;
      }
      .pill {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        height: 36px;
        padding: 0 10px;
        border: 1px solid #1e8e3e;
        border-radius: 18px;
        background: #fff;
        color: #1e8e3e;
        font-size: 12px;
        white-space: nowrap;
      }
    `;
  }

  render() {
    return html`
      <span class="pill" title="Intrinsic width (max-content). Do not use width: 100% on :host.">
        <span aria-hidden="true">✓</span>
        Fit
      </span>
    `;
  }
}
