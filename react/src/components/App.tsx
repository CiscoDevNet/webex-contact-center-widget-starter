import React, { FC, useEffect, useState } from "react";
import "@momentum-ui/web-components";
import momentumCss from "@momentum-ui/core/css/momentum-ui.min.css";
import momentumIconsCss from "@momentum-ui/icons/css/momentum-ui-icons.min.css";
import sidebarCss from "./ApiExplorer/SidebarApiExplorer.css";
import { useShadowStyles } from "./useShadowStyles";
import { Desktop } from "@wxcc-desktop/sdk";
import { SidebarApiExplorer } from "./ApiExplorer/SidebarApiExplorer";

interface IProps {
  agentId: string;
  darkTheme: boolean;
}

const EnhancedApp: FC<IProps> = (props) => {
  const [agentId, setAgentId] = useState(props.agentId || "");
  const containerRef = useShadowStyles([momentumCss, momentumIconsCss, sidebarCss]);

  useEffect(() => {
    init();
    subscribeToEvents();
    setAgentId(props.agentId);

    return () => {
      Desktop.agentContact.removeAllEventListeners();
      Desktop.dialer.removeAllEventListeners();
      Desktop.screenpop.removeAllEventListeners();
      Desktop.monitoring.removeAllEventListeners();
    };
  }, []);

  useEffect(() => {
    setAgentId(props.agentId);
  }, [props.agentId]);

  async function init() {
    try {
      await Desktop.config.init({
        widgetName: "SDK API Explorer",
        widgetProvider: "Cisco"
      });
      console.log("[Enhanced Widget] Desktop SDK initialized successfully");
    } catch (error) {
      console.error("[Enhanced Widget] Failed to initialize Desktop SDK:", error);
    }
  }

  const subscribeToEvents = () => {
    // Agent Contact Events
    Desktop.agentContact.addEventListener("eAgentContact", (msg) =>
      console.log("[Event] eAgentContact:", msg)
    );
    Desktop.agentContact.addEventListener("eAgentContactAssigned", (msg) =>
      console.log("[Event] eAgentContactAssigned:", msg)
    );
    Desktop.agentContact.addEventListener("eAgentContactEnded", (msg) =>
      console.log("[Event] eAgentContactEnded:", msg)
    );
    Desktop.agentContact.addEventListener("eAgentContactWrappedUp", (msg) =>
      console.log("[Event] eAgentContactWrappedUp:", msg)
    );
    Desktop.agentContact.addEventListener("eAgentOfferContact", (msg) =>
      console.log("[Event] eAgentOfferContact:", msg)
    );
    Desktop.agentContact.addEventListener("eAgentOfferContactRona", (msg) =>
      console.log("[Event] eAgentOfferContactRona:", msg)
    );
    Desktop.agentContact.addEventListener("eAgentWrapup", (msg) =>
      console.log("[Event] eAgentWrapup:", msg)
    );
    Desktop.agentContact.addEventListener("eAgentContactHeld", (msg) =>
      console.log("[Event] eAgentContactHeld:", msg)
    );
    Desktop.agentContact.addEventListener("eAgentContactUnHeld", (msg) =>
      console.log("[Event] eAgentContactUnHeld:", msg)
    );

    // Monitoring Events
    Desktop.monitoring.addEventListener("eMonitoringOffered", (msg) =>
      console.log("[Event] eMonitoringOffered:", msg)
    );
    Desktop.monitoring.addEventListener("eMonitoringStarted", (msg) =>
      console.log("[Event] eMonitoringStarted:", msg)
    );
    Desktop.monitoring.addEventListener("eMonitoringEnded", (msg) =>
      console.log("[Event] eMonitoringEnded:", msg)
    );

    // Dialer Events
    Desktop.dialer.addEventListener("eOutdialFailed", (msg) =>
      console.log("[Event] eOutdialFailed:", msg)
    );

    // Screenpop Events
    Desktop.screenpop.addEventListener("eScreenPop", (msg) =>
      console.log("[Event] eScreenPop:", msg)
    );

    console.log("[Enhanced Widget] All event listeners subscribed");
  };

  return (
    <div ref={containerRef}>
      <SidebarApiExplorer />
    </div>
  );
};

export default EnhancedApp;
