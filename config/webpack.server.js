const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

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
      { test: /\.(js)$/, use: 'babel-loader' },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false',
    }),
  ],
};

module.exports = serverConfig;
