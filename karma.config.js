const karmaWebpack = require('karma-webpack');
const webpack = require('webpack');

module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './node_modules/babel-polyfill/dist/polyfill.min.js',
      'tests/**/*.spec.js',
      'app/components/**/*.spec.js'
    ],
    plugins: [karmaWebpack, 'karma-mocha', 'karma-phantomjs-launcher', 'karma-coverage', 'karma-spec-reporter'],
    browsers: ['PhantomJS'],
    preprocessors: {
      'tests/**/*.spec.js': ['webpack'],
      'app/components/**/*.spec.js': ['webpack']
    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: 'build/reports/coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
      ]
    },
    webpack: {
      module: {
        preLoaders: [
          {
            test: /(\.jsx)|(\.js)$/,
            exclude: /(tests|node_modules|bower_components)\//,
            loader: 'isparta-instrumenter-loader'
          }
        ],
        loaders: [
          {
            test: /\.scss$/,
            loader: 'null'
          },
          {
            test: /\.js$/, exclude: /(bower_components|node_modules)/,
            loader: 'babel'
          }
        ]
      },
      plugins: [
        new webpack.IgnorePlugin(/ReactContext/)
      ]
    },
    webpackMiddleware: { noInfo: true }
  });
};
