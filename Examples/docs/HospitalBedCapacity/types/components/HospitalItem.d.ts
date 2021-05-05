/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { LitElement } from "lit-element";
export default class HospitalItem extends LitElement {
    map?: any;
    name: string;
    placeId: string;
    vicinity: string;
    selected: boolean;
    expanded: boolean;
    county: string;
    statePostal: string;
    bedCapacity: string;
    renderLoading: () => import("lit-element").TemplateResult;
    renderDetails: () => import("lit-element").TemplateResult;
    renderContent: () => import("lit-element").TemplateResult;
    static get styles(): import("lit-element").CSSResult;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=HospitalItem.d.ts.map