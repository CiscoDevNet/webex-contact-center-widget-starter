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
import React, { useRef, useState } from "react";
import { getDesktopPopover, triggerRect } from "./desktop";

const WIDGET_NAME = "header-popover-widget";

export const HeaderPopover: React.FC = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [hint, setHint] = useState(
    "Header trigger — do not render the panel here. Use Desktop.popover.open()."
  );
  const [active, setActive] = useState(false);
  const popover = getDesktopPopover();

  if (popover?.isActive?.()) {
    return (
      <div>
        <h3>Header panel (host popover)</h3>
        <p>
          This React content is <strong>outside</strong> the 64px header iframe.
        </p>
        <md-button onClick={() => popover.close?.()}>Close</md-button>
      </div>
    );
  }

  const openPanel = async () => {
    const btn = btnRef.current;
    if (!btn) {
      return;
    }
    if (!popover?.open) {
      setHint(
        "Desktop.popover is unavailable in this sandbox. On Agent Desktop (iframe shell) this click calls Desktop.popover.open()."
      );
      setActive(true);
      return;
    }
    const script =
      document.querySelector<HTMLScriptElement>(
        "script[src*='wxcc-sdk-explorer'], script[src*='header-popover-widget']"
      )?.src || "";
    try {
      const result = await popover.open({
        comp: WIDGET_NAME,
        script,
        trigger: { rect: triggerRect(btn) },
        panel: { width: "360px", height: "320px", maxHeight: "500px", placement: "bottom-end" }
      });
      setActive(Boolean(result));
      if (!result) {
        setHint("popover.open() was a no-op. Host popover is only active inside the iframe shell.");
      }
    } catch (err) {
      setHint(`popover.open() failed: ${err instanceof Error ? err.message : String(err)}`);
    }
  };

  return (
    <div style={{ display: "inline-flex", alignItems: "center", height: 40 }}>
      <button
        ref={btnRef}
        aria-label="Open header panel"
        className={active ? "active" : ""}
        onClick={openPanel}
        style={{
          position: "relative",
          width: 36,
          height: 36,
          borderRadius: 18,
          border: "1px solid #c9c9c9",
          background: "#fff",
          cursor: "pointer",
          outline: active ? "2px solid #1e8e3e" : undefined
        }}
      >
        <span aria-hidden="true">☰</span>
        <span
          style={{
            position: "absolute",
            top: -4,
            right: -4,
            minWidth: 16,
            height: 16,
            borderRadius: 8,
            background: "#e71924",
            color: "#fff",
            fontSize: 10,
            lineHeight: "16px"
          }}
        >
          3
        </span>
      </button>
      <span style={{ marginLeft: 8, fontSize: 11, color: "#6e6e6e", maxWidth: 320 }}>{hint}</span>
    </div>
  );
};
