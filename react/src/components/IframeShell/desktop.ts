import { Desktop } from "@wxcc-desktop/sdk";

export const WIDGET_EVENT_TYPE = "WXCC_WIDGET_EVENT";

export interface WidgetEventPayload {
  type: typeof WIDGET_EVENT_TYPE;
  event: string;
  path: string;
  count: number;
  timestamp: number;
  token: string;
}

export interface DesktopPopover {
  isActive?: () => boolean;
  open: (options: {
    comp: string;
    script: string;
    trigger?: { rect: { x: number; y: number; width: number; height: number } };
    panel?: {
      width?: string;
      height?: string;
      maxHeight?: string;
      placement?: string;
    };
  }) => Promise<unknown>;
  close?: () => void | Promise<void>;
  onClose?: (handler: () => void) => () => void;
}

/**
 * Partners call Desktop.popover from @wxcc-desktop/sdk.
 * The iframe shell attaches that API to the SDK via AGENTX_SERVICE.
 */
export function getDesktopPopover(): DesktopPopover | null {
  const fromSdk = (Desktop as { popover?: DesktopPopover }).popover;
  const fromService = (window as Window & { AGENTX_SERVICE?: { popover?: DesktopPopover } })
    .AGENTX_SERVICE?.popover;
  return fromSdk || fromService || null;
}

export function isPartnerEvent(data: unknown): data is WidgetEventPayload {
  return Boolean(
    data &&
      typeof data === "object" &&
      (data as WidgetEventPayload).type === WIDGET_EVENT_TYPE
  );
}

export function triggerRect(el: Element) {
  const r = el.getBoundingClientRect();
  return { x: r.left, y: r.top, width: r.width, height: r.height };
}

export const antiPatternComment = [
  "Do not copy this anti-pattern:",
  "",
  "  const host = document.querySelector('agentx-app');",
  "  if (!host) { /* widget never starts inside the iframe shell */ }",
  "  host.shadowRoot.querySelector('agentx-wc-navigation');",
  "",
  "Use Desktop.config.init() and Desktop.* instead."
].join("\n");
