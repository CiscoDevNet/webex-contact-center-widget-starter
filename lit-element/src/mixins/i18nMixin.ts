/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { LitElement } from "lit-element";
import { i18nMixin as i18nMixinJs, translate } from "lit-element-i18n";

type Constructor<T = {}> = new (...args: any[]) => T;

export function i18nMixin<T extends Constructor<LitElement>>(baseElement: T): Constructor<LitElement> {
  return i18nMixinJs(baseElement);
}

export function t(id: string) {
  if (process.env.NODE_ENV == "test") {
    return id;
  } else {
    return translate(id);
  }
}
