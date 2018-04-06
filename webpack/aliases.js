const path = require('path');

module.exports = {
  entryPoint: path.join(__dirname, '../src/index.js'),
  appEntry: path.join(__dirname, '../src'),
  outputPath: path.join(__dirname, '../dist'),
  projectRoot: path.join(__dirname, '../'),
  favicon: path.join(__dirname, '../public/favicon.ico')
};
