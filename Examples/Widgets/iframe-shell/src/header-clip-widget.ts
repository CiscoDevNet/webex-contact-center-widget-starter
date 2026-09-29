/**
 * header-clip-widget — broken header overlay
 *
 * Put this in advancedHeader. The iframe is ~48–64px. md-menu-overlay (and
 * md-popover) render inside that iframe, so the panel clips. CSS
 * overflow:visible on the iframe does not fix it.
 *
 * Compare header-popover-widget, which opens the same kind of panel with
 * Desktop.popover so the host draws it outside the iframe.
 *
 * Do not bundle Momentum. The iframe shell already defines md-* elements.
 */
const WIDGET_NAME = "header-clip-widget";

class HeaderClipWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback(): void {
    if (!this.shadowRoot) {
      return;
    }
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          height: 40px;
          background: transparent;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
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
          padding: 12px 16px;
          color: #1a1a1a;
        }
        h3 { margin: 0 0 8px; font-size: 14px; }
        p, li { font-size: 13px; line-height: 1.4; }
      </style>
      <md-menu-overlay placement="bottom" size="large">
        <button slot="menu-trigger" type="button" aria-label="Open clipped header panel">
          Clip
          <span class="badge">3</span>
        </button>
        <div class="panel">
          <h3>This panel clips in the header iframe</h3>
          <p>
            <code>md-menu-overlay</code> / <code>md-popover</code> stay inside
            the ~64px header iframe. The rest of this list is cut off on Desktop.
          </p>
          <ul>
            <li>Do not use in-iframe overlays in <code>advancedHeader</code>.</li>
            <li>Use <code>Desktop.popover.open()</code> instead.</li>
            <li>See <code>header-popover-widget</code> in this repo.</li>
            <li>Line four — still inside the overlay.</li>
            <li>Line five — still inside the overlay.</li>
            <li>Line six — this is the height that gets clipped.</li>
          </ul>
        </div>
      </md-menu-overlay>
    `;
  }
}

if (!customElements.get(WIDGET_NAME)) {
  customElements.define(WIDGET_NAME, HeaderClipWidget);
}
