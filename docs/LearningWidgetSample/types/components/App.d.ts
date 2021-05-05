/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { LitElement, PropertyValues } from "lit-element";
export default class MyCustomComponent extends LitElement {
    entryPointId: string;
    destinationNumber: string;
    agentName: string | undefined;
    userState: string | undefined;
    teamName: string | undefined;
    dn: string | undefined;
    interactionId: any;
    interactionType: any;
    mediaChannel: string;
    dnis: string;
    fromAddress: string;
    toAddress: any;
    mediaType: string;
    contactState: string;
    responseData: any;
    static get styles(): import("lit-element").CSSResult;
    updated(changeProperties: PropertyValues): Promise<void>;
    state: {
        defaultAuxCode: number;
    };
    constructor();
    firstUpdated(changeProperties: PropertyValues): Promise<void>;
    init(): Promise<void>;
    changeState(s: "Available" | "Idle"): Promise<void>;
    getAgentInfo(): void;
    subscribeAgentContactDataEvents(): void;
    subscribeDialerEvents(): void;
    inputHandler(e: any): void;
    makeCall(): void;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=App.d.ts.map