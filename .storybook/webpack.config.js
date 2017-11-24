const path = require('path');
const root = path.join(process.cwd(), 'src');

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, '../')
  });

  storybookBaseConfig.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
    ],
  });

  storybookBaseConfig.module.rules.push({
    test: /\.(js|jsx)?$/,
    use: {
      loader: 'babel-loader'
    },
    exclude: /node_modules/
  });

  storybookBaseConfig.resolve = {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
      path.resolve(root)
    ]
  };

  return storybookBaseConfig;
};
