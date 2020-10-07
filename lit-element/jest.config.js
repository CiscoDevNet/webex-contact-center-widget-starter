/* eslint-disable */
/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var ignorePattern = ["/node_modules/", "/build/", "/dist/", "/publish/", "/coverage/", "/src/[sandbox]/", "/src/assets/"];
module.exports = {
  collectCoverage: true,
  coverageProvider: "v8",
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.js$": "babel-jest",
    "\\.(png|svg|jpg|jpeg)$": "<rootDir>/jest/imgTransform.js",
    "\\.(scss)$": "<rootDir>/jest/cssTransform.js"
  },
  testRegex: "^.+\\.test\\.ts$",
  testPathIgnorePatterns: ignorePattern,
  coveragePathIgnorePatterns: ignorePattern,
  transformIgnorePatterns: ["/node_modules/?!(@open-wc).+js$"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@css/(.*)$": "<rootDir>/src/assets/styles/$1",
    "^@img/(.*)$": "<rootDir>/src/assets/images/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  globals: {
    "ts-jest": {
      diagnostics: false,
      tsConfig: {
        target: "ES2016",
        module: "esnext",
        moduleResolution: "node",
        allowJs: true,
        strict: true,
        esModuleInterop: true,
        experimentalDecorators: true,
        resolveJsonModule: true
      }
    }
  }
};
