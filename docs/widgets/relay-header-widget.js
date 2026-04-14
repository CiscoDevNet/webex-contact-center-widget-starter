/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./relay-header-widget.ts"
/*!********************************!*\
  !*** ./relay-header-widget.ts ***!
  \********************************/
() {

eval("{\n/**\n * Relay Header Widget — Cross-Widget Communication Test (Sender)\n *\n * A small widget rendered in the `advancedHeader` area that sends\n * postMessage events when buttons are clicked. The sibling\n * `iframe-test-widget` (in `navigation`) listens for these messages\n * and displays them.\n *\n * Both widgets are served from the same origin (127.0.0.1:9000),\n * so the host-side relay groups them as siblings and fans out messages.\n *\n * Tests two postMessage paths:\n *   1. window.postMessage(data)  — intercepted by shim-message-relay\n *   2. parent.postMessage(data)  — arrives directly at host window\n */\nconst WIDGET_NAME = \"relay-header-widget\";\nclass RelayHeaderWidget extends HTMLElement {\n    constructor() {\n        super();\n        this.messageCount = 0;\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        const shadow = this.shadowRoot;\n        shadow.innerHTML = `\n      <style>\n        :host {\n          display: flex;\n          align-items: center;\n          gap: 6px;\n          font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n          font-size: 12px;\n          color: #cdd6f4;\n        }\n        .label {\n          font-weight: 600;\n          color: #a6adc8;\n          margin-right: 4px;\n        }\n        button {\n          padding: 4px 10px;\n          border: 1px solid #585b70;\n          border-radius: 4px;\n          background: #45475a;\n          color: #cdd6f4;\n          font-size: 11px;\n          cursor: pointer;\n          transition: background 0.15s;\n          white-space: nowrap;\n        }\n        button:hover { background: #585b70; }\n        button.send-self { border-color: #89b4fa; color: #89b4fa; }\n        button.send-parent { border-color: #a6e3a1; color: #a6e3a1; }\n        button.send-targeted { border-color: #f9e2af; color: #f9e2af; }\n        .counter {\n          font-size: 11px;\n          color: #6c7086;\n          min-width: 30px;\n        }\n      </style>\n\n      <span class=\"label\">Relay Test:</span>\n      <button id=\"btn-send-self\" class=\"send-self\">window.postMessage(*)</button>\n      <button id=\"btn-send-parent\" class=\"send-parent\">parent.postMessage(*)</button>\n      <button id=\"btn-send-targeted\" class=\"send-targeted\">postMessage(target)</button>\n      <span id=\"counter\" class=\"counter\">#0</span>\n    `;\n        const counterEl = shadow.getElementById(\"counter\");\n        shadow.getElementById(\"btn-send-self\").addEventListener(\"click\", () => {\n            this.messageCount++;\n            const data = {\n                type: \"RELAY_TEST\",\n                path: \"window.postMessage\",\n                count: this.messageCount,\n                timestamp: Date.now()\n            };\n            window.postMessage(data, \"*\");\n            counterEl.textContent = `#${this.messageCount}`;\n        });\n        shadow.getElementById(\"btn-send-parent\").addEventListener(\"click\", () => {\n            this.messageCount++;\n            const data = {\n                type: \"RELAY_TEST\",\n                path: \"parent.postMessage\",\n                count: this.messageCount,\n                timestamp: Date.now()\n            };\n            parent.postMessage(data, \"*\");\n            counterEl.textContent = `#${this.messageCount}`;\n        });\n        const HOST_ORIGIN = \"http://localhost:8000\";\n        shadow.getElementById(\"btn-send-targeted\").addEventListener(\"click\", () => {\n            this.messageCount++;\n            const data = {\n                type: \"RELAY_TEST\",\n                path: `window.postMessage(${HOST_ORIGIN})`,\n                count: this.messageCount,\n                timestamp: Date.now()\n            };\n            window.postMessage(data, HOST_ORIGIN);\n            counterEl.textContent = `#${this.messageCount}`;\n        });\n    }\n}\nif (!customElements.get(WIDGET_NAME)) {\n    customElements.define(WIDGET_NAME, RelayHeaderWidget);\n}\n\n\n//# sourceURL=webpack:///./relay-header-widget.ts?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./relay-header-widget.ts"]();
/******/ 	
/******/ })()
;