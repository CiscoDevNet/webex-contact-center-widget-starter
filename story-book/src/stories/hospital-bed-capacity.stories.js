import { html } from "lit-html";
import ".././../node_modules/@momentum-ui/core/css/momentum-ui.min.css";
import ".././../node_modules/@momentum-ui/icons/css/momentum-ui-icons.css";
import { getDefaultConf } from "./default.config";

export default getDefaultConf(
  "Hospital Bed Capacity",
  {
    comp: "hospital-bed-capacity",
    attributes: {
      "google-api-key": "googleApiKey",
      "covid-api-key": "covidApiKey",
      latitude: "88.363892",
      longitude: "-74.005974",
    },
    script:
      "https://ciscodevnet.github.io/webex-contact-center-widget-starter/widgets/hospital-bed-capacity.js",
  },
  "hospital-bed-capacity"
);

const HospitalBedCapacityTemplate = (p) =>
  html`<hospital-bed-capacity
    google-api-key="${p["google-api-key"]}"
    covid-api-key="${p["covid-api-key"]}"
    latitude="${p.latitude}"
    longitude="${p.longitude}"
  ></hospital-bed-capacity>`;

export const HospitalBedCapacity = HospitalBedCapacityTemplate.bind({});

HospitalBedCapacity.args = {
  latitude: "88.363892",
  longitude: "-74.005974",
  "google-api-key": "googleApiKey",
  "covid-api-key": "1318b408f01c4aa3b5f79dedc6c90848",
};
