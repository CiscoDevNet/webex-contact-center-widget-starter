/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import merge from "webpack-merge";
import { commonDev, pBuild } from "./webpack.config";

export default merge(commonDev, {
  devServer: {
    contentBase: pBuild,
    historyApiFallback: true,
    open: true,
    hot: true,
    port: 8888,
  },
});
