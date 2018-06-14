const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.
  const appFolder = path.resolve(__dirname, '../../');
  // Include other packages becase it is out of scope.
  defaultConfig.module.rules.forEach(rule => {
    if ('.jsx'.match(rule.test)) {
      if (rule.include) {
        rule.include.push(path.resolve(__dirname, '../../packages/web/src'))
      }
      if (rule.exclude) {
        rule.exclude.push(path.resolve(__dirname, '../../packages/web/node_modules'))
      }      
    }
    defaultConfig.resolve.alias = {
      ...defaultConfig.resolve.alias,
      'styled-components': path.resolve(appFolder, 'node_modules', 'styled-components'),
    }
  });

  return defaultConfig;
};
