import { Desktop } from "@wxcc-desktop/sdk";
import { css, customElement, html, internalProperty, LitElement } from "lit-element";
import { antiPatternComment } from "./desktop";

@customElement("sdk-init-widget")
export class SdkInitWidget extends LitElement {
  @internalProperty() private kind: "ok" | "warn" | "err" = "warn";
  @internalProperty() private message = "Initializing…";
  @internalProperty() private detail = antiPatternComment;

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 12px;
        border: 1px solid #d2d2d2;
        border-radius: 8px;
        background: #fff;
      }
      h3 {
        margin: 0 0 8px;
        font-size: 14px;
      }
      .ok { color: #1e8e3e; }
      .warn { color: #b26a00; }
      .err { color: #e71924; }
      pre {
        white-space: pre-wrap;
        font-size: 11px;
        background: #f6f6f6;
        padding: 8px;
        border-radius: 4px;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    void this.initSdk();
  }

  private async initSdk() {
    if (!Desktop?.config || typeof Desktop.config.init !== "function") {
      this.kind = "warn";
      this.message =
        "Desktop SDK is not on this page. On Agent Desktop, call Desktop.config.init() without querying agentx-app.";
      return;
    }
    try {
      await Desktop.config.init({ widgetName: "sdk-init-widget", widgetProvider: "widget-starter" });
      const data = Desktop.agentStateInfo?.latestData || {};
      this.kind = "ok";
      this.message = "SDK initialized without touching host DOM.";
      this.detail = [
        "Desktop.config.init() resolved.",
        "",
        `agentId: ${(data as { agentId?: string }).agentId || "(not available)"}`,
        "",
        antiPatternComment
      ].join("\n");
    } catch (err) {
      this.kind = "err";
      this.message = "Desktop.config.init() failed. Fail gracefully — do not retry by querying the host.";
      this.detail = err instanceof Error ? err.message : String(err);
    }
  }

  render() {
    return html`
      <h3>SDK init (no host DOM)</h3>
      <p class="${this.kind}">${this.message}</p>
      <pre>${this.detail}</pre>
    `;
  }
}
