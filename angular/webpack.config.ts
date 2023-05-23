/* eslint-disable @typescript-eslint/no-explicit-any */
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
import merge from 'webpack-merge';

const pSrc = path.resolve('src');
const pDist = path.resolve('dist');
const pAssets = path.resolve('src/assets');
const pModules = path.resolve('node_modules');
export const pBuild = path.resolve('build');

const common: webpack.Configuration = {
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.json$/,
        include: pSrc,
        exclude: /node_modules/,
        use: 'json-loader',
      },
      {
        test: /\.(js)x?$/,
        include: pSrc,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.mjs', '.ts', '.js'],
  },
};

function ruleTS({ isDev }: { isDev: boolean }) {
  return {
    test: /\.ts$/,
    loader: 'ts-loader',
    include: pSrc,
    exclude: /node_modules/,
    options: {
      compilerOptions: {
        declarationMap: isDev,
        sourceMap: isDev,
      },
    },
  };
}

// DEV
// ----------

export const commonDev = merge(common, {
  name: 'dev',
  mode: 'development',
  devtool: 'source-map',
  entry: `${pSrc}/main.ts`,
  target: 'node',
  output: {
    path: pDist,
  },
  module: {
    rules: [ruleTS({ isDev: true })],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico',
    }),
  ],
});

const dev = merge(commonDev, {
  plugins: [new CleanWebpackPlugin()],
});

// DIST
// ----------

const commonDist = merge(common, {
  devtool: 'source-map',
  entry: {
    index: './src/main.ts',
  },
  output: {
    path: pDist,
    filename: '[name].js',
    libraryTarget: 'umd',
  },
  node: {
    __dirname: false,
  },
  target: 'web',
  plugins: [],
});

const distDev = merge(commonDist, {
  name: 'distDev',
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [ruleTS({ isDev: true })],
  },
});

const distProd = merge(commonDist, {
  name: 'distProd',
  mode: 'production',
  module: {
    rules: [ruleTS({ isDev: false })],
  },
});

export default [dev, distDev, distProd];
