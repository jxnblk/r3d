
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var data = require('./demo/data');

module.exports = {

  entry: './demo/entry.js',

  output: {
    filename: 'bundle.js',
    path: __dirname,
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', ['/'], data)
  ]

};

