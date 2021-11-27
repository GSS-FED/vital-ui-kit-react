const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');

const nextConfig = {
  webpack5: false,
};

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {};
}
/* Without CSS Modules, with PostCSS */
module.exports = withPlugins([[withCSS()]], nextConfig);

/* With CSS Modules */
// module.exports = withCSS({ cssModules: true })

/* With additional configuration on top of CSS Modules */
/*
module.exports = withCSS({
  cssModules: true,
  webpack: function (config) {
    return config;
  }
});
*/
