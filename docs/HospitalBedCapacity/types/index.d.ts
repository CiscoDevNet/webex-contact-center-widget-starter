/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { LitElement } from "lit-element";
import "./components/HospitalWidget";
/**
 * Please give your widget a unique name. We recommend using prefix to identify the author and help avoid naming conflict. e.g. "2ring-timer-widget"
 */
export default class HospitalBedCapacity extends LitElement {
    /**
     * Property googleApiKey
     * Access your API key from Google Maps Platform
     * https://cloud.google.com/maps-platform
     */
    googleApiKey: string;
    /**
    * Property: covidApiKey
    * Access API Key: Covid Act Now Website
    * https://apidocs.covidactnow.org/access
    */
    covidApiKey: string;
    latitude: number;
    longitude: number;
    private contacts;
    static get styles(): import("lit-element").CSSResult;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=index.d.ts.map