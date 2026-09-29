import { css, customElement, html, internalProperty, LitElement } from "lit-element";
import { isPartnerEvent, WIDGET_EVENT_TYPE, WidgetEventPayload } from "./desktop";

@customElement("sibling-bus-consumer")
export class SiblingBusConsumer extends LitElement {
  @internalProperty() private customLines: string[] = [];
  @internalProperty() private relayLines: string[] = [];

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 12px;
        border: 1px solid #d2d2d2;
        border-radius: 8px;
        background: #fff;
        min-height: 160px;
      }
      .label { font-weight: 600; margin-top: 10px; }
      .empty { color: #8a8a8a; }
      .ok { color: #1e8e3e; }
    `;
  }

  private readonly onMessage = (event: MessageEvent) => {
    if (isPartnerEvent(event.data)) {
      this.relayLines = [...this.relayLines, this.format(event.data)];
    }
  };

  private readonly onCustom = (event: Event) => {
    const data = (event as CustomEvent<WidgetEventPayload>).detail;
    if (isPartnerEvent(data)) {
      this.customLines = [...this.customLines, this.format(data)];
    }
  };

  private format(data: WidgetEventPayload) {
    return `#${data.count} via ${data.path} token=${data.token} @ ${new Date(
      data.timestamp
    ).toLocaleTimeString()}`;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("message", this.onMessage);
    window.addEventListener(WIDGET_EVENT_TYPE, this.onCustom);
  }

  disconnectedCallback() {
    window.removeEventListener("message", this.onMessage);
    window.removeEventListener(WIDGET_EVENT_TYPE, this.onCustom);
    super.disconnectedCallback();
  }

  render() {
    return html`
      <h3>Sibling bus consumer (Lit)</h3>
      <p>CustomEvents do not cross iframe-shell slots. <code>postMessage</code> does.</p>
      <div class="label">CustomEvent (broken in iframe shell)</div>
      <div class="${this.customLines.length ? "" : "empty"}">
        ${this.customLines.length
          ? this.customLines.map(line => html`<div>${line}</div>`)
          : "Nothing yet — CustomEvents do not cross iframes."}
      </div>
      <div class="label">postMessage (fixed — host relays this)</div>
      <div class="${this.relayLines.length ? "ok" : "empty"}">
        ${this.relayLines.length
          ? this.relayLines.map(line => html`<div>${line}</div>`)
          : "Waiting for WXCC_WIDGET_EVENT…"}
      </div>
    `;
  }
}
