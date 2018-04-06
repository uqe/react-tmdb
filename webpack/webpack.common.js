const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const aliases = require('./aliases');

module.exports = {
  entry: {},
  output: {
    path: aliases.outputPath,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         chunks: 'initial',
  //         test: 'vendor',
  //         name: 'vendor',
  //         enforce: true
  //       }
  //     }
  //   }
  // },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'TMDb',
      template: 'public/index.html',
      favicon: aliases.favicon,
      minify: {
        removeComments: true,
        sortAttributes: true,
        useShortDoctype: true,
        collapseWhitespace: true,
        conservativeCollapse: true
      }
    }),
    new Dotenv({
      safe: false
    })
  ]
};
