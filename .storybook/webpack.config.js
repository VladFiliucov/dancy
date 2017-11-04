const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const path = require('path');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  // Extend it as you need.

  config.resolve.modules.push(path.resolve(process.cwd(), 'src'));

  config.module.rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, '../')
  });

  config.module.rules.push({
    test: /\.(js|jsx)?$/,
    use: {
      loader: 'babel-loader'
    },
    exclude: /node_modules/
  });

  return config;
};
