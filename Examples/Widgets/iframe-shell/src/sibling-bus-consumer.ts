/**
 * sibling-bus-consumer — listens for the publisher in another layout slot
 *
 * Listens for both CustomEvent (will stay empty in the iframe shell) and
 * window "message" (the host relay delivers sibling postMessage here).
 *
 * Ignore host protocol shapes (SHELL_READY, Comlink). Only handle your
 * own type, e.g. WXCC_WIDGET_EVENT.
 */
import { isPartnerEvent, WIDGET_EVENT_TYPE, WidgetEventPayload } from "./types";

const WIDGET_NAME = "sibling-bus-consumer";

class SiblingBusConsumer extends HTMLElement {
  private readonly onMessage = (event: MessageEvent): void => {
    if (!isPartnerEvent(event.data)) {
      return;
    }
    this.appendLine("relay", event.data, true);
  };

  private readonly onCustom = (event: Event): void => {
    const data = (event as CustomEvent<WidgetEventPayload>).detail;
    if (!isPartnerEvent(data)) {
      return;
    }
    this.appendLine("custom", data, false);
  };

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
        :host { display:block; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif; padding:12px; border:1px solid #d2d2d2; border-radius:8px; background:#fff; min-height:180px; }
        h3 { margin:0 0 8px; font-size:14px; }
        .col { font-size:12px; margin-top:10px; }
        .label { font-weight:600; }
        .empty { color:#8a8a8a; }
        .ok { color:#1e8e3e; }
        .line { padding:2px 0; border-bottom:1px solid #eee; }
      </style>
      <h3>Sibling bus consumer</h3>
      <p>Place <code>sibling-bus-publisher</code> in the header (or headless) and this widget in navigation.</p>
      <div class="col"><div class="label">CustomEvent (broken in iframe shell)</div><div id="custom" class="empty">Nothing yet — CustomEvents do not cross iframes.</div></div>
      <div class="col"><div class="label">postMessage (fixed — host relays this)</div><div id="relay" class="empty">Waiting for WXCC_WIDGET_EVENT…</div></div>
    `;
    window.addEventListener("message", this.onMessage);
    window.addEventListener(WIDGET_EVENT_TYPE, this.onCustom);
  }

  disconnectedCallback(): void {
    window.removeEventListener("message", this.onMessage);
    window.removeEventListener(WIDGET_EVENT_TYPE, this.onCustom);
  }

  private appendLine(id: string, data: WidgetEventPayload, ok: boolean): void {
    const root = this.shadowRoot?.getElementById(id);
    if (!root) {
      return;
    }
    if (root.classList.contains("empty")) {
      root.textContent = "";
      root.classList.remove("empty");
      if (ok) {
        root.classList.add("ok");
      }
    }
    const line = document.createElement("div");
    line.className = "line";
    line.textContent = `#${data.count} via ${data.path} token=${data.token} @ ${new Date(
      data.timestamp
    ).toLocaleTimeString()}`;
    root.appendChild(line);
  }
}

if (!customElements.get(WIDGET_NAME)) {
  customElements.define(WIDGET_NAME, SiblingBusConsumer);
}
