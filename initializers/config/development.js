const NODE_ENV = process.env.NODE_ENV || 'development';
const merge = require('webpack-merge');
const baseConfig = require('./base.js');

import path, { resolve } from 'path';

const root = path.join(process.cwd(), 'src');

const config =  {
  entry: ['babel-polyfill', 'index.js'],

  output: {
    filename: 'bundle.js',
    publicPath: '/assets/'
  },

  devServer: {
    contentBase: [
      path.join(root, 'assets'),
      path.join(root, 'static', 'images')
    ],
    publicPath: '/assets/',
    port: 9090
  }
};

export default merge(baseConfig, config);

