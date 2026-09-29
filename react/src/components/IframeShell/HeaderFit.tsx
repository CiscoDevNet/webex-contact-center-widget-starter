/**
 * After Desktop shrink-wraps the header iframe, set an intrinsic width
 * (inline-flex / max-content / px). width: 100% on :host loops iframe ↔ widget
 * and the used size falls back to a default box again.
 * Compare HeaderOverflow.tsx.
 */
import React from "react";

export const HeaderFit: React.FC = () => {
  return (
    <span
      title="Intrinsic width (max-content). Do not use width: 100% on :host."
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        height: 36,
        padding: "0 10px",
        border: "1px solid #1e8e3e",
        borderRadius: 18,
        background: "#fff",
        color: "#1e8e3e",
        fontSize: 12,
        whiteSpace: "nowrap"
      }}
    >
      <span aria-hidden="true">✓</span>
      Fit
    </span>
  );
};
