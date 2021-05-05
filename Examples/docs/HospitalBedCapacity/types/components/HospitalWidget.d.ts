/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/// <reference types="googlemaps" />
import { LitElement, PropertyValues } from "lit-element";
import { Loader } from "@googlemaps/js-api-loader";
import "./HospitalItem";
import "./HospitalDetails";
declare global {
    interface Window {
        gm_authFailure: any;
    }
}
declare type HospitalData = {
    place_id: string;
    name: string;
    vicinity: string;
};
export default class HospitalWidget extends LitElement {
    /**
     * Property googleApiKey
     * Access your API key from Google Maps Platform
     * https://cloud.google.com/maps-platform
     */
    googleApiKey: string;
    /**
     * Property: covidApiKey
     * Access API Key: Covid Act Now Website
     * https://apidocs.covidactnow.org/access
     */
    covidApiKey: string;
    latitude: number;
    longitude: number;
    expanded: boolean;
    statePostal: string;
    county: string;
    bedCapacity: string;
    hospitalName: string;
    hospitalAddress: string;
    hospitalImage: string;
    selectedHospitalId: string;
    map?: google.maps.Map;
    hospitalIds: Array<string>;
    allNearbyHospitals?: Array<HospitalData>;
    nearestHospitalData?: any;
    allUSACounties?: any;
    countyData?: any;
    loading: boolean;
    errorMessage: string;
    covidAPIError: boolean;
    hospitalWidget: HTMLDivElement;
    mapDiv?: HTMLElement;
    loader: Loader;
    connectedCallback(): void;
    firstUpdated(changeProperties: PropertyValues): Promise<void>;
    update(changeProperties: PropertyValues): Promise<void>;
    setErrorMsg: (message: string, error?: any) => void;
    initMap: (latitude: number, longitude: number) => Promise<void>;
    getFormattedAddress: (lat: number, lng: number) => void;
    nearestHospitals: (map: google.maps.Map | undefined, latitude: number, longitude: number) => void;
    fetchAllCounties: () => Promise<void>;
    fetchCountyData: (statePostal: string, county: string) => void;
    fetchCountyBedCapacity: (countyData: any) => void;
    handleSelection: (event: CustomEvent) => void;
    renderHospitalList: () => {};
    renderLoading: () => import("lit-element").TemplateResult;
    renderErrorMessage: () => import("lit-element").TemplateResult;
    static get styles(): import("lit-element").CSSResult;
    renderContent: () => import("lit-element").TemplateResult;
    render(): import("lit-element").TemplateResult;
}
export {};
//# sourceMappingURL=HospitalWidget.d.ts.map