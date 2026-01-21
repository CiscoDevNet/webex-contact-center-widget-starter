import React from "react";
import ReactDOM from "react-dom";
import r2wc from "react-to-webcomponent";
import App from "./components/App";

console.log("[DEBUG] react-widget-starter.js loaded");
console.log("[DEBUG] App component available:", typeof App);

const WebComponentWrapper = r2wc(App, React, ReactDOM, {
  props: {
    agentId: "string",
    darkTheme: "boolean",
  },
  shadow: "open",
});

console.log("[DEBUG] About to register my-react-widget web component");

customElements.define("my-react-widget", WebComponentWrapper);

console.log("[DEBUG] my-react-widget registered:", customElements.get("my-react-widget"));

export default WebComponentWrapper;
