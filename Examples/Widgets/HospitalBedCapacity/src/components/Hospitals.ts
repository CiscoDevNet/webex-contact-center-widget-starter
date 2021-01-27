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
  query,
  PropertyValues,
} from "lit-element";
import { Loader } from "@googlemaps/js-api-loader";
import styles from "./Hospitals.scss";
import { nothing } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined";

@customElement("my-hospital-stats")
export default class Hospitals extends LitElement {
  /**
   * Property googleApiKey
   * Access your API key from Google Maps Platform
   * https://cloud.google.com/maps-platform
   */
  @property({ type: String, reflect: true, attribute: "google-api-key" })
  googleApiKey = "";
  /**
   * Property: covidApiKey
   * Access API Key: Covid Act Now Website
   * https://apidocs.covidactnow.org/access
   */
  @property({ type: String, reflect: true, attribute: "covi-api-key" })
  covidApiKey = "";
  @property({ type: Number, reflect: true }) latitude = 37.40527;
  @property({ type: Number, reflect: true }) longitude = -122.01178;

  @internalProperty() expanded = false;
  @internalProperty() statePostal = "";
  @internalProperty() county = "";
  @internalProperty() bedCapacity = "";

  @internalProperty() hospitalName = "";
  @internalProperty() hospitalAddress = "";

  @internalProperty() hospitalImage: string = "";
  @internalProperty() hospitalPhoneNumber = "";
  @internalProperty() hospitalWebsite = "";
  @internalProperty() hospitalRating = "";
  @internalProperty() numberOfRatings = "";
  @internalProperty() hospitalHours = "";

  @internalProperty() nearestHospitalPlaceId = "";

  @internalProperty() map?: google.maps.Map;
  @internalProperty() nearestHospitalData?: any;
  @internalProperty() allUSACounties?: any;
  @internalProperty() countyData?: any;
  @internalProperty() loading = false;
  @internalProperty() errorMessage = "";

  @query(".hospital-widget") hospitalWidget!: HTMLDivElement;
  @query("#map") mapDiv?: HTMLElement;

  @internalProperty() loader = new Loader({
    apiKey: this.googleApiKey,
    version: "weekly",
    libraries: ["places"],
  });

  connectedCallback() {
    super.connectedCallback();
    this.loader.apiKey = this.googleApiKey;
  }

  async firstUpdated(changeProperties: PropertyValues) {
    super.firstUpdated(changeProperties);

    // @ts-ignore
    var ro = new ResizeObserver((entries: any) => {
      for (let entry of entries) {
        const cr = entry.contentRect;
        if (cr.width > 450) {
          if (!this.expanded) {
            this.expanded = true;
          }
        } else {
          if (this.expanded) {
            this.expanded = false;
          }
        }
      }
    });
    ro.observe(this.hospitalWidget);

    await this.fetchAllCounties()
      .then(() => this.initMap(this.longitude, this.latitude))
      .then(() => this.nearestHospital());
  }

  async update(changeProperties: PropertyValues) {
    super.update(changeProperties);

    if (changeProperties.has("latitude") || changeProperties.has("longitude")) {
      this.loading = true;
      await this.initMap(this.latitude, this.longitude).then(() =>
        this.nearestHospital()
      );
    }

    if (
      this.allUSACounties &&
      changeProperties.has("statePostal") &&
      changeProperties.has("county")
    ) {
      this.fetchCountyData(this.statePostal, this.county);
    }

    if (this.countyData && changeProperties.has("countyData")) {
      this.fetchCountyBedCapacity(this.countyData);
    }

    if (this.bedCapacity && changeProperties.has("bedCapacity")) {
      this.loading = false;
    }

    if (
      this.nearestHospitalPlaceId &&
      changeProperties.has("nearestHospitalPlaceId")
    ) {
      this.fetchPlaceDetails();
    }
  }

  initMap = async (longitude: number, latitude: number) => {
    return await this.loader
      .load()
      .then(() => {
        if (this.mapDiv) {
          this.map = new google.maps.Map(this.mapDiv, {
            center: { lat: latitude, lng: longitude },
            mapTypeControl: false,
          });
        }
      })
      .catch((err) => {
        console.error("Failed to initMap due to ", err);
      });
  };

  fetchPlaceDetails = () => {
    if (this.map) {
      const service = new google.maps.places.PlacesService(this.map);
      service.getDetails(
        {
          placeId: this.nearestHospitalPlaceId,
        },
        (results: any, status: google.maps.places.PlacesServiceStatus) => {
          if (status === "OK") {
            console.log("[log] Place Details", results);
            this.hospitalPhoneNumber = results?.formatted_phone_number;
            this.hospitalWebsite = results?.website;
            this.hospitalRating = results?.rating;
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

  getFormattedAddress = (location: { lat: number; lng: number }) => {
    return new google.maps.Geocoder().geocode(
      {
        location,
      },
      (results: any, status: google.maps.GeocoderStatus) => {
        if (status === "OK") {
          this.hospitalAddress = results[0].formatted_address;
          const addressDetails = results[0].address_components.reduce(
            (seed: any, obj: any) => (
              obj.types.forEach((t: any) => (seed[t] = obj.short_name)), seed
            ),
            {}
          );
          if (addressDetails.country && addressDetails.country === "US") {
            this.county = addressDetails.administrative_area_level_2;
            this.statePostal = addressDetails.administrative_area_level_1;
          } else {
            this.loading = false;
            this.errorMessage = "Location is outside of the US";
          }
        } else {
          console.error("Geocoder failed due to " + status);
          this.errorMessage = "Unable to find a nearby hospital";
        }
      }
    );
  };

  nearestHospital = () => {
    if (this.map) {
      const places = new google.maps.places.PlacesService(this.map);
      return places.nearbySearch(
        {
          location: { lat: this.latitude, lng: this.longitude },
          // rankBy: google.maps.places.RankBy.DISTANCE,
          rankBy: google.maps.places.RankBy.PROMINENCE,
          radius: 50,
          type: "hospital",
          keyword: "establishment",
        },
        (results: any) => {
          if (results.length) {
            this.nearestHospitalData = results[0];
            console.log("[log] nearestHospitalData", this.nearestHospitalData);
            this.hospitalName = this.nearestHospitalData?.name;
            this.getFormattedAddress(
              this.nearestHospitalData?.geometry?.location
            );

            if (this.nearestHospitalData?.photos?.length) {
              const hospitalImageInfo = this.nearestHospitalData?.photos[0];
              this.hospitalImage = hospitalImageInfo.getUrl();
            }

            this.nearestHospitalPlaceId = this.nearestHospitalData?.place_id;
            this.errorMessage = "";
          } else {
            this.loading = false;
            this.errorMessage = "Unable to find nearby Hospitals";
          }
        }
      );
    }
  };

  fetchAllCounties = async () => {
    return await fetch(
      `https://api.covidactnow.org/v2/counties.json?apiKey=${this.covidApiKey}`
    )
      .then((response) => {
        return response.json();
      })
      .then((allCounties) => {
        this.allUSACounties = allCounties;
        return allCounties;
      });
  };

  fetchCountyData = (statePostal: string, county: string) => {
    if (this.allUSACounties && statePostal && county) {
      const countyResults = this.allUSACounties.filter(
        (countyData: { state: string; county: string }) => {
          return (
            statePostal === countyData.state && county === countyData.county
          );
        }
      );
      this.countyData = countyResults[0];
      if (!this.countyData) {
        console.error("failed to fetch county data");
        this.loading = false;
        this.bedCapacity = "NA";
      }

      return this.countyData;
    } else {
      this.loading = false;
      this.errorMessage = "Unrecognizable statePostal & County";
    }
  };

  fetchCountyBedCapacity = async (countyData: any) => {
    const { currentUsageTotal, capacity } = countyData?.actuals?.hospitalBeds;
    const percentage = `${((currentUsageTotal / capacity) * 100).toFixed(0)}%`;
    this.bedCapacity = percentage;
    return percentage;
  };

  static get styles() {
    return styles;
  }

  renderLoading = () => {
    return html`
      <div class="loading-wrapper">
        <md-spinner></md-spinner>
      </div>
    `;
  };

  renderNoHospital = () => {
    return html`
      <div class="body loading">
        <h3>${this.errorMessage}</h3>
      </div>
    `;
  };

  renderSubHeader = () => {
    return this.expanded
      ? html`
          <div class="hospital-header expanded flex-parent">
            <span class="header-text flex-child long-and-truncated"
              >${this.hospitalName}</span
            >
            <md-badge class="bed-capacity-badge" color="mint"
              >${this.bedCapacity}</md-badge
            >
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
      <div class="details">
        <div class="title-column">
          <div class="title cell">Hours</div>
          <div class="title cell">Contact Info</div>
          <div class="title cell">Website</div>
          <div class="title cell">Rating</div>
        </div>
        <div class="value-column">
          <div class=${`value cell ${this.hospitalHours ? "open" : "closed"}`}>
            ${this.hospitalHours ? "Open" : "Closed"}
          </div>
          <div class="value cell">${this.hospitalPhoneNumber}</div>
          <div class="value cell">${this.hospitalWebsite}</div>
          <div class="value cell">
            ${this.hospitalRating} (${this.numberOfRatings})
          </div>
        </div>
      </div>
    `;
  };

  renderHospitalDetails = () => {
    return html`
      <div class=${`hospital-details ${this.expanded ? "expanded" : ""}`}>
        <div class="warning-block">
          <md-icon name="warning_12"></md-icon>
          <span class="warning-text"
            >COVID-19 testing lab | Referral required | Tests limited to certain
            patients</span
          >
        </div>
        <div class="details">
          <div class="title-column">
            <div class="title cell">Hospital</div>
            <div class="title cell">Address</div>
          </div>
          <div class="value-column">
            <div class="value cell">${this.hospitalName}</div>
            <div class="value cell">${this.hospitalAddress}</div>
          </div>
        </div>
        ${this.expanded ? this.expandedHospitalDetails() : nothing}
      </div>
    `;
  };

  renderImage = () => {
    return this.expanded
      ? html`
          ${this.hospitalImage
            ? html`
                <img
                  class="hospital-image"
                  src=${ifDefined(this.hospitalImage)}
                />
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
      ? this.renderNoHospital()
      : html`
          ${this.renderImage()} ${this.renderSubHeader()}
          ${this.renderHospitalDetails()}
        `;
  };

  render() {
    return html`
      <div class="hospital-widget">
        ${this.loading ? this.renderLoading() : this.renderContent()}
        <div id="map"></div>
      </div>
    `;
  }
}
