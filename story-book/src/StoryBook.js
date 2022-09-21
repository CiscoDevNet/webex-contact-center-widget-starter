import { LitElement, html, css } from "lit";

import "./stories/assets/css/momentum-ui.min.css";
import "./stories/assets/css/momentum-ui-icons.min.css";
const logo = new URL("../assets/open-wc-logo.svg", import.meta.url).href;

export class StoryBook extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--story-book-background-color);
      }

      main {
        flex-grow: 1;
      }

      .logo {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
    `;
  }

  constructor() {
    super();
    this.title = "Wxcc Desktop Widget Starter Kit";
  }

  render() {
    return html`
      <main>
        <div class="logo">ssss</div>
        <h1>${this.title}</h1>
      </main>

      <p class="app-footer"></p>
    `;
  }
}
