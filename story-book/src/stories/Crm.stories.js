import { html } from "lit-html";
import ".././../node_modules/@momentum-ui/core/css/momentum-ui.min.css";
import ".././../node_modules/@momentum-ui/icons/css/momentum-ui-icons.css";
import themeChangeListener from "../ThemeChangeListener";
import { getDefaultConf } from "./default.config";
import "@storybook/web-components";

export default getDefaultConf(
  "CRM",
  {
    comp: "crm-widget",
    attributes: { "phone-number": "+1 (800) 471-2389" },
    script:
      "https://ciscodevnet.github.io/webex-contact-center-widget-starter/widgets/crm.js",
  },
  "crm-widget"
);

const Template = (p) => {
  return html`<crm-widget phone-number="${p["phone-number"]}"></crm-widget>`;
};

export const CRM = Template.bind({});

CRM.args = {
  "phone-number": "+1 (800) 471-2389",
};
