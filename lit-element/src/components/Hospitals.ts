/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { html, LitElement, customElement } from "lit-element";
import styles from "./Hospitals.scss";

@customElement("my-hospital-stats")
export default class Hospitals extends LitElement {

    static get styles() {
        return styles;
    }

    render() {
        return html`
        <div class="hosiptal-section">
            <div class="main-header">
                <span class="header-text">Hospital Bed Capacity</span>
                <md-button circle hasRemoveStyle><md-icon slot="icon" name="maximize_16"></md-icon></md-button>
            </div>
            <div class="body">
                <md-badge class="hospital-badge" color="mint" split>
                    <span slot="split-left">
                        New York, Chelsea
                    </span>
                    <span slot="split-right">88%</span>
                </md-badge>
                <div class="hospital row">
                    <span class="title">Hospital</span>
                    <span class="value">NYH Med Center - Chelsea</span>
                </div>
                <div class="address row">
                    <span class="title">Address</span>
                    <span class="value">56-45 Main Street, Chelsea, NY</span>
                </div>
            </div>
        </div>
        `;
    }
}
