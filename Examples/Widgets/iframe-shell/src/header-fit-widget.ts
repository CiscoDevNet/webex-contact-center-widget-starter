/**
 * header-fit-widget — set your own header width (after Desktop shrink-wrap)
 *
 * Assumes Desktop sizes the header iframe to this widget’s intrinsic size
 * (no default ~130px box). The iframe becomes as wide as :host, same as an
 * in-page header widget.
 *
 * Set width with intrinsic CSS — do not use percentages of the iframe:
 *
 *   :host {
 *     display: inline-flex;   // shrink-wraps the pill / icon
 *     width: max-content;     // or omit width; or a fixed px (e.g. 40px)
 *     height: 40px;           // stay under the ~48–64px header strip
 *     background: transparent;
 *   }
 *
 * If you set width: 100% (or height: 100%) on :host after that fix:
 *   The iframe sizes to the widget, and the widget sizes to the iframe.
 *   That loop has no real width. The used size falls back to a default
 *   (the old ~130px class of box), or collapses / stretches unpredictably,
 *   and you get a scrollbar again.
 *
 * position: relative is fine for a badge inside the 40px control.
 * Do not let absolute/fixed children sit outside that row.
 *
 * Need more UI? Desktop.popover, or put the widget in navigation/panel.
 */
const WIDGET_NAME = "header-fit-widget";

class HeaderFitWidget extends HTMLElement {
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
          justify-content: center;
          box-sizing: border-box;
          width: max-content;
          height: 40px;
          overflow: hidden;
          background: transparent;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
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
      </style>
      <span class="pill" title="Intrinsic width (max-content). Do not use width: 100% on :host.">
        <span aria-hidden="true">✓</span>
        Fit
      </span>
    `;
  }
}

if (!customElements.get(WIDGET_NAME)) {
  customElements.define(WIDGET_NAME, HeaderFitWidget);
}
