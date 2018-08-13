const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const serverConfig = {
  entry: path.join(__dirname, '../src/server/index.js'),
  target: 'node',
  devtool: 'source-map',
  externals: [nodeExternals()],
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'server.js',
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader', exclude: /node_modules/ },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ __CLIENT__: false, __SERVER__: true, __PRODUCTION__: true, __DEV__: false }),
  ],
};

module.exports = serverConfig;
