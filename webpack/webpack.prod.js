const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const aliases = require('./aliases');

module.exports = {
  mode: 'production',
  entry: {
    app: ['@babel/polyfill', aliases.entryPoint]
  },
  output: {
    filename: 'static/[name].[hash].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/styles.[name].css'
    })
  ]
};
