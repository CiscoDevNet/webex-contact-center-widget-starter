/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { LitElement, PropertyValues } from "lit-element";
import "./VisitBadge";
import { data } from "../customer-data/mock-customer-blob";
export default class CustomerVisits extends LitElement {
    visits: Array<Object> | undefined;
    customerData?: typeof data | undefined;
    filterSelection: string | undefined;
    connectedCallback(): void;
    updated(changedProperties: PropertyValues): void;
    generateTime: (i: number | string | undefined) => import("lit-element").TemplateResult | undefined;
    static get styles(): import("lit-element").CSSResult;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=Visits.d.ts.map