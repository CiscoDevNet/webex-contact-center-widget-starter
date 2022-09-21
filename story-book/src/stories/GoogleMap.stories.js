import { html } from "lit-html";
import ".././../node_modules/@momentum-ui/core/css/momentum-ui.min.css";
import ".././../node_modules/@momentum-ui/icons/css/momentum-ui-icons.css";
import { getDefaultConf } from "./default.config";

export default getDefaultConf(
  "Google Map",
  {
    comp: "map-widget",
    attributes: {
      "api-key": "google api key here",
      "search-enabled": true,
    },
    script:
      "https://ciscodevnet.github.io/webex-contact-center-widget-starter/widgets/map-widget.js",
  },
  "map-widget"
);

const GoogleMapTemplate = (p) =>
  html`<map-widget
    api-key="${p["api-key"]}"
    search-enabled=${p["search-enabled"]}
  ></map-widget>`;

export const GoogleMap = GoogleMapTemplate.bind({});

GoogleMap.args = {
  "api-key": "add your google map key here",
  "search-enabled": true,
};
