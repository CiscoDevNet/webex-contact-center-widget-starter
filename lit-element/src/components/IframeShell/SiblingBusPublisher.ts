import { css, customElement, html, internalProperty, LitElement } from "lit-element";
import { WIDGET_EVENT_TYPE, WidgetEventPayload } from "./desktop";

@customElement("sibling-bus-publisher")
export class SiblingBusPublisher extends LitElement {
  @internalProperty() private count = 0;

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
      }
      .broken { --md-button-color: #e71924; }
      .count { color: #6e6e6e; }
    `;
  }

  private nextPayload(path: string): WidgetEventPayload {
    this.count += 1;
    return {
      type: WIDGET_EVENT_TYPE,
      event: "token-updated",
      path,
      count: this.count,
      timestamp: Date.now(),
      token: `demo-session-token-${this.count}`
    };
  }

  private sendBroken() {
    const payload = this.nextPayload("CustomEvent");
    window.dispatchEvent(
      new CustomEvent(WIDGET_EVENT_TYPE, { bubbles: true, composed: true, detail: payload })
    );
  }

  private sendFixed() {
    window.postMessage(this.nextPayload("window.postMessage"), "*");
  }

  render() {
    return html`
      <span>Sibling bus (Lit):</span>
      <md-button class="broken" size="28" @button-click=${() => this.sendBroken()}
        >Broken: CustomEvent</md-button
      >
      <md-button color="green" size="28" @button-click=${() => this.sendFixed()}
        >Fixed: postMessage</md-button
      >
      <span class="count">#${this.count}</span>
    `;
  }
}
