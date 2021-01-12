/* eslint-disable @typescript-eslint/ban-ts-ignore */
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
import { map as lightMap } from "./lightMap";
import { darkMap } from "./darkMap";
import { nothing } from "lit-html";
@customElement("map-component")
export default class MyCustomComponent extends LitElement {
  @property({ type: Number, reflect: true }) latitude = 47.6062;
  @property({ type: Number, reflect: true }) longitude = -122.3321;
  @property({ type: String, reflect: true }) search = "";
  @property({ type: Boolean, reflect: true, attribute: "search-enabled" })
  searchEnabled = false;
  @property({ type: String, reflect: true, attribute: "api-key" }) apiKey = "";
  @property({ type: Number, reflect: true }) zoom = 12;

  @internalProperty() lumos = false;
  @internalProperty() darkTheme = false;

  @internalProperty() map?: google.maps.Map;
  @internalProperty() markers?: google.maps.places.PlaceResult[];
  @query("#map") mapDiv?: HTMLElement;
  @query("#pac-input") searchInput?: HTMLInputElement;

  @internalProperty() loader = new Loader({
    apiKey: this.apiKey,
    version: "weekly",
    libraries: ["places"]
  });

  closestElement(selector: string, base = this) {
    function __closestFrom(el: unknown): HTMLElement | null {
      if (!el || el === document || el === window) return null;
      // @ts-ignore
      const found = el.closest(selector);
      // @ts-ignore
      return found ? found : __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
  }

  refreshTokenData = () => {
    const themeWrapper: unknown = this.closestElement("md-theme");
    // @ts-ignore
    this.lumos = themeWrapper.lumos;
    // @ts-ignore
    this.darkTheme = themeWrapper.darkTheme;
    const mapTheme = this.darkTheme ? darkMap : lightMap;
    this.map?.setOptions({ styles: mapTheme });
  };

  connectedCallback() {
    super.connectedCallback();
    this.loader.apiKey = this.apiKey;
  }

  firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    document.addEventListener("theme-changed", this.refreshTokenData);
    this.initMap();
  }

  update(changedProperties: PropertyValues) {
    super.update(changedProperties);
    if (
      changedProperties.has("search") ||
      changedProperties.has("latitude") ||
      changedProperties.has("longitude") ||
      changedProperties.has("searchEnabled") ||
      changedProperties.has("zoom")
    ) {
      this.initMap();
    }
  }

  updatePins = (places: google.maps.places.PlaceResult[]) => {
    let markers: google.maps.Marker[] = [];

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    async function clearMarkers() {
      markers.forEach(marker => {
        marker.setMap(null);
      });
      markers = [];
    }

    clearMarkers().then(() => {
      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();
      places.forEach(place => {
        if (!place.geometry) {
          return;
        }
        const icon = {
          url: place.icon as string,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        markers.push(
          new google.maps.Marker({
            map: this.map,
            icon,
            title: place.name,
            position: place.geometry.location
          })
        );

        if (place.geometry.viewport) {
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      this.map!.fitBounds(bounds);
    });
  };

  initMap = () => {
    if (!this.map) {
      const mapTheme = this.darkTheme ? darkMap : lightMap;
      this.loader
        .load()
        .then(() => {
          if (this.mapDiv) {
            this.map = new google.maps.Map(this.mapDiv, {
              center: { lat: this.latitude, lng: this.longitude },
              zoom: this.zoom,
              styles: mapTheme,
              mapTypeControl: false
            });

            this.mountSearchInput();
          }
        })
        .then(() => this.updateAttributeSearch());
    } else {
      this.updateAttributeSearch().then(() => {
        this.map?.panTo({ lat: this.latitude, lng: this.longitude });
        this.refreshTokenData();
        this.mountSearchInput();
      });
    }
  };

  updateAttributeSearch = async () => {
    if (this.map && this.search) {
      const places = new google.maps.places.PlacesService(this.map);
      const attributeQuery = this.search.split(" ").join("%") || undefined;
      places.nearbySearch(
        {
          keyword: attributeQuery,
          location: { lat: this.latitude, lng: this.longitude },
          radius: 50000
        },
        results => {
          this.updatePins(results);
        }
      );
    }
  };

  mountSearchInput = () => {
    if (this.searchEnabled) {
      this.map!.controls[google.maps.ControlPosition.TOP_LEFT].push(
        this.searchInput as Node
      );

      // Create the search box and link it to the UI element.
      const searchBox = new google.maps.places.SearchBox(this.searchInput!);

      // Bias the SearchBox results towards current map's viewport.
      this.map!.addListener("bounds_changed", () => {
        searchBox.setBounds(this.map?.getBounds() as google.maps.LatLngBounds);
      });

      // Listen for the event fired when the user selects a prediction and retrieve
      // more details for that place.
      searchBox.addListener("places_changed", () => {
        this.updatePins(searchBox.getPlaces());
      });
    }
  };

  generateSearchInput = () => {
    return html`
      <md-input
        id="pac-input"
        class="controls"
        type="text"
        shape="pill"
        placeholder="${this.search}"
      ></md-input>
    `;
  };

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <div class="container">
        ${(this.searchEnabled && this.generateSearchInput()) || nothing}
        <div id="map"></div>
      </div>
    `;
  }
}
