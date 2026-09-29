import React, { useEffect, useState } from "react";
import { isPartnerEvent, WIDGET_EVENT_TYPE, WidgetEventPayload } from "./desktop";

function format(data: WidgetEventPayload) {
  return `#${data.count} via ${data.path} token=${data.token} @ ${new Date(
    data.timestamp
  ).toLocaleTimeString()}`;
}

export const SiblingBusPublisher: React.FC = () => {
  const [count, setCount] = useState(0);

  const nextPayload = (path: string): WidgetEventPayload => {
    const next = count + 1;
    setCount(next);
    return {
      type: WIDGET_EVENT_TYPE,
      event: "token-updated",
      path,
      count: next,
      timestamp: Date.now(),
      token: `demo-session-token-${next}`
    };
  };

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
      <span>Sibling bus (React):</span>
      <md-button
        onClick={() =>
          window.dispatchEvent(
            new CustomEvent(WIDGET_EVENT_TYPE, {
              bubbles: true,
              composed: true,
              detail: nextPayload("CustomEvent")
            })
          )
        }
      >
        Broken: CustomEvent
      </md-button>
      <md-button onClick={() => window.postMessage(nextPayload("window.postMessage"), "*")}>
        Fixed: postMessage
      </md-button>
      <span style={{ color: "#6e6e6e" }}>#{count}</span>
    </div>
  );
};

export const SiblingBusConsumer: React.FC = () => {
  const [customLines, setCustomLines] = useState<string[]>([]);
  const [relayLines, setRelayLines] = useState<string[]>([]);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (isPartnerEvent(event.data)) {
        setRelayLines(prev => [...prev, format(event.data)]);
      }
    };
    const onCustom = (event: Event) => {
      const data = (event as CustomEvent<WidgetEventPayload>).detail;
      if (isPartnerEvent(data)) {
        setCustomLines(prev => [...prev, format(data)]);
      }
    };
    window.addEventListener("message", onMessage);
    window.addEventListener(WIDGET_EVENT_TYPE, onCustom);
    return () => {
      window.removeEventListener("message", onMessage);
      window.removeEventListener(WIDGET_EVENT_TYPE, onCustom);
    };
  }, []);

  return (
    <div style={{ padding: 12, border: "1px solid #d2d2d2", borderRadius: 8, background: "#fff", minHeight: 160 }}>
      <h3>Sibling bus consumer (React)</h3>
      <p>
        CustomEvents do not cross iframe-shell slots. <code>postMessage</code> does.
      </p>
      <div style={{ fontWeight: 600, marginTop: 10 }}>CustomEvent (broken in iframe shell)</div>
      <div style={{ color: customLines.length ? undefined : "#8a8a8a" }}>
        {customLines.length
          ? customLines.map(line => <div key={line}>{line}</div>)
          : "Nothing yet — CustomEvents do not cross iframes."}
      </div>
      <div style={{ fontWeight: 600, marginTop: 10 }}>postMessage (fixed — host relays this)</div>
      <div style={{ color: relayLines.length ? "#1e8e3e" : "#8a8a8a" }}>
        {relayLines.length
          ? relayLines.map(line => <div key={line}>{line}</div>)
          : "Waiting for WXCC_WIDGET_EVENT…"}
      </div>
    </div>
  );
};
