/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * !! API KEY REQUIRED !!
 * This Map Widget requires a Google Maps API Key that is configured to provide the JavaScript and Places API
 * Get your key by visiting https://developers.google.com/maps/documentation/javascript/get-api-key
 * Once Activated, place your API Key in the application config as an attribute
 * e.g. "attributes": { "title": "Maps Widget", "api-key": "AI----3W--w5I-etc" },
 *
 */
import "@momentum-ui/web-components";
import { LitElement } from "lit-element";
import "../index";
export declare class Sandbox extends LitElement {
    darkTheme: boolean;
    containerWidth: string;
    containerHeight: string;
    static get styles(): import("lit-element").CSSResult;
    themeToggle(): import("lit-element").TemplateResult;
    toggleSetting(e: MouseEvent): void;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=sandbox.d.ts.map