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
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Popular Movies',
      template: 'public/index.html',
      favicon: aliases.favicon,
      chunksSortMode: 'none',
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
