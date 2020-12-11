const webpackConfig = require('direflow-component/config-overrides');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Webpack configuration for Direflow Component
 * Additional webpack plugins / overrides can be provided here
 */
module.exports = (config, env) => ({
  ...webpackConfig(config, env),
  entry: "./src/[sandbox]/sandbox.ts",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/[sandbox]/index.html",
      favicon: "./src/[sandbox]/favicon.ico"
    })
  ]
});
