/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  html,
  LitElement,
  customElement,
  property,
  internalProperty,
  PropertyValues,
} from "lit-element";
import styles from "./Hospitals.scss";
import { nothing } from "lit-html";
import "./HospitalItem";

@customElement("my-hospital-details")
export default class HospitalDetails extends LitElement {
  @property({ type: Object }) map?: google.maps.Map;
  @property({ type: String, reflect: true, attribute: "place-id" }) placeId = "";
  @property({ type: String }) county = "";
  @property({ type: String }) statePostal = "";
  @property({ type: String }) bedCapacity = "";
  @property({ type: Boolean }) expanded = false;

  @internalProperty() name = "NA";
  @internalProperty() address = "NA";
  @internalProperty() phone = "NA";
  @internalProperty() rating = undefined;
  @internalProperty() website = "NA";
  @internalProperty() url = "NA";
  @internalProperty() user_ratings_total = undefined;
  @internalProperty() isOpen = false;
  @internalProperty() image = "";

  @internalProperty() loading = true;
  @internalProperty() errorMessage = "";

  async update(changeProperties: PropertyValues) {
    super.update(changeProperties);

    if (this.placeId && changeProperties.has("placeId")) {
      this.fetchPlaceDetails();
    }
  }

  fetchPlaceDetails = () => {
    this.loading = true;
    if (this.map) {
      const service = new google.maps.places.PlacesService(this.map);
      service.getDetails({ placeId: this.placeId },
        (results: any, status: google.maps.places.PlacesServiceStatus) => {
          if (status === "OK") {
            const {
              name,
              formatted_address,
              formatted_phone_number,
              rating,
              website,
              url,
              user_ratings_total,
              opening_hours,
              photos,
            } = results;

            this.name = name || "NA";
            this.address = formatted_address || "NA";
            this.phone = formatted_phone_number || "NA";
            this.rating = rating;
            this.website = website || "NA";
            this.url = url || "NA";
            this.user_ratings_total = user_ratings_total;
            this.isOpen = opening_hours?.isOpen();
            this.image = photos?.length ? photos[0].getUrl() : undefined;
            setTimeout(() => (this.loading = false), 150);
          } else {
            console.error("PlacesService failed due to " + status);
            setTimeout(() => (this.loading = false), 150);
            this.errorMessage = "Unable to find the details of the selected hospital";
          }
        }
      );
    }
  };

  renderLoading = () => {
    return html`
      <div class="loading-wrapper">
        <md-spinner></md-spinner>
      </div>
    `;
  };

  renderErrorMessage = () => {
    return html`
      <div class="error-wrapper">
        <h3>${this.errorMessage}</h3>
      </div>
    `;
  };

  renderSubHeader = () => {
    return this.expanded
      ? html`
          <div class="hospital-header expanded flex-parent">
            <div class="left-section">
              <span class="header-text flex-child long-and-truncated"
                >${this.name}</span
              >
              <md-badge small class="bed-capacity-badge" color="mint"
                >${this.bedCapacity || "NA"}</md-badge
              >
            </div>
            <div class="icons right-align flex-child short-and-fixed">
              <md-button circle hasRemoveStyle size="28">
                <md-icon slot="icon" name="location_16"></md-icon>
              </md-button>
              <md-button circle hasRemoveStyle size="28">
                <md-icon slot="icon" name="info_16"></md-icon>
              </md-button>
              <md-button circle hasRemoveStyle size="28">
                <md-icon slot="icon" name="share-c-native-adr_16"></md-icon>
              </md-button>
              <md-button circle hasRemoveStyle size="28">
                <md-icon slot="icon" name="language_16"></md-icon>
              </md-button>
            </div>
          </div>
        `
      : html`
          <div class="hospital-header">
            <md-badge class="hospital-badge" color="mint" split>
              <span slot="split-left">
                ${`${this.county}, ${this.statePostal}`}
              </span>
              <span slot="split-right">${this.bedCapacity}</span>
            </md-badge>
          </div>
        `;
  };

  expandedHospitalDetails = () => {
    return html`
      <div class="row">
        <div class="title">Hours</div>
        <div class=${`value ${this.isOpen ? "open" : "closed"}`}>
          ${this.isOpen ? "Open" : "Closed"}
        </div>
      </div>
      <div class="row">
        <div class="title">Contact Info</div>
        <div class="value">${this.phone}</div>
      </div>
      <div class="row">
        <div class="title">Website</div>
        <div class="value">
          <md-link href=${this.website} target="_blank"
            >${this.website}</md-link
          >
        </div>
      </div>
      <div class="row">
        <div class="title">Ratings</div>
        <div class="value">
          ${this.rating && this.user_ratings_total
            ? `${this.rating} (${this.user_ratings_total})`
            : "NA"}
        </div>
      </div>
      <div class="row">
        <div class="title">Directions</div>
        <div class="value">
          <md-link href=${this.url} target="_blank"
            >Get Directions<md-icon
              class="pop-out-icon"
              name="pop-out_12"
            ></md-icon
          ></md-link>
        </div>
      </div>
    `;
  };

  renderWarningBlock = () => {
    return this.expanded
      ? html`
          <div class="warning-block">
            <md-icon name="warning_12"></md-icon>
            <span class="warning-text"
              >COVID-19 testing lab | Referral required | Tests limited to
              certain patients</span
            >
          </div>
        `
      : nothing;
  };

  renderHospitalDetails = () => {
    return html`
      <div class=${`hospital-data ${this.expanded ? "expanded" : ""}`}>
        ${this.renderWarningBlock()}
        <div class="details">
          <div class="row">
            <div class="title">Hospital</div>
            <div class="value">${this.name}</div>
          </div>
          <div class="row">
            <div class="title">Address</div>
            <div class="value">${this.address}</div>
          </div>
          ${this.expanded ? this.expandedHospitalDetails() : nothing}
        </div>
      </div>
    `;
  };

  renderImage = () => {
    return this.expanded
      ? html`
          ${this.image
            ? html`
                <img class="hospital-image" src=${this.image} />
              `
            : html`
                <div class="hospital-image void">
                  <span>No Image Found</span>
                </div>
              `}
        `
      : nothing;
  };

  renderContent = () => {
    return this.errorMessage
      ? this.renderErrorMessage()
      : html`
          ${this.renderImage()} ${this.renderSubHeader()}
          ${this.renderHospitalDetails()}
        `;
  };

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <div class="hospital-details">
        ${this.loading ? this.renderLoading() : this.renderContent()}
      </div>
    `;
  }
}
