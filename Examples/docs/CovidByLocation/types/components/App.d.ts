/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { LitElement, PropertyValues } from "lit-element";
import "./Graph";
import "./Table";
export default class MyCustomComponent extends LitElement {
    /**
     * Property: apiKey
     * Access API Key: Covid Act Now Website
     * https://apidocs.covidactnow.org/access
     */
    apiKey: string;
    selectedCountyState: string;
    allCounties?: Array<{
        fips: string;
        county: string;
        state: string;
    }>;
    countyOptions: Array<string>;
    selectedCounty: string;
    selectedStatePostal: string;
    selectedCountyFIPS: string;
    stateCountyData: Array<Object>;
    columnView: boolean;
    flexContainer: HTMLDivElement;
    static get styles(): import("lit-element").CSSResult;
    fetchAllCounties: () => Promise<any>;
    createOptions: () => void;
    generateCollections: (selectedCounty: string, selectedStatePostal: string) => void;
    handleStateSelection: (event: CustomEvent) => void;
    handleClear: () => void;
    parseCountyAndState: () => void;
    firstUpdated(changeProperties: PropertyValues): Promise<void>;
    updated(changeProperties: PropertyValues): Promise<void>;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=App.d.ts.map