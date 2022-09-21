import { html } from "lit-html";
import addons from "@storybook/addons";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";
import ".././../node_modules/@momentum-ui/core/css/momentum-ui.min.css";
import ".././../node_modules/@momentum-ui/icons/css/momentum-ui-icons.css";

import "@storybook/web-components";

import themeChangeListener from "../ThemeChangeListener";
import { getDefaultConf } from "./default.config";

export default getDefaultConf(
  "Notes",
  {
    comp: "notes-widget",
    script:
      "https://ciscodevnet.github.io/webex-contact-center-widget-starter/widgets/notes-widget.js",
    attributes: {
      "agent-id": "46340-65479",
    },
  },
  "notes-widget"
);

const NotesTemplate = (p) => {
  return html`<notes-widget agent-id="${p["agent-id"]}"></notes-widget>`;
};

const HeaderNotesTemplate = themeChangeListener((p) => {
  return html`<notes-header-widget
    agent-id="${p["agent-id"]}"
  ></notes-header-widget>`;
}, "notes-header-widget");

export const Notes = NotesTemplate.bind({});
export const HeaderNotes = HeaderNotesTemplate.bind({});

Notes.args = {
  "agent-id": "46340-65479",
};

HeaderNotes.args = {
  "agent-id": "46340-65479",
};

HeaderNotes.parameters = {
  docs: {
    description: {
      story: `**Layout Config** {
          comp: "notes-header-widget",
          script:
            "https://ciscodevnet.github.io/webex-contact-center-widget-starter/widgets/notes-widget.js",
          attributes: {
            "agent-id": "46340-65479",
          },
        }`,
    },
  },
};
