/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { LitElement, PropertyValues } from "lit-element";
export default class MyCustomComponent extends LitElement {
    timeLimit: number;
    timeLeft: number;
    color: string;
    wrapper: HTMLElement;
    FULL_DASH_ARRAY: number;
    timePassed: number;
    updated(changedProperties: PropertyValues): void;
    static get styles(): import("lit-element").CSSResult;
    calculateTimeFraction(): number;
    setCircleDasharray(): void;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=time-circle.d.ts.map