/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/// <reference types="googlemaps" />
import { LitElement, PropertyValues } from "lit-element";
import { Loader } from "@googlemaps/js-api-loader";
export default class MyCustomComponent extends LitElement {
    latitude: number;
    longitude: number;
    search: string;
    searchEnabled: boolean;
    apiKey: string;
    zoom: number;
    lumos: boolean;
    darkTheme: boolean;
    map?: google.maps.Map;
    markers?: google.maps.places.PlaceResult[];
    mapDiv?: HTMLElement;
    searchInput?: HTMLInputElement;
    loader: Loader;
    closestElement(selector: string, base?: this): HTMLElement | null;
    refreshTokenData: () => void;
    connectedCallback(): void;
    firstUpdated(changedProperties: PropertyValues): void;
    update(changedProperties: PropertyValues): void;
    updatePins: (places: google.maps.places.PlaceResult[]) => void;
    initMap: () => void;
    updateAttributeSearch: () => Promise<void>;
    mountSearchInput: () => void;
    generateSearchInput: () => import("lit-element").TemplateResult;
    static get styles(): import("lit-element").CSSResult;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=App.d.ts.map