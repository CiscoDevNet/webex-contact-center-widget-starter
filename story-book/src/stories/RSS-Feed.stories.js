import { html } from "lit-html";
import ".././../node_modules/@momentum-ui/core/css/momentum-ui.min.css";
import ".././../node_modules/@momentum-ui/icons/css/momentum-ui-icons.css";
import themeChangeListener from "../ThemeChangeListener";
import { getDefaultConf } from "./default.config";

export default getDefaultConf(
  "RSS Feed",
  {
    comp: "rss-feed-widget",
    attributes: {
      "rss-feed": "https://w1.weather.gov/xml/current_obs/PHNL.rss",
    },
    script:
      "https://ciscodevnet.github.io/webex-contact-center-widget-starter/widgets/rss-feed-widget.js",
  },
  "rss-feed-widget"
);

const RSSFeedTemplate = themeChangeListener((p) => {
  return html`<rss-feed-widget
    rss-feed="${p["rss-feed"]}"
    update-delay="${p["update-delay"]}"
  ></rss-feed-widget>`;
}, "rss-feed-widget");

export const RSSFeed = RSSFeedTemplate.bind({});

RSSFeed.args = {
  "rss-feed": "https://www.who.int/feeds/entity/csr/don/en/rss.xml",
  "update-delay": "5000",
};
