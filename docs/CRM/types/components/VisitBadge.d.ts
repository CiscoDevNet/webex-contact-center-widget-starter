/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { LitElement } from "lit-element";
export interface VisitTypes {
    [key: string]: {
        icon: string;
        color: string;
    };
}
interface MenuElement extends HTMLElement {
    isOpen: boolean;
}
export declare const VisitTypeNames: string[];
export default class VisitBadge extends LitElement {
    o2Limit: number;
    visitType: string;
    visit: CustomerVisit | undefined;
    menu: MenuElement | undefined;
    VISITTYPES: VisitTypes;
    connectedCallback(): void;
    fixOverlayPosition: () => void;
    matrixPosition: (date: string) => (string | number)[];
    getVisitIcon: () => import("lit-element").TemplateResult;
    formatO2Stat: (stat: number) => import("lit-element").TemplateResult;
    handleKeydown: (e: KeyboardEvent) => void;
    closeMenu: () => void;
    visitDetailsOverlay: (visit: CustomerVisit, formattedDate: string) => import("lit-element").TemplateResult;
    renderVisitBadge: (visit: CustomerVisit) => import("lit-element").TemplateResult;
    static get styles(): import("lit-element").CSSResult;
    render(): import("lit-element").TemplateResult;
}
export {};
//# sourceMappingURL=VisitBadge.d.ts.map