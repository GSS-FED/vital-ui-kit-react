const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  // For example, add typescript loader:
  // defaultConfig.module.rules.push({
  //   test: /\.(ts|tsx)$/,
  //   include: path.resolve(__dirname, "../src"),
  //   loader: require.resolve("ts-loader")
  // });
  // defaultConfig.resolve.extensions.push(".ts", ".tsx");

  console.log(defaultConfig.node);
  defaultConfig.node = {
    fs: 'empty',
  };

  return defaultConfig;
};
