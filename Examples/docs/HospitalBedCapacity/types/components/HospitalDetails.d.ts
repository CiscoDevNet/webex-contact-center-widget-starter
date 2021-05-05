/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/// <reference types="googlemaps" />
import { LitElement, PropertyValues } from "lit-element";
import "./HospitalItem";
export default class HospitalDetails extends LitElement {
    map?: google.maps.Map;
    placeId: string;
    county: string;
    statePostal: string;
    bedCapacity: string;
    expanded: boolean;
    name: string;
    address: string;
    phone: string;
    rating: undefined;
    website: string;
    url: string;
    user_ratings_total: undefined;
    isOpen: boolean;
    image: string;
    loading: boolean;
    errorMessage: string;
    update(changeProperties: PropertyValues): Promise<void>;
    fetchPlaceDetails: () => void;
    renderLoading: () => import("lit-element").TemplateResult;
    renderErrorMessage: () => import("lit-element").TemplateResult;
    renderSubHeader: () => import("lit-element").TemplateResult;
    expandedHospitalDetails: () => import("lit-element").TemplateResult;
    renderWarningBlock: () => {};
    renderHospitalDetails: () => import("lit-element").TemplateResult;
    renderImage: () => {};
    renderContent: () => import("lit-element").TemplateResult;
    static get styles(): import("lit-element").CSSResult;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=HospitalDetails.d.ts.map