/**
 * Broken header overlay — md-menu-overlay clips in a ~64px header iframe.
 * Compare HeaderPopover.tsx, which uses Desktop.popover.
 */
import React from "react";

export const HeaderClip: React.FC = () => {
  return (
    <md-menu-overlay placement="bottom" size="large">
      <button
        slot="menu-trigger"
        type="button"
        aria-label="Open clipped header panel"
        style={{
          position: "relative",
          height: 36,
          padding: "0 10px",
          border: "1px solid #e71924",
          borderRadius: 18,
          background: "#fff",
          color: "#e71924",
          cursor: "pointer",
          fontSize: 12
        }}
      >
        Clip
        <span
          style={{
            position: "absolute",
            top: -4,
            right: -4,
            minWidth: 16,
            height: 16,
            padding: "0 4px",
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
      <div style={{ width: 280, padding: "4px 0" }}>
        <h3>This panel clips in the header iframe</h3>
        <p>
          <code>md-menu-overlay</code> stays inside the ~64px header iframe. Use{" "}
          <code>Desktop.popover.open()</code> instead — see header-popover-widget.
        </p>
        <ul>
          <li>
            Do not use in-iframe overlays in <code>advancedHeader</code>.
          </li>
          <li>Line two — still inside the overlay.</li>
          <li>Line three — this height is what gets clipped on Desktop.</li>
        </ul>
      </div>
    </md-menu-overlay>
  );
};
