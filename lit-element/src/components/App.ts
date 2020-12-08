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

const stylesArray: google.maps.MapTypeStyle[] = [
  {
    featureType: "all",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      },
      {
        color: "#f49f53"
      }
    ]
  },
  {
    featureType: "all",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        color: "#f9ddc5"
      },
      {
        lightness: -7
      }
    ]
  },
  {
    featureType: "poi.business",
    elementType: "all",
    stylers: [
      {
        color: "#645c20"
      },
      {
        lightness: 38
      }
    ]
  },
  {
    featureType: "poi.government",
    elementType: "all",
    stylers: [
      {
        color: "#9e5916"
      },
      {
        lightness: 46
      }
    ]
  },
  {
    featureType: "poi.medical",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#813033"
      },
      {
        lightness: 38
      },
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "all",
    stylers: [
      {
        color: "#645c20"
      },
      {
        lightness: 39
      }
    ]
  },
  {
    featureType: "poi.school",
    elementType: "all",
    stylers: [
      {
        color: "#a95521"
      },
      {
        lightness: 35
      }
    ]
  },
  {
    featureType: "poi.sports_complex",
    elementType: "all",
    stylers: [
      {
        color: "#9e5916"
      },
      {
        lightness: 32
      }
    ]
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        color: "#813033"
      },
      {
        lightness: 43
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#f19f53"
      },
      {
        weight: 1.3
      },
      {
        visibility: "on"
      },
      {
        lightness: 16
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#f19f53"
      },
      {
        lightness: -10
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        lightness: 38
      }
    ]
  },
  {
    featureType: "transit.line",
    elementType: "all",
    stylers: [
      {
        color: "#813033"
      },
      {
        lightness: 22
      }
    ]
  },
  {
    featureType: "transit.station",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#1994bf"
      },
      {
        saturation: -69
      },
      {
        gamma: 0.99
      },
      {
        lightness: 43
      }
    ]
  }
];

@customElement("my-custom-component")
export default class MyCustomComponent extends LitElement {
  @property({ type: Number, reflect: true }) latitude = 47.6062;
  @property({ type: Number, reflect: true }) longitude = -122.3321;
  @property({ type: String, reflect: true }) address =
    "3211 Belvidere Ave SW, Seattle WA 98126";
  @property({ type: Number, reflect: true }) zoom = 8;

  @internalProperty() map?: google.maps.Map;
  @query("#map") mapDiv?: HTMLElement;

  initMap = (): void => {
    loader.load().then(() => {
      if (this.mapDiv) {
        this.map = new google.maps.Map(this.mapDiv, {
          center: { lat: this.latitude, lng: this.longitude },
          zoom: this.zoom,
          styles: stylesArray
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
  update(changedProperties: PropertyValues) {
    super.update(changedProperties);
    console.log(changedProperties);
    if (
      changedProperties.has("latitude") ||
      changedProperties.has("zoom") ||
      changedProperties.has("longitude")
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
        <h1>Map Widget</h1>
        <div id="map"></div>
        <slot></slot>
      </div>
    `;
  }
}
