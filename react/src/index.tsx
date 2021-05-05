import { DireflowComponent } from "direflow-component";
import App from "./direflow-component/App";

const direflowProperties = {
  componentTitle: "React Component",
  agentId: "agent1",
  darkTheme: false,
  sampleList: [
    "Create with React",
    "Build as Web Component",
    "Use it anywhere!",
  ],
};

export default DireflowComponent.create({
  component: App,
  configuration: {
    tagname: "my-react-widget",
    useShadow: true,
  },
  properties: direflowProperties,
  plugins: [
    {
      name: "font-loader",
      options: {
        google: {
          families: ["Advent Pro", "Noto Sans JP"],
        },
      },
    },
  ],
});
