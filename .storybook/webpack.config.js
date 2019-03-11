const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = ({ config, mode }) => {
  //babel-loader@8 installed and @babel/core@7
  config.module.rules[0].use[0].loader = require.resolve(
    'babel-loader',
  );

  config.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env'),
  ];

  // any plugin you want to add
  config.module.rules[0].use[0].options.plugins = [
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
// const path = require('path');
// module.exports = ({ config }) => {
//   config.module.rules.push({
//     test: /\.(ts|tsx)$/,
//     use: [
//       {
//         loader: require.resolve('babel-loader'),
//         options: {
//           babelrc: false,
//           presets: [
//             [
//               'react-app',
//               {
//                 flow: false,
//                 typescript: true,
//               },
//             ],
//           ],
//           plugins: ['babel-plugin-styled-components'],
//         },
//       },
//       {
//         loader: require.resolve('react-docgen-typescript-loader'),
//       },
//       {
//         loader: require.resolve(
//           '@storybook/addon-storysource/loader',
//         ),
//         options: { parser: 'typescript' },
//       },
//     ],
//   });
//   config.resolve.plugins = [
//     new TsconfigPathsPlugin({
//       configFile: 'tsconfig.storybook.json',
//     }),
//   ];
//   config.resolve.extensions.push('.ts', '.tsx');
//   return config;
// };
