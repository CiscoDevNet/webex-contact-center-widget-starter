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
  query,
  PropertyValues,
  property
} from "lit-element";
import styles from "./App.scss";
import { Loader } from "@googlemaps/js-api-loader";
// import {} from "googlemaps";
import { map } from "./lightMap";
@customElement("my-custom-component")
export default class MyCustomComponent extends LitElement {
  @property({ type: Number, reflect: true }) latitude = 47.6062;
  @property({ type: Number, reflect: true }) longitude = -122.3321;
  @property({ type: String, reflect: true }) search = "";
  @property({ type: String, reflect: true, attribute: "api-key" }) apiKey = "";
  @property({ type: Number, reflect: true }) zoom = 12;

  @internalProperty() map?: google.maps.Map;
  @internalProperty() markers?: google.maps.places.PlaceResult[];
  @query("#map") mapDiv?: HTMLElement;

  firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    this.initMap();
  }

  update(changedProperties: PropertyValues) {
    super.update(changedProperties);
    if (
      changedProperties.has("search") ||
      changedProperties.has("latitude") ||
      changedProperties.has("longitude") ||
      changedProperties.has("zoom")
    ) {
      this.initMap();
    }
  }

  initMap = () => {
    const loader = new Loader({
      apiKey: this.apiKey,
      version: "weekly",
      libraries: ["places"]
    });

    if (!this.map) {
      loader
        .load()
        .then(() => this.getAddressMap())
        .then(() => {
          console.log("FART TWO");
          if (this.mapDiv) {
            this.map = new google.maps.Map(this.mapDiv, {
              center: { lat: this.latitude, lng: this.longitude },
              zoom: this.zoom,
              styles: map
            });

            new google.maps.Marker({
              position: { lat: this.latitude, lng: this.longitude },
              map: this.map,
              title: "Hello World!"
            });
          }
        });
    } else {
      this.getAddressMap()
        .then(() =>
          this.map?.panTo({ lat: this.latitude, lng: this.longitude })
        )
        .then(() => {
          new google.maps.Marker({
            position: { lat: this.latitude, lng: this.longitude },
            map: this.map,
            title: "Hello World!"
          });
        });
    }
  };

  getAddressMap = async () => {
    console.log("FART ONE");
    if (this.map) {
      const places = new google.maps.places.PlacesService(this.map);
      const query = this.search.split(" ").join("%");

      places.nearbySearch(
        {
          keyword: query,
          location: { lat: this.latitude, lng: this.longitude },
          radius: 50000
        },
        (results, status) => {
          console.log(query, results, status);
          // if (data.length > 1) {
          //   debugger;
          // }
          // this.markers = data;
          // this.latitude = data[0].geometry?.location.lat()!;
          // this.longitude = data[0].geometry?.location.lng()!;
        }
      );
    }
  };

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <div class="container">
        <div id="map"></div>
      </div>
    `;
  }
}
