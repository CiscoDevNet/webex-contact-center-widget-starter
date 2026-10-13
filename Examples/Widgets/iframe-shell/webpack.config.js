const path = require("path");

const notesModules = path.resolve(__dirname, "../Notes/node_modules");

module.exports = {
  mode: "production",
  entry: {
    "header-overflow-widget": "./src/header-overflow-widget.ts",
    "header-fit-widget": "./src/header-fit-widget.ts",
    "header-clip-widget": "./src/header-clip-widget.ts",
    "header-popover-widget": "./src/header-popover-widget.ts",
    "sdk-init-widget": "./src/sdk-init-widget.ts",
    "sibling-bus-publisher": "./src/sibling-bus-publisher.ts",
    "sibling-bus-consumer": "./src/sibling-bus-consumer.ts"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  resolveLoader: {
    modules: [notesModules, "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          compilerOptions: {
            module: "esnext",
            target: "es2019"
          },
          transpileOnly: true
        }
      }
    ]
  }
};
