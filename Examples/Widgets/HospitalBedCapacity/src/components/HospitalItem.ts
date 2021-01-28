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
  internalProperty,
  property,
} from "lit-element";
import styles from "./HospitalItem.scss";

@customElement("my-hospital-item")
export default class HospitalItem extends LitElement {
  @property() map?: any;
  @property({ type: String }) name = "";
  @property({ type: String }) placeId = "";
  @property({ type: String }) vicinity = "";

  @property({ type: String }) county = "NA";
  @property({ type: String }) statePostal = "NA";
  @property({ type: String }) bedCapacity = "NA";

  @internalProperty() loading = false;
  @internalProperty() errorMessage = "";

  @internalProperty() hospitalAddress = "NA";
  @internalProperty() hospitalPhoneNumber = "NA";
  @internalProperty() hospitalWebsite = "NA";
  @internalProperty() hospitalRating = "NA";
  @internalProperty() numberOfRatings = 0;
  @internalProperty() hospitalHours = false;

  static get styles() {
    return styles;
  }

  fetchPlaceDetails = () => {
    if (this.map) {
      const service = new google.maps.places.PlacesService(this.map);
      service.getDetails(
        {
          placeId: this.placeId,
        },
        (results: any, status: google.maps.places.PlacesServiceStatus) => {
          if (status === "OK") {
            this.hospitalPhoneNumber = results?.formatted_phone_number || "NA";
            this.hospitalWebsite = results?.website || "NA";
            this.hospitalRating = results?.rating || "NA";
            this.numberOfRatings = results?.user_ratings_total;
            this.hospitalHours = results?.opening_hours?.isOpen();
          } else {
            console.error("PlacesService failed due to " + status);
            this.errorMessage = "Unable to find a nearby hospital details";
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

  renderDetails = () => {
    return html`
      <div class="details">
        <div class="row">
          <div class="title">Hospital</div>
          <div class="value">${this.name}</div>
        </div>
        <div class="row">
          <div class="title">Address</div>
          <div class="value">${this.vicinity}</div>
        </div>
        <div class="row">
          <div class="title">Phone</div>
          <div class="value">${this.hospitalPhoneNumber}</div>
        </div>
      </div>
    `;
  };

  renderContent = () => {
    return html`
      <div class="hospital-header">
        <md-badge class="hospital-badge" color="mint" split>
          <span slot="split-left">
            ${`${this.county}, ${this.statePostal}`}
          </span>
          <span slot="split-right">${this.bedCapacity || "NA"}</span>
        </md-badge>
      </div>
      ${this.renderDetails()}
    `;
  };

  render() {
    return html`
      <div class="hospital-item">
        ${this.loading ? this.renderLoading() : this.renderContent()}
      </div>
    `;
  }
}
