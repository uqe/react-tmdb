const webpack = require('webpack');
const aliases = require('./aliases');
const CompressionPlugin = require('compression-webpack-plugin');

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
  devtool: 'source-map',
  plugins: [
    new webpack.IgnorePlugin(/redux-logger/),
    new CompressionPlugin({ asset: '[path].gz[query]', algorithm: 'gzip', test: /\.js$/, threshold: 0, minRatio: 0.8 })
  ]
};
