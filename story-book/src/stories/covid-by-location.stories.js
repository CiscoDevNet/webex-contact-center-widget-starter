import { html } from "lit-html";
import ".././../node_modules/@momentum-ui/core/css/momentum-ui.min.css";
import ".././../node_modules/@momentum-ui/icons/css/momentum-ui-icons.css";
import { getDefaultConf } from "./default.config";

export default getDefaultConf(
  "Covid By Location",
  {
    comp: "covid-by-location",
    script:
      "https://ciscodevnet.github.io/webex-contact-center-widget-starter/widgets/covid-by-location.js",
    attributes: {
      "api-key": "YOUR_COVID_API_KEY",
      selectedCountyState: "New York County, NY",
    },
    wrapper: {
      title: "Covid by location",
      maximizeAreaName: "app-maximize-area",
    },
  },
  "covid-by-location"
);

const CovidByLocationTemplate = (p) =>
  html`<covid-by-location
    api-key="${p["api-key"]}"
    selectedCountyState="${p.selectedCountyState}"
  ></covid-by-location>`;

export const CovidByLocation = CovidByLocationTemplate.bind({});

CovidByLocation.args = {
  "api-key": "YOUR_COVID_API_KEY",
  selectedCountyState: "New York County, NY",
};
