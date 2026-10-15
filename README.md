# Webex Contact Center Widget Starter
This repository is designed to speed up the initial set up for Agent and or Supervisor Desktop widget development. Feel free to treat this as a boilerplate project, that can be forked as a base for your Webex Contact Center widget or simply as a reference material. 

We aim at covering various scenarios, for when your development team is leaning towards 
* [**React**](https://github.com/CiscoDevNet/webex-contact-center-widget-starter/tree/master/react) [![Generic badge](https://img.shields.io/badge/Completion-95-green)](https://shields.io/), or 
* [**Angular**](https://github.com/CiscoDevNet/webex-contact-center-widget-starter/tree/master/angular) [![Generic badge](https://img.shields.io/badge/Completion-20-red)](https://shields.io/), or is willing to explore the pure 
* [**Web Component**](https://github.com/CiscoDevNet/webex-contact-center-widget-starter/tree/master/lit-element) [![Generic badge](https://img.shields.io/badge/Completion-95-green)](https://shields.io/) approach (with some help from *Lit Element* and the *Polymer* project). 

Dive into the respective folder based on your tech stack preference to get started.

## Iframe shell teaching widgets

Desktop is moving custom widgets into an **iframe shell**. When a layout loads a custom widget from an absolute `script` URL, Desktop runs that widget in its own sandboxed iframe, with its own DOM, `window`, and storage. Momentum `md-*` components and the Desktop JS SDK still work inside it. A few things that used to work in the shared Desktop page do not:

- Menus, popovers, and other floating UI are clipped at the iframe edge. This matters most in the header, which is only about 48–64px tall.
- A widget cannot query Desktop DOM (such as `agentx-app`) or another widget's DOM.
- A `CustomEvent` on `window` no longer reaches other widgets.
- Whole store objects (`$STORE`, `$STORE.agent`) and functions cannot be passed to a widget from the layout. Bind the specific `$STORE` paths the widget needs.

The teaching widgets below show each of these in a **broken** and a **fixed** form, so you can compare them in Desktop and copy the fix into your own widget.

| Widget | Layout slot | What it shows |
| --- | --- | --- |
| [`header-clip-widget`](Examples/Widgets/iframe-shell/src/header-clip-widget.ts) | `advancedHeader` | **Broken:** `md-menu-overlay` opened from the header is clipped by the iframe. |
| [`header-popover-widget`](Examples/Widgets/iframe-shell/src/header-popover-widget.ts) | `advancedHeader` | **Fixed:** the same panel opened with `Desktop.popover.open()`. Desktop renders it outside the iframe. One bundle renders the trigger or the panel, based on `Desktop.popover.isActive()`. |
| [`sibling-bus-publisher`](Examples/Widgets/iframe-shell/src/sibling-bus-publisher.ts) | `advancedHeader` | **CE** sends a `CustomEvent`, which stays in its own iframe (broken). **PM** sends `window.postMessage()`, which Desktop relays to the other widgets (fixed). |
| [`sibling-bus-consumer`](Examples/Widgets/iframe-shell/src/sibling-bus-consumer.ts) | `navigation` | Listens for both. Only the **PM** message arrives. |
| [`sdk-init-widget`](Examples/Widgets/iframe-shell/src/sdk-init-widget.ts) | `navigation` | Starts with `Desktop.config.init()` and reads agent data from the SDK instead of querying `agentx-app`. |
| [`header-fit-widget`](Examples/Widgets/iframe-shell/src/header-fit-widget.ts) | `advancedHeader` | Sizes a header widget from its content (`display: inline-flex; width: max-content`). Do not use `width: 100%` on a header widget. |
| [`header-overflow-widget`](Examples/Widgets/iframe-shell/src/header-overflow-widget.ts) | `advancedHeader` | A wide header row: the iframe grows with the widget and takes header space. |

`header-fit-widget` and `header-overflow-widget` assume Desktop sizes the header iframe to the widget's own width. Until that Desktop change is rolled out, header iframes start at a default width of about 130px.

Two existing examples were migrated the same way: [Notes](Examples/Widgets/Notes/) (`notes-header-widget` opens its panel with `Desktop.popover`) and [Timer](Examples/Widgets/Timer/) (compact header widget that announces `timer-expired` with `postMessage`).

### Try them in Desktop

1. Download [`Examples/Layouts/Iframe_Shell_Partner_Fixes.json`](Examples/Layouts/Iframe_Shell_Partner_Fixes.json). Its `script` URLs point at the published bundles on GitHub Pages.
2. Upload it to a test team in the Webex Contact Center Management Portal, and sign in to Desktop as an agent on that team.
3. In the header, open `header-clip-widget` (clipped) and then `header-popover-widget` (not clipped).
4. Open the **Iframe shell fixes** navigation page. Click **CE**, then **PM**, on `sibling-bus-publisher`. Only the **PM** message shows in `sibling-bus-consumer`.

Storybook and the Lit and React starters (`yarn start`) render these widgets in the page, not in the iframe shell, so they do not show clipping, `Desktop.popover`, or sibling relay. Use Desktop to see the real behavior.

### Use them to migrate your widget

1. Replace one `comp` / `script` pair in the sample layout with your own widget, using an absolute `script` URL so Desktop loads it in the iframe shell.
2. Open every menu, dropdown, and tooltip. If one opens from the header, move the panel to `Desktop.popover` (see `header-popover-widget`), or move the widget to a taller slot.
3. Replace any lookup of Desktop or sibling DOM with `Desktop.config.init()` and Desktop SDK calls (see `sdk-init-widget`).
4. Replace cross-widget `CustomEvent`s with `window.postMessage()` (see `sibling-bus-publisher`). Every widget on the page receives the message, so use a unique event `type` and check it in the receiver.
5. In the layout, bind specific values such as `$STORE.agent.agentId` instead of `$STORE` or `$STORE.agent`. See [Widget Data and Desktop Layout](https://developer.webex.com/webex-contact-center/docs/desktop-widget-data-layout) for the supported paths.

`Desktop.popover` requires [`@wxcc-desktop/sdk` 3.0.1](https://www.npmjs.com/package/@wxcc-desktop/sdk/v/3.0.1) or later. Both starters use it.

More detail on each pattern: [`Examples/Widgets/iframe-shell/README.md`](Examples/Widgets/iframe-shell/README.md). The iframe shell is different from the built-in `agentx-wc-iframe` page embed ([`Iframe_Widget_Allowedparams.md`](Iframe_Widget_Allowedparams.md)) and from [`prebuild-app-widget`](Examples/Widgets/prebuild-app-widget/), where you wrap your own app in an iframe.

## To integrate JS SDK 

To integrate contact center desktop sdk in the starter-kit-widget . Follow the below steps. 

  - `npm install @wxcc-desktop/sdk --save` <br>
   or <br>
   `yarn add @wxcc-desktop/sdk`

  - Once you have installed the package in your project, include it in the appropriate component file following the ES6 import pattern:<br>
    `import {Desktop} from "@wxcc-desktop/sdk"`

## Reference links for more details <br>
   - [Desktop JS SDK Official](https://developer.webex-cx.com/documentation/guides/desktop)
   - [Desktop JS API samples](https://github.com/CiscoDevNet/webex-contact-center-api-samples)
   - [Product Overview and Documentation](https://www.cisco.com/c/en/us/support/customer-collaboration/webex-contact-center/series.html)
   - [Other useful resources](https://ciscodevnet.github.io/webex-contact-center-widget-starter/?path=/story/introduction--page)