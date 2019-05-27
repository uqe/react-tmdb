const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const aliases = require('./aliases');

module.exports = {
  mode: 'production',
  entry: {
    app: ['@babel/polyfill', aliases.entryPoint]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0
        },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true
        }
      }
    }
  },
  output: {
    filename: 'static/[name].[hash].js'
  },
  devtool: 'none',
  plugins: [
    new webpack.IgnorePlugin(/redux-logger/),
    new CompressionPlugin({ filename: '[path].gz[query]', algorithm: 'gzip', test: /\.js$/, threshold: 0, minRatio: 0.8 })
  ]
};
