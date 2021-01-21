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

  @internalProperty() statePostal = "";
  @internalProperty() county = "";
  @internalProperty() bedCapacity = "";

  @internalProperty() hospitalName = "";
  @internalProperty() hospitalAddress = "";

  @internalProperty() map?: google.maps.Map;
  @internalProperty() nearestHospitalData?: any;
  @internalProperty() allUSACounties?: any;
  @internalProperty() countyData?: any;
  @internalProperty() loading = false;
  @internalProperty() errorMessage = "";

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
          rankBy: google.maps.places.RankBy.DISTANCE,
          type: "hospital",
          keyword: "(emergency) AND ((medical centre) OR hospital)",
        },
        (results: any) => {
          if (results.length) {
            this.nearestHospitalData = results[0];
            this.hospitalName = this.nearestHospitalData?.name;
            this.getFormattedAddress(
              this.nearestHospitalData?.geometry?.location
            );
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
      this.errorMessage = "Unreconizable statePostal & County";
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
      <div class="body loading">
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

  renderContent = () => {
    return this.errorMessage
      ? this.renderNoHospital()
      : html`
          <div class="body">
            <md-badge class="hospital-badge" color="mint" split>
              <span slot="split-left">
                ${`${this.county}, ${this.statePostal}`}
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
        `;
  };

  render() {
    return html`
      <div class="hosiptal-section">
        ${this.loading ? this.renderLoading() : this.renderContent()}
        <div id="map"></div>
      </div>
    `;
  }
}
