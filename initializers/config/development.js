const NODE_ENV = process.env.NODE_ENV || 'development';
const merge = require('webpack-merge');
const baseConfig = require('./base.js');

import webpack from 'webpack';
import path, { resolve } from 'path';

const root = path.join(process.cwd(), 'src');

const config =  {
  entry: {
    bundle: ['react-hot-loader/patch', 'webpack-hot-middleware/client', 'babel-polyfill', 'index.js'],
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
    new webpack.DefinePlugin({
      __SERVER__: false,
      __CLIENT__: true,
      __DEVELOPMENT__: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => (
        module.context && module.context.indexOf('node_modules') !== -1
      )
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

export default merge(baseConfig, config);

