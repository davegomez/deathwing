const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DEFAULT_PORT = 3000;
const ENTRY_POINT = './app/index.js';

/**
 * Returns a extended object based on the npm script run.
 * @param {Object} base Common configuration.
 * @param {Object} configs Additional configurations.
 * @returns {*} Merged object.
 */
function mergeConfigUsingTarget (base, configs) {
  const target = process.env.npm_lifecycle_event;
  return configs.hasOwnProperty(target) ? merge(base, configs[target]) : base;
}

const common = {
  output: {
    path: 'assets',
    filename: 'main.js',
    publicPath: `/assets/`
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  postcss: () => [autoprefixer]
};

module.exports = mergeConfigUsingTarget(common, {
  // Development
  start: {
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server',
      ENTRY_POINT
    ],
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      port: DEFAULT_PORT
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          loader: 'style!css?sourceMap!postcss!sass?sourceMap',
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  },

  // Production
  build: {
    entry: ENTRY_POINT,
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style', 'css!postcss!sass'),
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('main.css', { allChunks: true }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ]
  }
});
