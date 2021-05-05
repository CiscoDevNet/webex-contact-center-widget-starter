/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { LitElement, PropertyValues } from "lit-element";
import Chart from "chart.js";
export declare const specificityType: readonly ["daily", "weekly", "monthly"];
export declare namespace Graph {
    type specificity = typeof specificityType[number];
}
export default class MyCustomComponent extends LitElement {
    /**
   * Property: apiKey
   * Access API Key: Covid Act Now Website
   * https://apidocs.covidactnow.org/access
   */
    apiKey: string;
    locale: string;
    selectedCountyFIPS: string;
    maxDataPoints: number;
    darkTheme: boolean;
    myChart: Chart | undefined;
    label: Array<string>;
    activeCases: Array<number>;
    dailyNewCases: Array<number>;
    specificity: Graph.specificity;
    loading: boolean;
    firstTime: boolean;
    chartContainer: HTMLDivElement;
    data: Array<{
        county: string;
    }> | undefined;
    static get styles(): import("lit-element").CSSResult;
    radioGroup: Element;
    clearData: () => void;
    renderChart: () => void;
    fetchCountyTimeline: (countyFIPS: string) => Promise<any>;
    closestElement(selector: string, base?: this): HTMLElement | null;
    refreshTokenData: () => void;
    handleRadioChange: (event: CustomEvent) => void;
    firstUpdated(changeProperties: PropertyValues): Promise<void>;
    collectChartData: () => Promise<void>;
    protected updated(changeProperties: PropertyValues): Promise<void>;
    renderLoading: () => import("lit-element").TemplateResult;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=Graph.d.ts.map