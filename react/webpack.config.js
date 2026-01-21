const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const pModules = path.resolve("./node_modules");
const pPublic = path.resolve("public");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "react-widget-starter.js",
      library: {
        name: "ReactWidgetStarter",
        type: "umd",
      },
      publicPath: isProduction ? "./" : "/",
      clean: true,
    },
    externals: {
      "@momentum-ui/web-components": "@momentum-ui/web-components",
      "@momentum-ui/core": "@momentum-ui/core",
      "@momentum-ui/icons": "@momentum-ui/icons",
      "@momentum-ui/utils": "@momentum-ui/utils",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      fallback: {
        "process": require.resolve("process/browser"),
        "buffer": require.resolve("buffer/"),
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        },
        {
          test: /\.css$/,
          use: ["to-string-loader", "css-loader"],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          type: "asset/resource",
          generator: {
            filename: "fonts/[name][ext]",
          },
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          type: "asset",
          parser: {
            dataUrlCondition: {
              maxSize: 8192,
            },
          },
          generator: {
            filename: "images/[name][ext]",
          },
        },
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
      new CopyPlugin({
        patterns: [
          { from: `${pModules}/@momentum-ui/core/fonts`, to: `${pPublic}/fonts` },
          { from: `${pModules}/@momentum-ui/core/images`, to: `${pPublic}/images` },
          {
            from: `${pModules}/@momentum-ui/core/css/momentum-ui.min.css`,
            to: `${pPublic}/css`,
          },
          {
            from: `${pModules}/@momentum-ui/core/css/momentum-ui.css`,
            to: `${pPublic}/css`,
          },
          {
            from: `${pModules}/@momentum-ui/core/css/momentum-ui.min.css.map`,
            to: `${pPublic}/css`,
          },
          { from: `${pModules}/@momentum-ui/icons/fonts`, to: `${pPublic}/fonts` },
          {
            from: `${pModules}/@momentum-ui/icons/fonts`,
            to: `${pPublic}/icons/fonts`,
          },
          {
            from: `${pModules}/@momentum-ui/icons/css/momentum-ui-icons.min.css`,
            to: `${pPublic}/css`,
          },
          {
            from: `${pModules}/@momentum-ui/icons/css/momentum-ui-icons.css`,
            to: `${pPublic}/css`,
          },
        ],
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        inject: "body",
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      compress: true,
      port: 3000,
      hot: true,
      historyApiFallback: true,
    },
    optimization: {
      minimize: isProduction,
    },
  };
};
