import React from "react";
import ReactDOM from "react-dom";
import r2wc from "react-to-webcomponent";
import App from "./components/App";

console.log("[DEBUG] wxcc-sdk-explorer widget loaded");
console.log("[DEBUG] App component available:", typeof App);

const WebComponentWrapper = r2wc(App, React, ReactDOM as any, {
  props: {
    agentId: "string",
    darkTheme: "boolean",
  },
  shadow: "open",
});

console.log("[DEBUG] About to register wxcc-sdk-explorer web component");

customElements.define("wxcc-sdk-explorer", WebComponentWrapper);

console.log("[DEBUG] wxcc-sdk-explorer registered:", customElements.get("wxcc-sdk-explorer"));

export default WebComponentWrapper;
