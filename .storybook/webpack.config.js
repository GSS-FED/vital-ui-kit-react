const path = require('path');
// const CircularDependencyPlugin = require('circular-dependency-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, '../'),
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      { loader: 'react-docgen-typescript-loader' },
    ],
    // options: {
    //   useCache: true,
    //   useBabel: true,
    //   configFileName: 'tsconfig.storybook.json',
    //   babelCore: '@babel/core',
    // },
  });
  config.plugins
    .push
    // new CircularDependencyPlugin({
    // exclude detection of files based on a RegExp
    // exclude: /a\.js|node_modules/,
    // add errors to webpack instead of warnings
    // failOnError: true,
    // set the current working directory for displaying module paths
    // cwd: process.cwd(),
    // })
    ();
  config.resolve.plugins = [
    new TsconfigPathsPlugin({
      configFile: 'tsconfig.storybook.json',
    }),
  ];
  config.resolve.extensions.push('.ts', '.tsx', 'jsx');
  return config;
};
