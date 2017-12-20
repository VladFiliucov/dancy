require('babel-register');
require('babel-polyfill');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('../initializers/config/base.js');

module.exports = (storybookBaseConfig, configType) => {
  return merge(storybookBaseConfig, baseConfig);
};
