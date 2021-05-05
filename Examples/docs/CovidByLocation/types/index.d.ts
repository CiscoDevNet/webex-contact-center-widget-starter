/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { LitElement } from "lit-element";
import "./components/App";
/**
 * Please give your widget a unique name. We recommend using prefix to identify the author and help avoid naming conflict. e.g. "2ring-timer-widget"
 */
export default class CovidByLocation extends LitElement {
    selectedCountyState: string;
    /**
     * Property: apiKey
     * Access API Key: Covid Act Now Website
     * https://apidocs.covidactnow.org/access
     */
    apiKey: string;
    static get styles(): import("lit-element").CSSResult;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=index.d.ts.map