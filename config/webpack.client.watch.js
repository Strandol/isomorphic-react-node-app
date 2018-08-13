const webpack = require('webpack');
const config = require('./webpack.client');
const path = require('path');
// config.output.publicPath = config.devServer.publicPath;

const modified = {
  ...config,
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    hot: true,
    open: true,
    stats: { colors: true },
    noInfo: true,
    before() {
      console.log("Bundle process...\n");
    },
    after() {
      console.log("Client application is running on port :8080");
    }
  },
  plugins: [
    new webpack.DefinePlugin({ __CLIENT__: true, __SERVER__: false, __PRODUCTION__: false, __DEV__: true }),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = modified;
