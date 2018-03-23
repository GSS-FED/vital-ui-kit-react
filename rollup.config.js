import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import uglify from 'rollup-plugin-uglify';
import url from 'rollup-plugin-url';
import flow from 'rollup-plugin-flow';
import globals from 'rollup-plugin-node-globals'

export default {
  input: 'packages/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  // All the used libs needs to be here
  external: [
    'react',
    'react-proptypes',
    "polished",
    "rc-trigger",
    "react-click-outside",
    'rezie-observer-polyfill',
    'styled-components',
    'styled-is',
    'styled-theme',
  ],
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    flow(),
    postcss({modules: true}),
    babel({
      exclude: 'node_modules/**',
      externalHelpers: true
    }),
    url(),
    uglify(),
    globals(),
    commonjs()
  ]
}
