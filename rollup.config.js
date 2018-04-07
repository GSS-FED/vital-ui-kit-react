import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import uglify from 'rollup-plugin-uglify';
import url from 'rollup-plugin-url';
import flow from 'rollup-plugin-flow';
import visualizer from 'rollup-plugin-visualizer';
// import globals from 'rollup-plugin-node-globals';
import pkg from './package.json';

const commonPlugins = [
  resolve({
    jsnext: true,
    main: true,
    browser: true
  }),
  flow({ pretty: true }),
  postcss({ modules: true }),
  babel({
    exclude: 'node_modules/**',
    externalHelpers: true
  }),
  url(),
  commonjs()
];

const configBase = {
  input: 'packages/web/src/index.js',
  external: ['react'].concat(Object.keys(pkg.dependencies)),
  plugins: commonPlugins
};

const serverConfig = Object.assign({}, configBase, {
  output: [
    { file: 'packages/web/dist/vitail-ui-kit.es.js', format: 'es' },
    Object.assign({}, { format: 'cjs', file: 'packages/web/dist/vital-ui-kit.cjs.js' })
  ]
});

// const umdConfig

const minifyConfig = Object.assign({}, configBase, {
  output: {
    file: 'packages/web/dist/vital-ui-kit.min.js',
    format: 'cjs'
  },
  plugins: [
    uglify({
      sourceMap: true,
    }),
    visualizer({ filename: './bundle-stats.html' }),
  ].concat(commonPlugins)
})

export default [
  serverConfig,
  minifyConfig
];
