# Iframe shell — partner widget examples

When Agent Desktop loads a third-party custom widget (absolute `script` URL on an untrusted host), it wraps that custom element in a sandboxed iframe. Momentum `md-*` and the Desktop JS SDK still work. Cisco cannot shim header overflow or `window` CustomEvent buses — those are the patterns these widgets teach.

This repo holds the **source**. Agent Desktop is the **runtime**.

1. Copy [`../../Layouts/Iframe_Shell_Partner_Fixes.json`](../../Layouts/Iframe_Shell_Partner_Fixes.json) into Desktop Layout.
2. Open Agent Desktop and use the header / navigation widgets.
3. Read the TypeScript next to each tag in [`src/`](src/).

This is not `agentx-wc-iframe` (page embed) and not `prebuild-app-widget` (you wrap your own iframe).

## Widgets

| Tag | Desktop slot | What it teaches | Source |
| --- | --- | --- | --- |
| `header-overflow-widget` | `advancedHeader` | Wide row — after shrink-wrap the iframe grows with the widget | [`src/header-overflow-widget.ts`](src/header-overflow-widget.ts) |
| `header-fit-widget` | `advancedHeader` | Intrinsic width (`max-content` / px). Do not use `width: 100%` | [`src/header-fit-widget.ts`](src/header-fit-widget.ts) |
| `header-clip-widget` | `advancedHeader` | **Broken overlay:** `md-menu-overlay` clips | [`src/header-clip-widget.ts`](src/header-clip-widget.ts) |
| `header-popover-widget` | `advancedHeader` | **Fixed overlay:** `Desktop.popover.open({ comp, script, trigger.rect, panel })` | [`src/header-popover-widget.ts`](src/header-popover-widget.ts) |
| `sibling-bus-publisher` | `advancedHeader` | **Broken:** `CustomEvent`. **Fixed:** `postMessage` | [`src/sibling-bus-publisher.ts`](src/sibling-bus-publisher.ts) |
| `sibling-bus-consumer` | `navigation` | Listens for `WXCC_WIDGET_EVENT` on `message` | [`src/sibling-bus-consumer.ts`](src/sibling-bus-consumer.ts) |
| `sdk-init-widget` | `navigation` | Do not `querySelector("agentx-app")`. Call `Desktop.config.init()` | [`src/sdk-init-widget.ts`](src/sdk-init-widget.ts) |

Published bundles: `widgets/*.js` on GitHub Pages. After editing `src/`, run `yarn` / `npx lerna run dev:build` from `Examples/`.

The same patterns are also sketched in the starters ([`lit-element/src/components/IframeShell/`](../../../lit-element/src/components/IframeShell/), [`react/src/components/IframeShell/`](../../../react/src/components/IframeShell/)). Those sandboxes are in-page — clipping and sibling relay only show on Desktop.

## Fit the header iframe (no popover required)

After Desktop sizes the header iframe to the widget (no default ~130px box), **you** pick the width. The iframe becomes as wide as `:host`.

```css
:host {
  display: inline-flex; /* shrink-wraps the pill / icon */
  width: max-content;   /* or omit width; or a fixed px, e.g. 40px */
  height: 40px;         /* stay under the ~48–64px header strip */
  background: transparent;
}
```

| Use | Avoid |
| --- | --- |
| `inline-flex` + `width: max-content` (or no width, or a px width) | `:host { width: 100%; }` or `height: 100%` |
| `position: relative` for a badge **inside** the 40px control | `position: absolute` / `fixed` children that sit outside that row |
| Extra UI in `Desktop.popover` or navigation | A wide header row unless you intend to take that much header space |

**If you set `width: 100%` after the Desktop fix:** the iframe sizes to the widget, and the widget sizes to the iframe. That loop has no real width. The used size falls back to a default (the old ~130px class of box), or collapses / stretches, and a scrollbar comes back.

`position: relative` by itself does not create a scrollbar. Overflowing descendants do.

See [`src/header-fit-widget.ts`](src/header-fit-widget.ts).

## Header widget: Desktop.popover

```ts
import { Desktop } from "@wxcc-desktop/sdk";

const rect = trigger.getBoundingClientRect(); // iframe-local
await Desktop.popover.open({
  comp: "header-popover-widget",
  script: new URLSearchParams(window.location.search).get("bundle") || "",
  trigger: { rect: { x: rect.left, y: rect.top, width: rect.width, height: rect.height } },
  panel: { width: "360px", height: "320px", maxHeight: "500px", placement: "bottom-end" }
});

if (Desktop.popover.isActive()) {
  // Host remounted this same tag inside the popover — render the panel.
}
```

| Do | Do not |
| --- | --- |
| Compact trigger in the header iframe | `md-menu-overlay`, `md-popover`, MUI Popover, `position:absolute` panels |
| `Desktop.popover.open({ comp, script, trigger.rect, panel })` | Expect `overflow: visible` on the iframe to unclip |
| One bundle: `isActive()` → panel, else trigger | Convert `getBoundingClientRect()` to page coordinates |

## Sibling bus: postMessage

Each iframe has its own `window`. `window.dispatchEvent(new CustomEvent(...))` never reaches a sibling. Use `window.postMessage({ type: "WXCC_WIDGET_EVENT", ... }, "*")`. The Desktop host relays that between widget iframes. Ignore host shapes (`SHELL_READY`, Comlink).

## Rules in the shell

- Call `Desktop.config.init({ widgetName, widgetProvider })`.
- Keep using `md-*`. Do not re-bundle Momentum.
- Style yourself. Use `:host { background: transparent }` in the header.
- `getBoundingClientRect()` for `Desktop.popover` is iframe-local.
