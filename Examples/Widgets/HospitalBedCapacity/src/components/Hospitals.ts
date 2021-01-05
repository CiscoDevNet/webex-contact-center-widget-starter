/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { html, LitElement, customElement, property } from "lit-element";
import styles from "./Hospitals.scss";

@customElement("my-hospital-stats")
export default class Hospitals extends LitElement {
    @property({ type: String }) selectedState = "CA";
    @property({ type: String }) city = "Sunnyvale";
    @property({ type: String }) bedCapacity = "80%";
    @property({ type: String }) hospitalName = "Valley Health Center Sunnyvale";
    @property({ type: String }) hospitalAddress = "660 S Fair Oaks Ave, Sunnyvale, CA 94086";

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
                        ${`${this.city}, ${this.selectedState}`}
                    </span>
                    <span slot="split-right">${this.bedCapacity}</span>
                </md-badge>
                <div class="hospital row">
                    <span class="title">Hospital</span>
                    <span class="value">${this.hospitalName}</span>
                </div>
                <div class="address row">
                    <span class="title">Address</span>
                    <span class="value">${this.hospitalAddress}</span>
                </div>
            </div>
        </div>
        `;
    }
}
