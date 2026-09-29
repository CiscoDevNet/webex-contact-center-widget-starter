/* eslint-disable @typescript-eslint/no-explicit-any */
import "@momentum-ui/web-components";
import { Desktop } from "@wxcc-desktop/sdk";
import app from "./assets/localisation/app.json";
import { customElement, html, LitElement, property } from "lit-element";
import style from "./assets/styles/NotesHeaderWidget.scss";
import "./NotesWidget";

function getPopover(): any {
  const fromSdk = (Desktop as { popover?: unknown }).popover;
  const fromService = (window as any).AGENTX_SERVICE && (window as any).AGENTX_SERVICE.popover;
  return fromSdk || fromService || null;
}

function getNotesBundleUrl(): string {
  try {
    const bundle = new URLSearchParams(window.location.search).get("bundle");
    if (bundle) {
      return bundle;
    }
  } catch {
    // Storybook and the static demo are not the iframe shell.
  }
  const scripts = Array.from(document.querySelectorAll("script[src]")) as HTMLScriptElement[];
  const match = scripts.find((script) => /notes-widget\.js/.test(script.src));
  return match ? match.src : "";
}

function isIframeShellPopoverAvailable(): boolean {
  const shim = (window as any).AGENTX_SERVICE && (window as any).AGENTX_SERVICE.popover;
  if (shim && typeof shim.open === "function") {
    return true;
  }
  try {
    return Boolean(new URLSearchParams(window.location.search).get("bundle"));
  } catch {
    return false;
  }
}

export namespace NotesHeaderWidget {
  /**
   * @element notes-header-widget
   *
   * Header iframe is ~48–64px. md-menu-overlay clips there.
   * In the iframe shell, open notes-widget through Desktop.popover instead.
   * In-page / Storybook still uses md-menu-overlay so the demo keeps working.
   */
  @customElement("notes-header-widget")
  export class Element extends LitElement {
    @property({ type: String, attribute: "agent-id" }) agentId = "";

    private popoverCloseUnsub?: () => void;

    static get styles() {
      return style;
    }

    disconnectedCallback() {
      if (this.popoverCloseUnsub) {
        this.popoverCloseUnsub();
        this.popoverCloseUnsub = undefined;
      }
      super.disconnectedCallback();
    }

    private async openHostPopover(event: Event) {
      const trigger = (event.currentTarget as HTMLElement) || this;
      const rect = trigger.getBoundingClientRect();
      const popover = getPopover();
      const script = getNotesBundleUrl();
      if (!popover || typeof popover.open !== "function" || !script) {
        return;
      }
      try {
        const result = await popover.open({
          comp: "notes-widget",
          script,
          trigger: {
            rect: { x: rect.left, y: rect.top, width: rect.width, height: rect.height }
          },
          panel: {
            width: "480px",
            height: "520px",
            maxHeight: "560px",
            placement: "bottom-end"
          },
          attributes: { "agent-id": this.agentId },
          properties: { agentId: this.agentId }
        });
        if (result && typeof popover.onClose === "function") {
          this.popoverCloseUnsub = popover.onClose(() => undefined);
        }
      } catch {
        // Host popover is unavailable — Storybook / in-page still uses md-menu-overlay.
      }
    }

    private renderTriggerButton() {
      return html`
        <md-tooltip placement="bottom" message="${app.notes.notes}">
          <md-button class="notes-btn" variant="secondary" size="40" circle>
            <md-icon name="note_20"></md-icon>
          </md-button>
        </md-tooltip>
      `;
    }

    render() {
      if (isIframeShellPopoverAvailable()) {
        return html`
          <span class="notes-popover-trigger" @click=${this.openHostPopover}>
            ${this.renderTriggerButton()}
          </span>
        `;
      }

      return html`
        <md-menu-overlay size="large">
          <span slot="menu-trigger">${this.renderTriggerButton()}</span>
          <div class="notes-widget-container">
            <notes-widget .agentId=${this.agentId}></notes-widget>
          </div>
        </md-menu-overlay>
      `;
    }
  }
}
