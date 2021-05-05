/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { LitElement } from "lit-element";
import { data } from "../customer-data/mock-customer-blob";
export default class CustomerSummary extends LitElement {
    compact: boolean;
    phoneNumber: string | undefined;
    customerData?: typeof data | undefined;
    private get resizeClassMap();
    getValue(search: string): string;
    static get styles(): import("lit-element").CSSResult;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=Summary.d.ts.map