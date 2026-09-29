import { html } from "lit-html";
import ".././../node_modules/@momentum-ui/core/css/momentum-ui.min.css";
import ".././../node_modules/@momentum-ui/icons/css/momentum-ui-icons.css";
import { getDefaultConf } from "./default.config";

export default getDefaultConf(
  "Iframe Shell",
  {
    comp: "header-popover-widget",
    script:
      "https://ciscodevnet.github.io/webex-contact-center-widget-starter/widgets/header-popover-widget.js"
  },
  "iframe-shell-widgets"
);

const pagesUrl =
  "https://ciscodevnet.github.io/webex-contact-center-widget-starter/widgets";

export const HeaderOverflow = () => html` <header-overflow-widget></header-overflow-widget> `;

HeaderOverflow.parameters = {
  docs: {
    description: {
      story: `**Wide header chip** — after Desktop shrink-wraps the iframe, this ~280px row makes the iframe ~280px. Source: Examples/Widgets/iframe-shell/src/header-overflow-widget.ts`
    }
  }
};

export const HeaderFit = () => html` <header-fit-widget></header-fit-widget> `;

HeaderFit.parameters = {
  docs: {
    description: {
      story: `**Header width** — after Desktop shrink-wraps the iframe, use max-content or px. width: 100% on :host loops iframe ↔ widget. Source: Examples/Widgets/iframe-shell/src/header-fit-widget.ts`
    }
  }
};

export const HeaderClip = () => html` <header-clip-widget></header-clip-widget> `;

HeaderClip.parameters = {
  docs: {
    description: {
      story: `**Broken header overlay** — md-menu-overlay clips in a 64px header iframe. Paste Examples/Layouts/Iframe_Shell_Partner_Fixes.json into Desktop Layout. Source: Examples/Widgets/iframe-shell/src/header-clip-widget.ts. Layout: { "comp": "header-clip-widget", "script": "${pagesUrl}/header-clip-widget.js" }`
    }
  }
};

export const HeaderPopover = () => html`
  <header-popover-widget></header-popover-widget>
`;

HeaderPopover.parameters = {
  docs: {
    description: {
      story: `**Fixed header overlay** — Desktop.popover.open() so the host draws the panel outside the iframe. Source: Examples/Widgets/iframe-shell/src/header-popover-widget.ts. Layout: { "comp": "header-popover-widget", "script": "${pagesUrl}/header-popover-widget.js" }`
    }
  }
};

export const SdkInit = () => html` <sdk-init-widget></sdk-init-widget> `;

SdkInit.parameters = {
  docs: {
    description: {
      story: `**HOST_DOM_QUERY (Tier 4)** — do not querySelector("agentx-app"). Call Desktop.config.init() and read agent data from the SDK. Layout: { "comp": "sdk-init-widget", "script": "${pagesUrl}/sdk-init-widget.js" }`
    }
  }
};

export const SiblingBus = () => html`
  <div style="display:grid; gap:12px;">
    <sibling-bus-publisher></sibling-bus-publisher>
    <sibling-bus-consumer></sibling-bus-consumer>
  </div>
`;

SiblingBus.parameters = {
  docs: {
    description: {
      story: `**Sibling CustomEvent bus** — window.dispatchEvent does not cross iframe-shell slots. Use window.postMessage({ type: "WXCC_WIDGET_EVENT" }, "*"). Place the publisher in advancedHeader or headless and the consumer in navigation. See Examples/Layouts/Iframe_Shell_Partner_Fixes.json`
    }
  }
};
