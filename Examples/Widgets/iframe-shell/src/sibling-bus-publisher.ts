/**
 * sibling-bus-publisher — iframe-shell sibling event bus
 *
 * BROKEN:
 *   window.dispatchEvent(new CustomEvent("smcLoginEvent", { detail }))
 * Each iframe-shell widget has its own window. CustomEvents never reach
 * a sibling in header / navigation / headless.
 *
 * FIXED:
 *   window.postMessage({ type: "WXCC_WIDGET_EVENT", ... }, "*")
 *   or parent.postMessage(..., "*") / host origin.
 * The desktop host relays postMessage between sibling widget iframes.
 */
import { WIDGET_EVENT_TYPE, WidgetEventPayload } from "./types";

const WIDGET_NAME = "sibling-bus-publisher";
const EVENT_NAME = "token-updated";

class SiblingBusPublisher extends HTMLElement {
  private count = 0;

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
        :host { display:inline-flex; align-items:center; gap:4px; box-sizing:border-box; height:40px; max-width:100%; overflow:hidden; background:transparent; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif; font-size:11px; }
        button { height:28px; padding:0 6px; cursor:pointer; font-size:11px; }
        .broken { border-color:#e71924; color:#e71924; }
        .fixed { border-color:#1e8e3e; color:#1e8e3e; }
        .count { color:#6e6e6e; }
      </style>
      <button id="broken" class="broken" type="button" title="CustomEvent stays in this iframe">CE</button>
      <button id="fixed" class="fixed" type="button" title="postMessage is relayed to siblings">PM</button>
      <span class="count" id="count">#0</span>
    `;
    this.shadowRoot.getElementById("broken")?.addEventListener("click", () => this.sendBroken());
    this.shadowRoot.getElementById("fixed")?.addEventListener("click", () => this.sendFixed());
  }

  private nextPayload(path: string): WidgetEventPayload {
    this.count += 1;
    const countEl = this.shadowRoot?.getElementById("count");
    if (countEl) {
      countEl.textContent = `#${this.count}`;
    }
    return {
      type: WIDGET_EVENT_TYPE,
      event: EVENT_NAME,
      path,
      count: this.count,
      timestamp: Date.now(),
      token: `demo-session-token-${this.count}`
    };
  }

  private sendBroken(): void {
    const payload = this.nextPayload("CustomEvent");
    window.dispatchEvent(
      new CustomEvent(WIDGET_EVENT_TYPE, {
        bubbles: true,
        composed: true,
        detail: payload
      })
    );
  }

  private sendFixed(): void {
    window.postMessage(this.nextPayload("window.postMessage"), "*");
  }
}

if (!customElements.get(WIDGET_NAME)) {
  customElements.define(WIDGET_NAME, SiblingBusPublisher);
}
