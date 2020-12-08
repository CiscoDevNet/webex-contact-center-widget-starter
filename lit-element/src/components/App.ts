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

// let map: google.maps.Map;
// const center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };

const loader = new Loader({
  apiKey: "AIzaSyDlVE8flzwPFbSzuGdaaatrGrG3WIULw5I",
  version: "weekly"
});

@customElement("my-custom-component")
export default class MyCustomComponent extends LitElement {
  @property({ type: Number }) latitude = 47.6062;
  @property({ type: Number }) longitude = -122.3321;
  @internalProperty()
  map?: google.maps.Map;
  @query("#map") mapDiv?: HTMLElement;

  initMap = (): void => {
    loader.load().then(() => {
      if (this.mapDiv) {
        this.map = new google.maps.Map(this.mapDiv, {
          center: { lat: 47.6062, lng: -122.3321 },
          zoom: 8
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
  }

  static get styles() {
    return styles;
  }
  render() {
    return html`
      <div class="container">
        <h1>Map Widget</h1>
        <div id="map"></div>
        <slot></slot>
      </div>
    `;
  }
}
