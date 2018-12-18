const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = (defaultConfig, env, config) => {
  //babel-loader@8 installed and @babel/core@7
  defaultConfig.module.rules[0].use[0].loader = require.resolve(
    'babel-loader',
  );

  defaultConfig.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env'),
  ];

  // any plugin you want to add
  defaultConfig.module.rules[0].use[0].options.plugins = [
    require.resolve('@babel/plugin-proposal-object-rest-spread'),
    require.resolve('babel-plugin-styled-components'),
  ];

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          babelrc: false,
          presets: [
            require.resolve('@babel/preset-react'),
            require.resolve('@babel/preset-env'),
          ],
          plugins: [
            require.resolve(
              '@babel/plugin-proposal-object-rest-spread',
            ),
            require.resolve('babel-plugin-styled-components'),
          ],
        },
      },
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      { loader: 'react-docgen-typescript-loader' },
      // {
      //   loader: require.resolve("awesome-typescript-loader"),
      //   options: {
      //     useCache: true,
      //     useBabel: true,
      //     configFileName: 'tsconfig.storybook.json',
      //     babelCore: '@babel/core',
      //   },
      // },
      {
        loader: require.resolve(
          '@storybook/addon-storysource/loader',
        ),
        options: {
          parser: 'typescript',
        },
      },
    ],
  });
  config.resolve.plugins = [
    new TsconfigPathsPlugin({
      configFile: 'tsconfig.storybook.json',
    }),
  ];
  config.resolve.extensions.push('.ts', '.tsx', '.json');
  return config;
};
