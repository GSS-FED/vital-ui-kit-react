const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  // Include table package becase it is out of scope.
  defaultConfig.module.rules.forEach(rule => {
    if ('.jsx'.match(rule.test)) {
      if (rule.include) {
        rule.include.push(path.resolve(__dirname, '../../table'))
      }
      if (rule.exclude) {
        rule.exclude.push(path.resolve(__dirname, '../../table/node_modules'))
      }
    }
  });

  return defaultConfig;
};
