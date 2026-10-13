export const WIDGET_EVENT_TYPE = "WXCC_WIDGET_EVENT";

export interface WidgetEventPayload {
  type: typeof WIDGET_EVENT_TYPE;
  event: string;
  path: string;
  count: number;
  timestamp: number;
  token: string;
}

export interface PopoverRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface DesktopPopover {
  isActive?: () => boolean;
  open: (options: {
    comp: string;
    script: string;
    trigger: { rect: PopoverRect };
    panel: {
      width: string;
      height: string;
      maxHeight: string;
      placement: string;
    };
  }) => Promise<unknown>;
  close?: () => void;
  onClose?: (handler: () => void) => () => void;
}

export interface DesktopLike {
  popover?: DesktopPopover;
  config?: {
    init: (opts: { widgetName: string; widgetProvider: string }) => Promise<void>;
  };
  agentStateInfo?: {
    getLatestData?: () => Record<string, string | undefined> | undefined;
  };
}

declare global {
  interface Window {
    Desktop?: DesktopLike;
    AGENTX_SERVICE?: { popover?: DesktopPopover };
  }
}

/** Same object as Desktop.popover from @wxcc-desktop/sdk after the shell shim. */
export function getPopover(): DesktopPopover | null {
  return window.Desktop?.popover || window.AGENTX_SERVICE?.popover || null;
}

export function getDesktop(): DesktopLike | null {
  return window.Desktop || null;
}

export function isPartnerEvent(data: unknown): data is WidgetEventPayload {
  return Boolean(
    data &&
      typeof data === "object" &&
      (data as WidgetEventPayload).type === WIDGET_EVENT_TYPE
  );
}

export function triggerRect(el: Element): PopoverRect {
  const r = el.getBoundingClientRect();
  return { x: r.left, y: r.top, width: r.width, height: r.height };
}

export function getBundleUrl(filePattern: RegExp): string {
  try {
    const bundle = new URLSearchParams(window.location.search).get("bundle");
    if (bundle) {
      return bundle;
    }
  } catch {
    // Storybook / in-page preview has no shell query string.
  }
  const scripts = Array.from(document.querySelectorAll("script[src]"));
  const match = scripts.find(script => filePattern.test(script.src));
  return match ? match.src : "";
}
