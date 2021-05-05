/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { LitElement, PropertyValues } from "lit-element";
interface FeedItem {
    title: string | undefined;
    link: string | undefined;
}
export default class MyCustomComponent extends LitElement {
    rssFeedAddress: string;
    updateDelay: number;
    rawFeedData?: NodeListOf<Element>;
    renderFeedData?: FeedItem[];
    loading: boolean;
    totalPage: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    currentPage: number;
    link: HTMLElement;
    static get styles(): import("lit-element").CSSResult;
    firstUpdated(changedProperties: PropertyValues): void;
    updated(changedProperties: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    getFeed(): Promise<void>;
    parseFeedItems(): void;
    getCurrentItem(currentPage: number): import("lit-element").TemplateResult;
    private computePrevious;
    private computeNext;
    getPageArrows(): import("lit-element").TemplateResult;
    render(): import("lit-element").TemplateResult;
}
export {};
//# sourceMappingURL=App.d.ts.map