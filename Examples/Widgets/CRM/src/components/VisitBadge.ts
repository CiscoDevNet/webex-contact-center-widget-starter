/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { DateTime } from "luxon";
import { html, LitElement, customElement, property, query } from "lit-element";
import styles from "./VisitBadge.scss";
import { nothing } from "lit-html";
export interface VisitTypes {
  [key: string]: {
    icon: string;
    color: string;
  };
}
interface MenuElement extends HTMLElement {
  isOpen: boolean;
}

export const VisitTypeNames = [
  "General Visit",
  "Follow-up Visit",
  "Full Body Checkup",
  "Medical Tests"
];
@customElement("visit-badge")
export default class VisitBadge extends LitElement {
  @property({ type: Number, attribute: "o2-limit" }) o2Limit = 80;
  @property({ type: String, attribute: "visit-type" }) visitType =
    "General Visit";
  @property({ type: Object, attribute: false }) visit:
    | CustomerVisit
    | undefined;

  @query("md-menu-overlay") menu!: MenuElement | undefined;

  VISITTYPES: VisitTypes = {
    "General Visit": { icon: "icon-document_12", color: "blue" },
    "Follow-up Visit": { icon: "icon-document_12", color: "violet" },
    "Full Body Checkup": { icon: "icon-file-locked_12", color: "orange" },
    "Medical Tests": { icon: "icon-document_12", color: "green" }
  };

  connectedCallback() {
    super.connectedCallback()
    this.visit?.type ? this.visitType = this.visit?.title : null
  }

  fixOverlayPosition = () => {
    const yCoord = this.menu!.getBoundingClientRect().top;
    const xCoord = this.menu!.getBoundingClientRect().left;
    this.menu!.style.position = "fixed";
    this.menu!.style.zIndex = "100";
    this.menu!.style.top = yCoord.toString() + "px";
    this.menu!.style.left = xCoord.toString() + "px";
  };

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

  getVisitIcon = () => {
    return html`
      <md-icon
        name=${this.VISITTYPES[this.visitType].icon}
        color="default"
      ></md-icon>
    `;
  };

  formatO2Stat = (stat: number) => {
    if (stat < this.o2Limit) {
      return html`
        <span style="color: red; line-height: normal"
          >%${stat.toString()}<md-icon
            name="icon-warning_16"
            color="red"
            style="position:relative; bottom: -3px"
          ></md-icon
        ></span>
      `;
    } else {
      return html`
        <span>%${stat.toString()}</span>
      `;
    }
  };

  handleKeydown = (e: KeyboardEvent) => {
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault();
      this.fixOverlayPosition();
    }
  };

  closeMenu = () => {
    this.menu ? (this.menu.isOpen = false) : null;
    this.menu!.removeAttribute("style");
  };

  visitDetailsOverlay = (visit: CustomerVisit, formattedDate: string) => {
    return html`
      <div class="visit-details-header">
        <md-badge small circle color=${this.VISITTYPES[this.visitType].color}>
          ${this.getVisitIcon()}
        </md-badge>
        <div>
          <h2>${visit.title}</h2>
          <h3>${formattedDate}</h3>
        </div>
        <div>
          <md-button
            hasremovestyle
            class="md-close md-modal__close"
            aria-label="Close Modal"
            @click=${this.closeMenu}
          >
            <md-icon name="cancel_14"></md-icon>
          </md-button>
        </div>
      </div>
      <div class="visit-details-content">
        <table>
          <tr>
            <td class="title">
              Facility
            </td>
            <td class="value">
              ${visit.facility}
            </td>
          </tr>
          <tr>
            <td class="title">
              Clinician
            </td>
            <td class="value">
              ${visit.clinician}
            </td>
          </tr>
          <tr>
            <td class="title">
              Department
            </td>
            <td class="value">
              <span>${visit.department}</span>
            </td>
          </tr>
          <tr>
            <td class="title">
              Condition
            </td>
            <td class="value">
              <span>${visit.condition}</span>
            </td>
          </tr>
          <tr>
            <td class="title">
              Type
            </td>
            <td class="value">
              <span>${visit.type}</span>
            </td>
          </tr>
          <tr>
            <td class="title">
              O2 Stat
            </td>
            <td class="value">
              ${this.formatO2Stat(visit.O2Stat)}
            </td>
          </tr>
        </table>
      </div>
    `;
  };

  renderVisitBadge = (visit: CustomerVisit) => {
    const [bottom, left, formattedDate] = this.matrixPosition(visit.date);
    return html`
      <div
        class="wrapper"
        style="position: absolute; bottom: ${bottom}px; left: ${left}%"
      >
        <md-menu-overlay
          @menu-overlay-close=${this.closeMenu}
          @menu-overlay-open=${this.fixOverlayPosition}
        >
          <md-button
            slot="menu-trigger"
            class="menu-trigger"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <md-tooltip message="${visit.title}" class="mock-badge">
              <span>
                <md-badge
                  circle
                  small
                  color=${this.VISITTYPES[this.visitType].color}
                  style="margin-right: .25rem"
                >
                  ${this.getVisitIcon()}
                </md-badge>
                ${visit.title}
                <span class="split-separator"> | </span>
                <span>
                  ${formattedDate}
                </span>
              </span>
            </md-tooltip>
          </md-button>
          <div class="visit-overlay-content">
            ${this.visitDetailsOverlay(visit, formattedDate as string)}
          </div>
        </md-menu-overlay>
      </div>
    `;
  };

  static get styles() {
    return styles;
  }

  render() {
    return html`
      ${this.visit ? this.renderVisitBadge(this.visit) : nothing}
    `;
  }
}
