/**
 * Header widget for Desktop `advancedHeader`.
 *
 * The header iframe is ~48–64px. Do not open md-menu-overlay, MUI Popover, or
 * position:absolute panels here — they clip. Keep a compact trigger and open
 * the rich panel with Desktop.popover from @wxcc-desktop/sdk:
 *
 *   import { Desktop } from "@wxcc-desktop/sdk";
 *
 *   await Desktop.popover.open({
 *     comp: "header-popover-widget",
 *     script: bundleUrl,
 *     trigger: { rect: { x, y, width, height } },
 *     panel: { width: "360px", height: "320px", placement: "bottom-end" }
 *   });
 *
 * When the host remounts this same tag inside the popover,
 * Desktop.popover.isActive() is true — render the panel, not the trigger.
 */
import { css, customElement, html, LitElement, query } from "lit-element";
import { getDesktopPopover, triggerRect } from "./desktop";

const WIDGET_NAME = "header-popover-widget";

@customElement(WIDGET_NAME)
export class HeaderPopoverWidget extends LitElement {
  @query("#open") private openBtn?: HTMLButtonElement;

  private offClose?: () => void;
  private hint = "Header trigger — do not render the panel here. Use Desktop.popover.open().";

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
        width: 36px;
        height: 36px;
        border: 1px solid #c9c9c9;
        border-radius: 18px;
        background: #fff;
        cursor: pointer;
      }
      button.active {
        outline: 2px solid #1e8e3e;
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
      .hint {
        margin-left: 8px;
        font-size: 11px;
        color: #6e6e6e;
        max-width: 320px;
      }
      .panel {
        padding: 4px 0;
      }
    `;
  }

  disconnectedCallback() {
    this.offClose?.();
    super.disconnectedCallback();
  }

  private get isPopoverContent() {
    return Boolean(getDesktopPopover()?.isActive?.());
  }

  private async openPanel() {
    const btn = this.openBtn;
    const popover = getDesktopPopover();
    if (!btn) {
      return;
    }
    if (!popover?.open) {
      this.hint =
        "Desktop.popover is unavailable in this sandbox. On Agent Desktop (iframe shell) this click calls Desktop.popover.open().";
      btn.classList.add("active");
      this.requestUpdate();
      return;
    }
    const script =
      document.querySelector<HTMLScriptElement>("script[src*='my-custom-widget'], script[src*='header-popover-widget']")
        ?.src || "";
    try {
      const result = await popover.open({
        comp: WIDGET_NAME,
        script,
        trigger: { rect: triggerRect(btn) },
        panel: { width: "360px", height: "320px", maxHeight: "500px", placement: "bottom-end" }
      });
      if (result) {
        btn.classList.add("active");
        this.offClose = popover.onClose?.(() => btn.classList.remove("active"));
      } else {
        this.hint = "popover.open() was a no-op. Host popover is only active inside the iframe shell.";
        this.requestUpdate();
      }
    } catch (err) {
      this.hint = `popover.open() failed: ${err instanceof Error ? err.message : String(err)}`;
      this.requestUpdate();
    }
  }

  render() {
    if (this.isPopoverContent) {
      return html`
        <div class="panel">
          <h3>Header panel (host popover)</h3>
          <p>This Lit Element content is <strong>outside</strong> the 64px header iframe.</p>
          <md-button @button-click=${() => getDesktopPopover()?.close?.()}>Close</md-button>
        </div>
      `;
    }
    return html`
      <button id="open" aria-label="Open header panel" @click=${this.openPanel}>
        <span aria-hidden="true">☰</span>
        <span class="badge">3</span>
      </button>
      <span class="hint">${this.hint}</span>
    `;
  }
}
