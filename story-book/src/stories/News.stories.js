import { html } from "lit-html";

import addons from "@storybook/addons";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";
import ".././../node_modules/@momentum-ui/core/css/momentum-ui.min.css";
import ".././../node_modules/@momentum-ui/icons/css/momentum-ui-icons.css";
import "@storybook/web-components";
import { getDefaultConf } from "./default.config";

export default getDefaultConf(
  "News",
  {
    comp: "agentx-wc-iframe",
    attributes: { src: "https://www.foxnews.com/" },
    wrapper: { title: "Fox News", maximizeAreaName: "app-maximize-area" },
  },
  "news"
);
const channel = addons.getChannel();

const Template = (p) => {
  return html`
    <iframe
      style="width: 100%; height:100%"
      src="https://www.foxnews.com/"
    ></iframe>
  `;
};

export const News = Template.bind({});
