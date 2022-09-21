import { html } from "lit-html";
import addons from "@storybook/addons";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";
const channel = addons.getChannel();
const widgets = [];
channel.on(DARK_MODE_EVENT_NAME, (e) => {
  const elms = document.querySelectorAll(`md-theme`);
  if (elms) {
    elms.forEach((elm) => {
      elm.darkTheme = e;
    });
  }
});
export const getDefaultConf = (title, layoutConf, elmId) => {
  return {
    title: `Example/${title}`,
    decorators: [
      (story) => html`<md-theme id="${elmId}" lumos>${story()}</md-theme>`,
    ],
    parameters: {
      docs: {
        description: {
          component:
            "**Layout Config** \t" + "`" + JSON.stringify(layoutConf) + "`",
        },
      },
    },
  };
};
