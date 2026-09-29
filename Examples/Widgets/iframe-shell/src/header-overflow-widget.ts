/**
 * header-overflow-widget — a wide header chip
 *
 * After Desktop shrink-wraps the iframe, this ~280px row makes the iframe
 * ~280px. That is not a 130px-default scrollbar — it just takes header space
 * (and may push siblings into the more menu).
 *
 * Set width with max-content or px (see header-fit-widget). Do not use
 * width: 100% on :host — that loops iframe ↔ widget and the used size
 * falls back to a default box again.
 */
const WIDGET_NAME = "header-overflow-widget";

class HeaderOverflowWidget extends HTMLElement {
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
          flex: none;
          height: 28px;
          padding: 0 8px;
        }
      </style>
      <div class="row">
        <span>Too wide for the header iframe</span>
        <button type="button">One</button>
        <button type="button">Two</button>
        <button type="button">Three</button>
      </div>
    `;
  }
}

if (!customElements.get(WIDGET_NAME)) {
  customElements.define(WIDGET_NAME, HeaderOverflowWidget);
}
