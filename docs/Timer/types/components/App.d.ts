/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Duration } from "luxon";
import { LitElement } from "lit-element";
import "./time-circle";
export default class TimerComponent extends LitElement {
    duration: string;
    remaining: string;
    paused: boolean;
    hoursColor: string;
    minutesColor: string;
    secondsColor: string;
    endTime: string;
    durationData: Duration;
    remainingHours: string;
    remainingMinutes: string;
    remainingSeconds: string;
    container: HTMLElement;
    get storedStartTime(): string;
    get storedDuration(): string;
    connectedCallback(): void;
    setDuration: (startTime: string, duration: string) => void;
    resetTimer: () => Promise<void>;
    static get styles(): import("lit-element").CSSResult;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=App.d.ts.map