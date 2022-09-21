const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-dark-mode",
  ],
  framework: "@storybook/web-components",
  plugins: [
    new HtmlWebpackPlugin({
      filename: "../index.html",
    }),
  ],
};
