/**
 * Too wide for the header iframe. Shows a scrollbar on Desktop. No popover.
 * Compare HeaderFit.tsx.
 */
import React from "react";

export const HeaderOverflow: React.FC = () => {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        width: 280,
        height: 40,
        fontSize: 12,
        color: "#e71924",
        whiteSpace: "nowrap"
      }}
    >
      <span>Too wide for the header iframe</span>
      <button type="button">One</button>
      <button type="button">Two</button>
      <button type="button">Three</button>
    </div>
  );
};
