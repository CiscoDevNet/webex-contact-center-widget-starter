/**
 * sdk-init-widget — iframe-shell Tier 4 (HOST_DOM_QUERY)
 *
 * BROKEN (do not copy):
 *   const host = document.querySelector("agentx-app");
 *   if (host) { this.init(); } else { log("SDK not imported"); }
 *
 * Inside the iframe shell that lookup is always null. Walking host
 * shadowRoot (agentx-wc-navigation, status dropdowns, sibling widgets)
 * also fails. Cisco does not stub <agentx-app>.
 *
 * FIXED:
 *   Call Desktop.config.init() directly. Read agent/contact data from
 *   the Desktop JS SDK. Only query DOM your widget created.
 */
import { DesktopLike, getDesktop } from "./types";

const WIDGET_NAME = "sdk-init-widget";

class SdkInitWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback(): void {
    this.render();
    void this.initSdk();
  }

  private get root(): ShadowRoot {
    if (!this.shadowRoot) {
      throw new Error("shadow root missing");
    }
    return this.shadowRoot;
  }

  private render(): void {
    this.root.innerHTML = `
      <style>
        :host { display:block; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif; padding:12px; border:1px solid #d2d2d2; border-radius:8px; background:#fff; }
        h3 { margin:0 0 8px; font-size:14px; }
        .status { font-size:13px; margin:8px 0; }
        .ok { color:#1e8e3e; } .warn { color:#b26a00; } .err { color:#e71924; }
        pre { white-space:pre-wrap; font-size:11px; background:#f6f6f6; padding:8px; border-radius:4px; }
      </style>
      <h3>SDK init (no host DOM)</h3>
      <p class="status" id="status">Initializing…</p>
      <pre id="detail"></pre>
    `;
  }

  private antiPatternComment(): string {
    return [
      "Do not copy this anti-pattern:",
      "",
      "  const host = document.querySelector('agentx-app');",
      "  if (!host) { /* widget never starts inside the iframe shell */ }",
      "  host.shadowRoot.querySelector('agentx-wc-navigation');",
      "",
      "Use Desktop.config.init() and Desktop.* instead."
    ].join("\n");
  }

  private setStatus(kind: "ok" | "warn" | "err", message: string, detail?: string): void {
    const statusEl = this.root.getElementById("status");
    const detailEl = this.root.getElementById("detail");
    if (statusEl) {
      statusEl.className = `status ${kind}`;
      statusEl.textContent = message;
    }
    if (detailEl) {
      detailEl.textContent = detail || this.antiPatternComment();
    }
  }

  private async initSdk(): Promise<void> {
    const desktop = getDesktop();
    if (!desktop?.config || typeof desktop.config.init !== "function") {
      this.setStatus(
        "warn",
        "Desktop SDK is not on this page (Storybook / static demo stub). On Agent Desktop, call Desktop.config.init() without querying agentx-app."
      );
      return;
    }

    try {
      await desktop.config.init({ widgetName: WIDGET_NAME, widgetProvider: "widget-starter" });
      this.setStatus("ok", "SDK initialized without touching host DOM.", this.readAgentState(desktop));
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      this.setStatus(
        "err",
        "Desktop.config.init() failed. Fail gracefully — do not retry by querying the host.",
        message
      );
    }
  }

  private readAgentState(desktop: DesktopLike): string {
    const lines = ["Desktop.config.init() resolved.", ""];
    try {
      if (typeof desktop.agentStateInfo?.getLatestData === "function") {
        const data = desktop.agentStateInfo.getLatestData() || {};
        lines.push(`agentId: ${data.agentId || data.agentID || "(not available)"}`);
        lines.push(`teamName: ${data.teamName || "(not available)"}`);
        lines.push(`subStatus: ${data.subStatus || data.state || "(not available)"}`);
      } else {
        lines.push("agentStateInfo is not on this SDK build — still do not query agentx-app.");
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      lines.push(`Could not read agent state: ${message}`);
    }
    lines.push("", this.antiPatternComment());
    return lines.join("\n");
  }
}

if (!customElements.get(WIDGET_NAME)) {
  customElements.define(WIDGET_NAME, SdkInitWidget);
}
