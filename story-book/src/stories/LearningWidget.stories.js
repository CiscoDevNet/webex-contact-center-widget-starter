import { html } from "lit-html";
import ".././../node_modules/@momentum-ui/core/css/momentum-ui.min.css";
import ".././../node_modules/@momentum-ui/icons/css/momentum-ui-icons.css";
import { getDefaultConf } from "./default.config";
export default getDefaultConf(
  "Learning",
  {
    comp: "learning-sample",
    script:
      "https://ciscodevnet.github.io/webex-contact-center-widget-starter/widgets/learning-widget-sample.js",
  },
  "learning-sample"
);

const LearningTemplate = () => html`<learning-sample></learning-sample>`;

export const Learning = LearningTemplate.bind({});
