/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { LitElement, PropertyValues } from "lit-element";
import { Service } from "@wxcc-desktop/sdk-types";
import "./components/Summary";
import "./components/Visits";
import { data } from "./customer-data/mock-customer-blob";
export default class MyCustomComponent extends LitElement {
    phoneNumber: string | undefined;
    compact: boolean;
    customerData: typeof data;
    container: HTMLElement;
    assignedContacts: {
        interaction: Service.Aqm.Contact.Interaction;
    }[];
    connectedCallback(): void;
    getTaskMap(): Promise<void>;
    firstUpdated(changedProperties: PropertyValues): void;
    private get resizeClassMap();
    getValue(x: any): any;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=index.d.ts.map