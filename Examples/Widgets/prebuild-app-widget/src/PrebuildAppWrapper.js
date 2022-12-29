const template = document.createElement("template");
template.innerHTML = `
<style>
    #prebuild-app {
        width: 100%; height: 100%; display:flex; border:0
    }
</style>
<iframe id="prebuild-app" src="../prebuild-app.html" />`;

class PrebuildAppWrapper extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.iframe = this.shadowRoot.getElementById("prebuild-app").contentWindow;
    this.data = {};
  }

  get selectedTask() {
    console.log("get selectedTask", this.hasAttribute("selectedTask"));
    return this.hasAttribute("selectedTask");
  }

  set selectedTask(val) {
    console.log("set selectedTask", val);
    if (val) {
      this.setAttribute("selectedtask", JSON.stringify(val));
    }
  }

  static get observedAttributes() {
    return ["agentstate", "selectedtask"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("attributeChangedCallback attr", name, oldValue, newValue);
    if (name === "selectedtask") {
      this.data = {
        ...this.data,
        [name]: JSON.parse(newValue),
      };
    } else {
      this.data = {
        ...this.data,
        [name]: newValue,
      };
    }
    this.publish();
  }

  publish() {
    this.iframe.postMessage({ payload: this.data }, "*");
  }
}

customElements.define("prebuild-app-wrapper", PrebuildAppWrapper);

export default PrebuildAppWrapper;
