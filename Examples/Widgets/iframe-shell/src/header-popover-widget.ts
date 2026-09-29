/**
 * header-popover-widget — iframe-shell Flavor 2 (header overlay clipping)
 *
 * How to build a header widget that uses Desktop.popover:
 *
 *   import { Desktop } from "@wxcc-desktop/sdk";
 *
 *   const rect = trigger.getBoundingClientRect();
 *   await Desktop.popover.open({
 *     comp: "header-popover-widget",
 *     script: bundleUrl, // host passes ?bundle= inside the iframe shell
 *     trigger: { rect: { x: rect.left, y: rect.top, width: rect.width, height: rect.height } },
 *     panel: { width: "360px", height: "320px", maxHeight: "500px", placement: "bottom-end" }
 *   });
 *
 * This published tag does not bundle the SDK (the shell already injects it).
 * It calls the same API via window.Desktop.popover / AGENTX_SERVICE.popover.
 *
 * BROKEN in a header iframe (~48–64px):
 *   <md-menu-overlay>, position:absolute panels, MUI Popover, tooltips that
 *   escape the trigger. The iframe hard-clips overflow. CSS overflow:visible
 *   on the iframe has no effect.
 *
 * FIXED:
 *   Keep a compact trigger in the header. Open the rich panel through
 *   Desktop.popover.open() so the host renders it outside the iframe.
 *
 * Single-bundle pattern: this file registers one tag. When the host loads the
 * same bundle inside the popover, Desktop.popover.isActive() is true and we
 * render the panel instead of the trigger.
 *
 * Do not bundle Momentum. The iframe shell already defines md-* elements.
 */
import { getBundleUrl, getPopover, triggerRect } from "./types";

const WIDGET_NAME = "header-popover-widget";
const CONTENT_HEIGHT = "320px";

class HeaderPopoverWidget extends HTMLElement {
  private offClose: (() => void) | null = null;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback(): void {
    const popover = getPopover();
    if (popover && typeof popover.isActive === "function" && popover.isActive()) {
      this.renderPanel();
      return;
    }
    this.renderTrigger();
  }

  disconnectedCallback(): void {
    if (this.offClose) {
      this.offClose();
      this.offClose = null;
    }
  }

  private get root(): ShadowRoot {
    if (!this.shadowRoot) {
      throw new Error("shadow root missing");
    }
    return this.shadowRoot;
  }

  private renderTrigger(): void {
    this.root.innerHTML = `
      <style>
        :host { display:inline-flex; align-items:center; justify-content:center; box-sizing:border-box; height:40px; max-width:100%; overflow:hidden; background:transparent; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif; }
        button { position:relative; width:36px; height:36px; border:1px solid #c9c9c9; border-radius:18px; background:#fff; cursor:pointer; }
        button.active { outline:2px solid #1e8e3e; }
        .badge { position:absolute; top:-4px; right:-4px; min-width:16px; height:16px; padding:0 4px; border-radius:8px; background:#e71924; color:#fff; font-size:10px; line-height:16px; }
      </style>
      <button id="open" aria-label="Open header panel" title="Opens via Desktop.popover">
        <span aria-hidden="true">☰</span>
        <span class="badge">3</span>
      </button>
    `;

    const btn = this.root.getElementById("open") as HTMLButtonElement;
    const popover = getPopover();
    if (popover && typeof popover.onClose === "function") {
      this.offClose = popover.onClose(() => btn.classList.remove("active"));
    }
    btn.addEventListener("click", () => this.openPanel(btn));
  }

  private openPanel(btn: HTMLButtonElement): void {
    const popover = getPopover();
    const script = getBundleUrl(/header-popover-widget\.js/);
    if (!popover || typeof popover.open !== "function") {
      this.showFallback(
        btn,
        "Desktop.popover is unavailable here (Storybook / in-page). On Desktop with the iframe shell this click opens a host popover."
      );
      return;
    }
    if (!script) {
      this.showFallback(
        btn,
        "Bundle URL unknown. Inside the iframe shell the host passes it as ?bundle=."
      );
      return;
    }

    popover
      .open({
        comp: WIDGET_NAME,
        script,
        trigger: { rect: triggerRect(btn) },
        panel: {
          width: "360px",
          height: CONTENT_HEIGHT,
          maxHeight: "500px",
          placement: "bottom-end"
        }
      })
      .then(result => {
        if (result) {
          btn.classList.add("active");
        } else {
          this.showFallback(
            btn,
            "popover.open() was a no-op. Host popover is only active inside the iframe shell."
          );
        }
      })
      .catch(err => {
        const message = err instanceof Error ? err.message : String(err);
        this.showFallback(btn, `popover.open() failed: ${message}`);
      });
  }

  private showFallback(btn: HTMLButtonElement, message: string): void {
    btn.title = message;
    btn.classList.add("active");
  }

  private renderPanel(): void {
    this.root.innerHTML = `
      <style>
        :host { display:block; background:transparent; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif; color:#1a1a1a; padding:12px 16px; }
        h3 { margin:0 0 8px; font-size:14px; }
        p, li { font-size:13px; line-height:1.4; }
        button { margin-top:12px; }
      </style>
      <h3>Header panel (host popover)</h3>
      <p>This content is <strong>outside</strong> the 64px header iframe, so it cannot clip.</p>
      <ul>
        <li>Pass <code>trigger.rect</code> from <code>getBoundingClientRect()</code> (iframe-local).</li>
        <li>Call <code>Desktop.popover.close()</code> when the user is done.</li>
        <li>Do not nest another iframe unless you bridge dismiss yourself.</li>
      </ul>
      <button id="close" type="button">Close</button>
    `;

    const popover = getPopover();
    this.root.getElementById("close")?.addEventListener("click", () => {
      popover?.close?.();
    });
  }
}

if (!customElements.get(WIDGET_NAME)) {
  customElements.define(WIDGET_NAME, HeaderPopoverWidget);
}
