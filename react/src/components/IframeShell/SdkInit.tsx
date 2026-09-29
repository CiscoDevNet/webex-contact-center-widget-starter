import React, { useEffect, useState } from "react";
import { Desktop } from "@wxcc-desktop/sdk";
import { antiPatternComment } from "./desktop";

export const SdkInit: React.FC = () => {
  const [kind, setKind] = useState<"ok" | "warn" | "err">("warn");
  const [message, setMessage] = useState("Initializing…");
  const [detail, setDetail] = useState(antiPatternComment);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      if (!Desktop?.config || typeof Desktop.config.init !== "function") {
        if (!cancelled) {
          setKind("warn");
          setMessage(
            "Desktop SDK is not on this page. On Agent Desktop, call Desktop.config.init() without querying agentx-app."
          );
        }
        return;
      }
      try {
        await Desktop.config.init({ widgetName: "sdk-init-widget", widgetProvider: "widget-starter" });
        const data = Desktop.agentStateInfo?.latestData || {};
        if (!cancelled) {
          setKind("ok");
          setMessage("SDK initialized without touching host DOM.");
          setDetail(
            [
              "Desktop.config.init() resolved.",
              "",
              `agentId: ${(data as { agentId?: string }).agentId || "(not available)"}`,
              "",
              antiPatternComment
            ].join("\n")
          );
        }
      } catch (err) {
        if (!cancelled) {
          setKind("err");
          setMessage("Desktop.config.init() failed. Fail gracefully — do not retry by querying the host.");
          setDetail(err instanceof Error ? err.message : String(err));
        }
      }
    };
    void run();
    return () => {
      cancelled = true;
    };
  }, []);

  const color = kind === "ok" ? "#1e8e3e" : kind === "err" ? "#e71924" : "#b26a00";

  return (
    <div style={{ padding: 12, border: "1px solid #d2d2d2", borderRadius: 8, background: "#fff" }}>
      <h3 style={{ margin: "0 0 8px", fontSize: 14 }}>SDK init (no host DOM)</h3>
      <p style={{ color }}>{message}</p>
      <pre style={{ whiteSpace: "pre-wrap", fontSize: 11, background: "#f6f6f6", padding: 8, borderRadius: 4 }}>
        {detail}
      </pre>
    </div>
  );
};
