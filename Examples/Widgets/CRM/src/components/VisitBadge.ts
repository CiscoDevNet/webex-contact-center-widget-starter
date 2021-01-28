/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { DateTime } from "luxon";
import { html, LitElement, customElement, property } from "lit-element";
import styles from "./VisitBadge.scss";
import { nothing } from "lit-html";
@customElement("visit-badge")
export default class VisitBadge extends LitElement {
  @property({ type: Object, attribute: false }) visit:
    | CustomerVisit
    | undefined;

  static get styles() {
    return styles;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  matrixPosition = (date: string) => {
    const time = DateTime.fromISO(date).toLocal();
    const hour = time.hour;
    const day = time.ordinal;
    const formattedDate = time.toSQLDate();
    // this breaks hard-coded height of 400px into hour-sized chunks, & compensates for out-of-range hours and 33px baseline shift.
    const xPosition = (400 / 9) * (hour - 7) - 33;
    const yPosition = (100 / 365) * day;

    return [xPosition, yPosition, formattedDate];
  };

  visitDetailsOverlay =(visit:CustomerVisit, formattedDate: string) => {
    return html`
      <div class="visit-details-header">
        <md-badge small circle color="blue"><md-icon name="icon-document_12" color="blue"></md-icon></md-badge>
        <div>
          <h2>${visit.title}</h2>
          <h3>${formattedDate}</h3>
        </div>
        <div>
        <md-button hasremovestyle class="md-close md-modal__close" aria-label="Close Modal">
          <md-icon name="cancel_14"></md-icon>
        </md-button>
        </div>
      </div>
      <div class="visit-details-content">
      <table>
          <tr>
            <td>
              <span class="label">Facility</span class="label">
            </td>
            <td>
              ${visit.facility}
            </td>
          </tr>
          <tr>
            <td>
              <span class="label">Clinician</span class="label">
            </td>
            <td>
              ${visit.clinician}
            </td>
          </tr>
          <tr>
            <td>
              <span class="label">Department</span class="label">
            </td>
            <td>
              <span>${visit.department}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span class="label">Condition</span class="label">
            </td>
            <td>
              <span>${visit.condition}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span class="label">Type</span class="label">
            </td>
            <td>
              <span>${visit.type}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span class="label">O2 Stat</span class="label">
            </td>
            <td>
              <span>${visit.O2Stat}</span>
            </td>
          </tr>
          
        </table>
      </div>
    `
  }

  renderVisitBadge = (visit: CustomerVisit) => {
    const [bottom, left, formattedDate] = this.matrixPosition(visit.date);
    return html`
    <md-tooltip message="${visit.title}" style="z-index: 100; position: absolute; bottom: ${bottom}px; left: ${left}%">
      <md-menu-overlay>
        <div class="mock-badge" slot="menu-trigger" aria-haspopup="true" aria-expanded="true">
          <span class="split-left">
            <md-badge circle small color="blue" style="margin-right: .25rem">
              <md-icon name="icon-document_12" size=12 ></md-icon>
            </md-badge>
            ${visit.title}
          </span>
          <span class="split-separator"> | </span>
          <span name="split-right" class="split split-right">
            ${formattedDate}
          </span>
        </div>
        <div class="visit-overlay-content">
          ${this.visitDetailsOverlay(visit, formattedDate as string)}
        </div>
      </md-menu-overlay>
    </md-tooltip>
    `
  };

  render() {
    
    return html`
      ${this.visit ? this.renderVisitBadge(this.visit) : nothing}
    `;
  }
}