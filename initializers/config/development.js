const NODE_ENV = process.env.NODE_ENV || 'development';

import path, { resolve } from 'path';

const root = path.join(process.cwd(), 'src');

export default {
  context: root,

  entry: ['babel-polyfill', 'index.js'],

  output: {
    filename: 'bundle.js',
    publicPath: '/assets/'
  },

  devServer: {
    contentBase: path.join(root, 'assets'),
    publicPath: '/assets/',
    port: 9090
  },

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
              importLoaders: 1
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

