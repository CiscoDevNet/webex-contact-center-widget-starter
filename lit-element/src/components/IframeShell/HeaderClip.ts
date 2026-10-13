/**
 * Broken header overlay — md-menu-overlay clips in a ~64px header iframe.
 * Compare HeaderPopover.ts, which uses Desktop.popover.
 */
import { css, customElement, html, LitElement } from "lit-element";

@customElement("header-clip-widget")
export class HeaderClipWidget extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-flex;
        align-items: center;
        height: 40px;
        background: transparent;
      }
      button {
        position: relative;
        height: 36px;
        padding: 0 10px;
        border: 1px solid #e71924;
        border-radius: 18px;
        background: #fff;
        color: #e71924;
        cursor: pointer;
        font-size: 12px;
      }
      .badge {
        position: absolute;
        top: -4px;
        right: -4px;
        min-width: 16px;
        height: 16px;
        padding: 0 4px;
        border-radius: 8px;
        background: #e71924;
        color: #fff;
        font-size: 10px;
        line-height: 16px;
      }
      .panel {
        width: 280px;
        padding: 4px 0;
      }
    `;
  }

  render() {
    return html`
      <md-menu-overlay placement="bottom" size="large">
        <button slot="menu-trigger" type="button" aria-label="Open clipped header panel">
          Clip
          <span class="badge">3</span>
        </button>
        <div class="panel">
          <h3>This panel clips in the header iframe</h3>
          <p>
            <code>md-menu-overlay</code> stays inside the ~64px header iframe. Use
            <code>Desktop.popover.open()</code> instead — see header-popover-widget.
          </p>
          <ul>
            <li>Do not use in-iframe overlays in <code>advancedHeader</code>.</li>
            <li>Line two — still inside the overlay.</li>
            <li>Line three — this height is what gets clipped on Desktop.</li>
          </ul>
        </div>
      </md-menu-overlay>
    `;
  }
}
