const commonConfig = require('./webpack/webpack.common');
const webpackMerge = require('webpack-merge');

module.exports = env => {
  const analyzerConfig = env.bundlesize === 'true' ? require(`./webpack/bundlesize.js`) : '';
  const envConfig = require(`./webpack/webpack.${env.env}.js`);
  const mergedConfig = webpackMerge(commonConfig, envConfig, analyzerConfig);

  return mergedConfig;
};
