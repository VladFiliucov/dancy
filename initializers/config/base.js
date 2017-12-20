require('babel-register');
require('babel-polyfill');

import path, { resolve } from 'path';

const root = path.join(process.cwd(), 'src');

module.exports = {
  context: root,

  module: {
    rules: [
      {
        test: /\.(html|svg|jpe?g|png|ttf|woff2?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.(js|jsx)?$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
      resolve(root)
    ]
  }
};

