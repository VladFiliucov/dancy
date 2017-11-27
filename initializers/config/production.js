const NODE_ENV = process.env.NODE_ENV || 'development';
const merge = require('webpack-merge');
const baseConfig = require('./base.js');

import webpack from 'webpack';
import path, { resolve } from 'path';

import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
const root = path.join(process.cwd(), 'src');

const config =  {
  entry: {
    bundle: ['babel-polyfill', 'index.js'],
  },

  output: {
    filename: '[name].js',
    publicPath: '/assets/'
  },

  devServer: {
    contentBase: [
      path.join(root, 'assets'),
      path.join(root, 'static', 'images')
    ],
    publicPath: '/assets/',
    port: 9090
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => (
        module.context && module.context.indexOf('node_modules') !== -1
      )
    }),
    new UglifyJSPlugin()
  ]
};

export default merge(baseConfig, config);
