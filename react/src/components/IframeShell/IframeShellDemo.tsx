import React from "react";
import { HeaderOverflow } from "./HeaderOverflow";
import { HeaderFit } from "./HeaderFit";
import { HeaderClip } from "./HeaderClip";
import { HeaderPopover } from "./HeaderPopover";
import { SdkInit } from "./SdkInit";
import { SiblingBusConsumer, SiblingBusPublisher } from "./SiblingBus";

const section: React.CSSProperties = {
  margin: "16px 0",
  padding: 12,
  border: "1px dashed #c9c9c9",
  borderRadius: 8
};

export const IframeShellDemo: React.FC = () => {
  return (
    <div style={{ padding: 16, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <h2 style={{ margin: "0 0 8px", fontSize: 18 }}>Iframe shell (React)</h2>
      <p>
        React sketches of the Desktop teaching widgets. Source of record is{" "}
        <code>Examples/Widgets/iframe-shell/src/</code>. Paste{" "}
        <code>Examples/Layouts/Iframe_Shell_Partner_Fixes.json</code> into Desktop Layout to see header
        clipping and sibling relay.
      </p>
      <ul style={{ fontSize: 13, lineHeight: 1.45 }}>
        <li>
          <strong>Header fit:</strong> after Desktop shrink-wraps the iframe, set{" "}
          <code>width: max-content</code> or a px width. <code>width: 100%</code> loops iframe ↔ widget.
          Overlays use <code>Desktop.popover</code>.
        </li>
        <li>
          <strong>SDK init:</strong> never gate on <code>document.querySelector("agentx-app")</code>.
        </li>
        <li>
          <strong>Sibling bus:</strong> <code>CustomEvent</code> stays in this window. Use <code>postMessage</code>.
        </li>
      </ul>
      <section style={section}>
        <h3>Header overflow vs fit (no popover)</h3>
        <p style={{ fontSize: 13 }}>
          After shrink-wrap, the wide row makes the iframe ~280px. The green pill uses{" "}
          <code>max-content</code>. Do not set <code>width: 100%</code> on <code>:host</code>.
        </p>
        <HeaderOverflow />
        <HeaderFit />
      </section>
      <section style={section}>
        <h3>Header clip — md-menu-overlay (broken)</h3>
        <p style={{ fontSize: 13 }}>
          On Desktop this overlay is cut off by the 64px header iframe. Here the menu can open fully.
        </p>
        <HeaderClip />
      </section>
      <section style={section}>
        <h3>Header widget + Desktop.popover (fixed)</h3>
        <p style={{ fontSize: 13 }}>
          On Agent Desktop the host opens the panel outside the header iframe. Here you see the
          trigger-only path.
        </p>
        <HeaderPopover />
      </section>
      <section style={section}>
        <h3>Tier 4 — SDK init</h3>
        <SdkInit />
      </section>
      <section style={section}>
        <h3>Sibling CustomEvent → postMessage</h3>
        <SiblingBusPublisher />
        <SiblingBusConsumer />
      </section>
    </div>
  );
};
