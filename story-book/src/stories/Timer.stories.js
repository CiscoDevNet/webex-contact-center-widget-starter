import { html } from "lit-html";
import ".././../node_modules/@momentum-ui/core/css/momentum-ui.min.css";
import ".././../node_modules/@momentum-ui/icons/css/momentum-ui-icons.css";
import themeChangeListener from "../ThemeChangeListener";
import { getDefaultConf } from "./default.config";

export default getDefaultConf(
  "Timer",
  {
    comp: "timer-widget",
    attributes: {
      duration: "08:00:00",
    },
    script:
      "https://ciscodevnet.github.io/webex-contact-center-widget-starter/widgets/timer.js",
  },
  "timer-widget"
);

const TimerTemplate = (p) => {
  return html`<timer-widget
    duration="${p["duration"]}"
    style="${p["style"]}"
  ></timer-widget>`;
};

export const Timer = TimerTemplate.bind({});

Timer.args = {
  duration: "08:00:00",
  style: "margin-top: 10px",
};
