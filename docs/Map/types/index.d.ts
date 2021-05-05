/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { LitElement } from "lit-element";
import "./components/App";
export default class MyCustomComponent extends LitElement {
    /**
     * Configure your AgentX Environment with the default values needed.
     * Latitude / Longitude: where you want the map to be centered by default
     * Search-Enabled: what search term the map should load with
     * Search: toggle search input field on/off
     * Zoom: set default zoom level of map
     * !! API KEY REQUIRED !!
     * This Map Widget requires a Google Maps API Key that is configured to provide the JavaScript and Places API
     * Get your key by visiting https://developers.google.com/maps/documentation/javascript/get-api-key
     * Once Activated, place your API Key in the application config as an attribute
     * e.g. "attributes": { "title": "Maps Widget", "api-key": "AI----3W--w5I-etc" },
     */
    latitude: number;
    longitude: number;
    search: string;
    searchEnabled: boolean;
    apiKey: string;
    zoom: number;
    private contacts;
    private readonly logger;
    static get styles(): import("lit-element").CSSResult;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=index.d.ts.map