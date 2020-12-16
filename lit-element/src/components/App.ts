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
  @property({ type: String, reflect: true }) address =
    "3211 Belvidere Ave SW, Seattle WA 98126";
  @property({ type: String, reflect: true, attribute: "api-key" }) apiKey = "";
  @property({ type: Number, reflect: true }) zoom = 8;

  @internalProperty() map?: google.maps.Map;
  @query("#map") mapDiv?: HTMLElement;

  initMap = (): void => {
    const loader = new Loader({
      apiKey: this.apiKey,
      version: "weekly",
      libraries: ["places"]
    });

    loader.load().then(() => {
      if (this.mapDiv) {
        this.map = new google.maps.Map(this.mapDiv, {
          center: { lat: this.latitude, lng: this.longitude },
          zoom: this.zoom,
          styles: map
        });
      }
      console.log(this.mapDiv);
      console.log(this.map);
    });
  };

  firstUpdated(changedProperties: PropertyValues) {
    console.log(this.mapDiv);
    super.firstUpdated(changedProperties);
    this.initMap();
    setTimeout(() => {
      this.getAddressMap();
    }, 800);
  }

  getAddressMap = () => {
    if (this.map) {
      const places = new google.maps.places.PlacesService(this.map);
      const query = this.address.split(" ").join("%");
      console.log(query);

      places.textSearch(
        {
          query: `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${query}&inputtype=textquery&key=${this.apiKey}`
        },
        data => {
          console.log(data);
        }
      );
    }
  };

  update(changedProperties: PropertyValues) {
    super.update(changedProperties);
    if (
      changedProperties.has("address") ||
      changedProperties.has("latitude") ||
      changedProperties.has("longitude") ||
      changedProperties.has("zoom")
    ) {
      this.initMap();
    }
  }

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
