const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const serverConfig = {
  entry: path.join(__dirname, '../src/server/index.js'),
  target: 'node',
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
  resolve: {
    alias: {
      client: path.join(__dirname, '../src/client')
    }
  },
  plugins: [
    new webpack.DefinePlugin({ __CLIENT__: false, __SERVER__: true, __PRODUCTION__: true, __DEV__: false }),
    new CleanWebpackPlugin(['build'], {
      root: path.join(__dirname, '..'),
      exclude: ['server.js', 'bundle.js', 'index.html'],
      verbose: false
    })
  ],
  stats: 'errors-only'
};

module.exports = serverConfig;
