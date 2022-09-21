import addons from "@storybook/addons";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";
const channel = addons.getChannel();

export default (func, elmId) => {
  channel.on(DARK_MODE_EVENT_NAME, (e) => {
    const elm = document.querySelector(`#${elmId}`);
    if (elm) {
      elm.darkTheme = e;
    }
  });

  return func;
};
