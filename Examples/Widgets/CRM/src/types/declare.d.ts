/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

declare module "*.scss" {
  const css: CSSResult;
  export default css;
}

declare module "*.svg" {
  const svg: any;
  export default svg;
}

type CustomerVisit = {
  title: string;
  summary: string;
  date: string;
  time: string;
  facility: string;
  clinician: string;
  department: string;
  condition: string;
  type: string;
  O2Stat: number;
};
