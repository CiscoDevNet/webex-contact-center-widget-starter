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
import "./HospitalItem";
import "./HospitalDetails";

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

  @internalProperty() selectedHospitalId = "";

  @internalProperty() map?: google.maps.Map;
  @internalProperty() hospitalIds: Array<string> = [];
  @internalProperty() allNearbyHospitals?: Array<string> = [];
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

    await this.fetchAllCounties()
      .then(() => this.initMap(this.longitude, this.latitude))
      .then(() => this.nearestHospitals());
  }

  async update(changeProperties: PropertyValues) {
    super.update(changeProperties);

    if (changeProperties.has("latitude") || changeProperties.has("longitude")) {
      this.loading = true;
      await this.initMap(this.latitude, this.longitude).then(() => {
        this.getFormattedAddress({ lat: this.latitude, lng: this.longitude });
        this.nearestHospitals();
      });
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
          this.loading = false;
          this.errorMessage = "Unable to find a nearby hospital";
        }
      }
    );
  };

  nearestHospitals = () => {
    this.hospitalIds = [];
    if (this.map) {
      const places = new google.maps.places.PlacesService(this.map);
      return places.nearbySearch(
        {
          location: { lat: this.latitude, lng: this.longitude },
          rankBy: google.maps.places.RankBy.PROMINENCE,
          radius: 250,
          type: "hospital",
          keyword: "establishment",
        },
        (results: any, status: google.maps.places.PlacesServiceStatus) => {
          if (status === "OK") {
            this.allNearbyHospitals = results;
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
            this.loading = false;
            console.error("google api failed to find near by hospital");
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
    const { currentUsageTotal, capacity } = countyData?.actuals?.icuBeds;
    const percentage = `${((currentUsageTotal / capacity) * 100).toFixed(0)}%`;
    this.bedCapacity = percentage;
    return percentage;
  };

  static get styles() {
    return styles;
  }

  handleSelection = (event: CustomEvent) => {
    const selectedIndex = event.detail.selected;
    this.selectedHospitalId = this.hospitalIds[selectedIndex];
  };

  renderHospitalList = () => {
    const ids: Array<string> = [];
    return this.allNearbyHospitals && this.expanded
      ? html`
          <div class=${`hospital-list ${this.expanded ? "expanded" : ""}`}>
            <md-list
              @list-item-change=${(event: CustomEvent) =>
                this.handleSelection(event)}
              activated=${0}
            >
              ${this.allNearbyHospitals
                ? this.allNearbyHospitals?.map(
                    (hospitalData: any, index: number) => {
                      if (index < 6) {
                        const { name, place_id, vicinity } = hospitalData;
                        ids.push(place_id);
                        return html`
                          <my-hospital-item
                            slot="list-item"
                            name=${name}
                            placeId=${place_id}
                            vicinity=${vicinity}
                            county=${this.county}
                            statePostal=${this.statePostal}
                            bedCapacity=${this.bedCapacity}
                            ?selected=${this.selectedHospitalId === place_id}
                            ?expanded=${this.expanded}
                          ></my-hospital-item>
                        `;
                      }
                      this.hospitalIds = ids;
                    }
                  )
                : nothing}
            </md-list>
          </div>
        `
      : nothing;
  };

  render() {
    return html`
      <div class="hospital-widget">
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
        <div id="map"></div>
      </div>
    `;
  }
}
