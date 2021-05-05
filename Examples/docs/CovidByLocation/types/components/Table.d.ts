/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { LitElement, PropertyValues } from "lit-element";
export default class MyCustomComponent extends LitElement {
    sorted: boolean;
    stateCountyData: Array<Object> | undefined;
    tableReady: boolean;
    statePostal: string;
    countyCases: Array<string>;
    countyNewCases: Array<string>;
    casesHeader: string;
    deathsHeader: string;
    casesTableData: string;
    deathsTableData: string;
    stateTotalCases: number;
    stateTotalNewCases: number;
    stateTotalDeaths: number;
    tableContainer: HTMLDivElement;
    subBody: HTMLDivElement;
    static get styles(): import("lit-element").CSSResult;
    resetData: () => void;
    firstUpdated(changeProperties: PropertyValues): void;
    updated(changeProperties: PropertyValues): void;
    handleSort: () => void;
    renderTable: (type: string) => import("lit-element").TemplateResult | undefined;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=Table.d.ts.map