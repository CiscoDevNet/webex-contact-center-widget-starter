import { css, customElement, html, LitElement } from "lit-element";
import "./HeaderOverflow";
import "./HeaderFit";
import "./HeaderClip";
import "./HeaderPopover";
import "./SdkInit";
import "./SiblingBusPublisher";
import "./SiblingBusConsumer";

@customElement("iframe-shell-demo")
export class IframeShellDemo extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
      h2 {
        margin: 0 0 8px;
        font-size: 18px;
      }
      p,
      li {
        font-size: 13px;
        line-height: 1.45;
      }
      section {
        margin: 16px 0;
        padding: 12px;
        border: 1px dashed #c9c9c9;
        border-radius: 8px;
      }
      code {
        font-size: 12px;
      }
    `;
  }

  render() {
    return html`
      <h2>Iframe shell (Lit Element)</h2>
      <p>
        Lit sketches of the Desktop teaching widgets. Source of record is
        <code>Examples/Widgets/iframe-shell/src/</code>. Paste
        <code>Examples/Layouts/Iframe_Shell_Partner_Fixes.json</code> into Desktop Layout to see
        header clipping and sibling relay.
      </p>
      <ul>
        <li><strong>Header fit:</strong> after Desktop shrink-wraps the iframe, set <code>width: max-content</code> or a px width. <code>width: 100%</code> loops iframe ↔ widget. Overlays use <code>Desktop.popover</code>.</li>
        <li><strong>SDK init:</strong> never gate on <code>document.querySelector("agentx-app")</code>.</li>
        <li><strong>Sibling bus:</strong> <code>CustomEvent</code> stays in this window. Use <code>postMessage</code>.</li>
      </ul>

      <section>
        <h3>Header overflow vs fit (no popover)</h3>
        <p>After shrink-wrap, the wide row makes the iframe ~280px. The green pill uses <code>max-content</code>. Do not set <code>width: 100%</code> on <code>:host</code>.</p>
        <header-overflow-widget></header-overflow-widget>
        <header-fit-widget></header-fit-widget>
      </section>
      <section>
        <h3>Header clip — md-menu-overlay (broken)</h3>
        <p>On Desktop this overlay is cut off by the 64px header iframe. Here the menu can open fully.</p>
        <header-clip-widget></header-clip-widget>
      </section>
      <section>
        <h3>Header widget + Desktop.popover (fixed)</h3>
        <p>On Agent Desktop the host opens the panel outside the header iframe. Here you see the trigger-only path.</p>
        <header-popover-widget></header-popover-widget>
      </section>
      <section>
        <h3>Tier 4 — SDK init</h3>
        <sdk-init-widget></sdk-init-widget>
      </section>
      <section>
        <h3>Sibling CustomEvent → postMessage</h3>
        <sibling-bus-publisher></sibling-bus-publisher>
        <sibling-bus-consumer></sibling-bus-consumer>
      </section>
    `;
  }
}
