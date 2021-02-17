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
import ResizeObserver from 'resize-observer-polyfill';
import { Loader } from "@googlemaps/js-api-loader";
import styles from "./Hospitals.scss";
import { nothing } from "lit-html";
import "./HospitalItem";
import "./HospitalDetails";

declare global {
  interface Window { gm_authFailure: any; }
}

type HospitalData = {
  place_id: string;
  name: string;
  vicinity: string;
}

@customElement("my-hospital-widget")
export default class HospitalWidget extends LitElement {
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
  @property({ type: Number, reflect: true }) latitude = 37.369350;
  @property({ type: Number, reflect: true }) longitude = -122.079552;

  @internalProperty() expanded = false;
  @internalProperty() statePostal = "";
  @internalProperty() county = "";
  @internalProperty() bedCapacity = "";

  @internalProperty() hospitalName = "";
  @internalProperty() hospitalAddress = "";
  @internalProperty() hospitalImage = "";

  @internalProperty() selectedHospitalId = "";

  @internalProperty() map?: google.maps.Map;
  @internalProperty() hospitalIds: Array<string> = [];
  @internalProperty() allNearbyHospitals?: Array<HospitalData> = [];
  @internalProperty() nearestHospitalData?: any;
  @internalProperty() allUSACounties?: any;
  @internalProperty() countyData?: any;

  @internalProperty() loading = true;
  @internalProperty() errorMessage = "";

  covidAPIError = false;

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

    const ro = new ResizeObserver((entries: any) => {
      for (let entry of entries) {
        const cr = entry.contentRect;
        if (cr.width > 750) {
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

    window.gm_authFailure = (err: any) => {
      this.setErrorMsg('googleApiKey is invalid', err);
    }
  }

  async update(changeProperties: PropertyValues) {
    super.update(changeProperties);

    if (changeProperties.has('googleApiKey') || changeProperties.has('covidApiKey')) {
      if (!this.googleApiKey) {
        this.setErrorMsg("googleApiKey is not defined");
      } else if (!this.covidApiKey) {
        this.setErrorMsg("covidApiKey is not defined");
      }
    }

    if (this.googleApiKey && this.covidApiKey && (changeProperties.has('longitude') || changeProperties.has('latitude'))) {
      if (!this.latitude || this.latitude === 0) {
        this.setErrorMsg("latitude is not defined");

      } else if (!this.longitude || this.longitude === 0) {
        this.setErrorMsg("longitude is not defined");
      } else {
        this.loading = true;
        await this.fetchAllCounties()
        .then(() => {
          if (!this.covidAPIError) {
            return this.initMap(this.latitude, this.longitude)
            .then(() => {
              this.getFormattedAddress(this.latitude, this.longitude);
              this.nearestHospitals(this.map, this.latitude, this.longitude);
            });
          }
        });
      }
    }

    if (changeProperties.has("countyData")) {
      this.fetchCountyBedCapacity(this.countyData);
    }
  }

  setErrorMsg = (message: string, error?: any) => {
    this.loading = false;
    this.errorMessage = message;
    error ? console.error(message, error) : console.error(message);
  }

  initMap = async (latitude: number, longitude: number) => {
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
        this.setErrorMsg('Failed to initialize google map', err);
      });
  };

  getFormattedAddress = (lat: number, lng: number) => {
    return new google.maps.Geocoder().geocode(
      {
        location: { lat, lng }
      },
      (results: any, status: google.maps.GeocoderStatus) => {
        if (status === "OK") {
          this.hospitalAddress = results[0].formatted_address;

          const componentForm: any = {
            administrative_area_level_1: 'short_name',
            administrative_area_level_2: 'short_name',
            country: 'short_name'
          };

          let addressDetails: any = {};
          const place = results[0];
          for (let i = 0; i < place.address_components.length; i++) {
            const addressType: any = place.address_components[i].types[0];
            if (componentForm[addressType]) {
              addressDetails[addressType] = place.address_components[i]["short_name"];
            }
          }

          if (addressDetails.country && addressDetails.country === "US") {
            this.county = addressDetails.administrative_area_level_2;
            this.statePostal = addressDetails.administrative_area_level_1;
            this.fetchCountyData(this.statePostal, this.county);
          } else {
            this.setErrorMsg("Latitude and Longitude is located outside of the US");
          }
        } else {
          this.setErrorMsg("Geocoder failed to fetch address details", status);
        }
      }
    );
  };

  nearestHospitals = (map: google.maps.Map | undefined, latitude: number, longitude: number) => {
    this.hospitalIds = [];
    if (map) {
      const places = new google.maps.places.PlacesService(map);
      return places.nearbySearch(
        {
          location: { lat: latitude, lng: longitude },
          rankBy: google.maps.places.RankBy.DISTANCE,
          type: "hospital",
          keyword: "(emergency) AND (establishment) AND ((medical centre) OR hospital)"
        },
        (results: any, status: google.maps.places.PlacesServiceStatus) => {
          if (status === "OK") {
            this.allNearbyHospitals = results;
            this.hospitalIds = this.allNearbyHospitals ? this.allNearbyHospitals?.map(hospital => hospital.place_id) : [];
            this.nearestHospitalData = results[0];
            this.hospitalName = this.nearestHospitalData?.name;

            if (this.nearestHospitalData?.photos?.length) {
              const hospitalImageInfo = this.nearestHospitalData?.photos[0];
              this.hospitalImage = hospitalImageInfo.getUrl();
            }

            this.selectedHospitalId = this.nearestHospitalData?.place_id;
            this.errorMessage = "";
            this.loading = false;
          } else {
            this.setErrorMsg("google maps placeService nearbySearch failed", status);
          }
        }
      );
    }
  };

  fetchAllCounties = async () => {
    if (!this.allUSACounties) {
      return await fetch(
        `https://api.covidactnow.org/v2/counties.json?apiKey=${this.covidApiKey}`
      )
        .then((response) => {
          return response.json();
        })
        .then((allCounties) => {
          this.allUSACounties = allCounties;
        }).catch((err) => {
          this.setErrorMsg('Covid Act Now API call failed', err);
          this.covidAPIError = true;
        });
    }
  };

  fetchCountyData = (statePostal: string, county: string) => {
      const countyResults = this.allUSACounties.filter(
        (countyData: { state: string; county: string }) => {
          return (
            statePostal.toLowerCase() === countyData.state.toLowerCase() && county.toLowerCase() === countyData.county.toLowerCase()
          );
        }
      );
      if (countyResults.length === 0) {
        this.setErrorMsg("Unrecognizable statePostal & County", status);
      } else {
        this.countyData = countyResults[0];
      }
  };

  fetchCountyBedCapacity = (countyData: any) => {

    if (countyData) {
      const { currentUsageTotal, capacity } = countyData?.actuals?.icuBeds;
      const percentage = `${((currentUsageTotal / capacity) * 100).toFixed(0)}%`;
      this.bedCapacity = percentage;
    } else {
      this.bedCapacity = "NA";
    }
    this.loading = false;
  };

  handleSelection = (event: CustomEvent) => {
    const selectedIndex = event.detail.selected;
    this.selectedHospitalId = this.hospitalIds[selectedIndex];
  };

  renderHospitalList = () => {
    return this.allNearbyHospitals && this.expanded && !this.loading
      ? html`
          <div class=${`hospital-list ${this.expanded ? "expanded" : ""}`}>
            <md-list
              @list-item-change=${(event: CustomEvent) =>
                this.handleSelection(event)}
              activated=${0}
            >
              ${this.allNearbyHospitals
                ? this.allNearbyHospitals?.map(
                    (hospitalData: HospitalData, index: number) => {
                      if (index < 6) {
                        const { name, place_id, vicinity } = hospitalData;
                        return html`
                          <div class="hospital-item-wrapper" slot="list-item">
                            <my-hospital-item
                              name=${name}
                              placeId=${place_id}
                              vicinity=${vicinity}
                              county=${this.county}
                              statePostal=${this.statePostal}
                              bedCapacity=${this.bedCapacity}
                              ?selected=${this.selectedHospitalId === place_id}
                              ?expanded=${this.expanded}
                            ></my-hospital-item>
                          </div>
                        `;
                      }
                    }
                  )
                : nothing}
            </md-list>
          </div>
        `
      : nothing;
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

  static get styles() {
    return styles;
  }

  renderContent = () => {
    return this.errorMessage && !this.loading
      ? this.renderErrorMessage()
      : html`
        ${this.renderHospitalList()}
        <div class="right-side">
          <my-hospital-details
            googleApiKey=${this.googleApiKey}
            .map=${this.map}
            place-id=${this.selectedHospitalId}
            county=${this.county}
            statePostal=${this.statePostal}
            bedCapacity=${this.bedCapacity}
            ?expanded=${this.expanded}
          ></my-hospital-details>
        </div>
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
