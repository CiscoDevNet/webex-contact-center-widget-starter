const { webpackConfig } = require("direflow-scripts");
const nodeExternals = require("webpack-node-externals");
const CopyPlugin = require("copy-webpack-plugin");

const path = require("path");

const pModules = path.resolve("./node_modules");
const pPublic = path.resolve("public");

module.exports = {
  // WEBPACK
  webpack: (config, env) => {
    let conf = webpackConfig(config, env, {
      filename: "react-widget-starter.js",
    });

    const copyWebpackPlugin = new CopyPlugin([
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
    ]);

    conf.plugins.push(copyWebpackPlugin);

    if (env === "production") {
      conf.externals = [
        nodeExternals({
          modulesFromFile: {
            include: ["peerDependencies"],
            exclude: ["dependencies", "devDependencies"],
          },
        }),
      ];
    } else {
      conf.entry.push(path.resolve("./src/[sandbox]/sandbox.ts"));
    }

    return conf;
  },

  // JEST

  jest: (c) => {
    c.moduleNameMapper["\\.(css)$"] = "<rootDir>/src/__mocks__/styleMock.js";
    c.setupFiles.push("<rootDir>/src/__mocks__/globalMock.js");

    c.transformIgnorePatterns = [
      // '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$', // original pattern
      "[/\\\\]node_modules[/\\\\](?!lit-element|lit-html).+\\.(js|jsx|ts|tsx)$",
      "^.+\\.module\\.(css|sass|scss)$",
    ];

    c.collectCoverage = true;
    c.collectCoverageFrom = ["src/direflow-component/**/*"];
    c.coverageThreshold = {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    };

    c.reporters = ["default"];
    c.testResultsProcessor = "jest-sonar-reporter";

    return c;
  },
};
