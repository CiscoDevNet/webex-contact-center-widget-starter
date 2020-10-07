/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { createHttp, createLoader, createLogger, createNotifications } from "@uuip/unified-ui-platform-sdk";

/**
 * Please provide your unique namespace for logger to identify the originator
 */
export const logger = createLogger("wcc-widget");
export const http = createHttp();
export const notifications = createNotifications();
export const scriptLoader = createLoader();