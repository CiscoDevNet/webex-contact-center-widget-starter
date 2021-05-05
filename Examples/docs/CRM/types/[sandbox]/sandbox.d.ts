/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import "@momentum-ui/web-components";
import { LitElement } from "lit-element";
import "../index";
export declare class Sandbox extends LitElement {
    darkTheme: boolean;
    containerWidth: string;
    containerHeight: string;
    static get styles(): import("lit-element").CSSResult;
    themeToggle(): import("lit-element").TemplateResult;
    toggleSetting(e: MouseEvent): void;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=sandbox.d.ts.map