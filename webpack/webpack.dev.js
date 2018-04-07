const webpack = require('webpack');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const aliases = require('./aliases');

module.exports = {
  mode: 'development',
  entry: {
    app: ['@babel/polyfill', 'react-hot-loader/patch', aliases.entryPoint]
  },
  output: {
    filename: '[name].[hash].js'
  },
  devtool: 'inline-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin(), new ErrorOverlayPlugin()],
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true,
    open: true,
    disableHostCheck: true
  }
};
