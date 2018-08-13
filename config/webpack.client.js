const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const clientConfig = {
  entry: path.join(__dirname, '../src/client/index.js'),
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader', exclude: /node_modules/ },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, '../assets/index.html'),
      filename: './index.html'
    })
  ],
  optimization: {
    minimize: true,
    occurrenceOrder: true
  }
};

module.exports = clientConfig;
