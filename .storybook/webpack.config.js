const path = require('path');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');
// const CircularDependencyPlugin = require('circular-dependency-plugin')

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader'),
    options: {
      configFileName: 'tsconfig.storybook.json',
    },
  });
  config.plugins.push(
    new TSDocgenPlugin(),
    // new CircularDependencyPlugin({
    // exclude detection of files based on a RegExp
    // exclude: /a\.js|node_modules/,
    // add errors to webpack instead of warnings
    // failOnError: true,
    // set the current working directory for displaying module paths
    // cwd: process.cwd(),
    // })
  );
  config.resolve.extensions.push('.ts', '.tsx', 'jsx');
  return config;
};
