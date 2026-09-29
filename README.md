# Webex Contact Center Widget Starter
This repository is designed to speed up the initial set up for Agent and or Supervisor Desktop widget development. Feel free to treat this as a boilerplate project, that can be forked as a base for your Webex Contact Center widget or simply as a reference material. 

We aim at covering various scenarios, for when your development team is leaning towards 
* [**React**](https://github.com/CiscoDevNet/webex-contact-center-widget-starter/tree/master/react) [![Generic badge](https://img.shields.io/badge/Completion-95-green)](https://shields.io/), or 
* [**Angular**](https://github.com/CiscoDevNet/webex-contact-center-widget-starter/tree/master/angular) [![Generic badge](https://img.shields.io/badge/Completion-20-red)](https://shields.io/), or is willing to explore the pure 
* [**Web Component**](https://github.com/CiscoDevNet/webex-contact-center-widget-starter/tree/master/lit-element) [![Generic badge](https://img.shields.io/badge/Completion-95-green)](https://shields.io/) approach (with some help from *Lit Element* and the *Polymer* project). 

Dive into the respective folder based on your tech stack preference to get started.

## Iframe shell (external widgets)

When Desktop loads a third-party custom widget from an untrusted absolute `script` URL, it wraps that custom element in a sandboxed iframe. Source for the teaching widgets lives in this repo. **See them on Agent Desktop** by pasting [`Examples/Layouts/Iframe_Shell_Partner_Fixes.json`](Examples/Layouts/Iframe_Shell_Partner_Fixes.json) into Desktop Layout.

| Tag | What to look at on Desktop |
| --- | --- |
| `header-overflow-widget` | Wide row — iframe grows with the widget after shrink-wrap |
| `header-fit-widget` | Intrinsic width (`max-content` / px). Do not use `width: 100%` |
| `header-clip-widget` | `md-menu-overlay` in the header — the panel clips |
| `header-popover-widget` | Same idea via `Desktop.popover` — panel is not clipped |
| `sibling-bus-publisher` / `sibling-bus-consumer` | CustomEvent fails across slots; `postMessage` works |

TypeScript: [`Examples/Widgets/iframe-shell/src/`](Examples/Widgets/iframe-shell/src/). This is not `agentx-wc-iframe` ([`Iframe_Widget_Allowedparams.md`](Iframe_Widget_Allowedparams.md)) and not `prebuild-app-widget`.

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