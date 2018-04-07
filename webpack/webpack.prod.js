const webpack = require('webpack');
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
  plugins: [new webpack.IgnorePlugin(/redux-logger/)]
};
