/**
 * # Babel-based transpiling environment for React components
 * Bit build enviroment for transpiling React components using Bit.
 *
 * ## How to use?
 *
 * Import the environment
 * ```bash
 *  bit import bit.envs/compilers/react -c
 * ```
 *
 * ## What's inside
 * - Babel with JSX and [babel-preset-latest](https://babeljs.io/docs/plugins/preset-latest/).
 */
const babel = require('babel-core');
const Vinyl = require('vinyl');
const path = require('path');

require('babel-plugin-transform-class-properties');
require('babel-plugin-transform-object-rest-spread');
require('babel-plugin-transform-react-jsx');
require('babel-preset-env');
require('babel-preset-react');
require("babel-plugin-transform-decorators-legacy");
const plugins = [
  // enable import syntax
  require.resolve('babel-plugin-transform-class-properties'),
  [
    require.resolve('babel-plugin-transform-object-rest-spread'),
    {
      useBuiltIns: true,
    },
  ],
  [
    require.resolve('babel-plugin-transform-react-jsx'),
    {
      useBuiltIns: true,
    },
  ],
  [
    require.resolve('babel-plugin-transform-regenerator'),
    {
      async: false,
    },
  ],
  [
    require.resolve('babel-plugin-transform-decorators-legacy'),
    {
      async: false,
    },
  ]
];

const presets = [
  // Latest stable ECMAScript features
  require.resolve('babel-preset-env'),
  // JSX, Flow
  require.resolve('babel-preset-react')
];

function convertNonCompiledContent(file,distPath) {
    let distFile = file.clone();
    distFile.base = distPath;
    distFile.path = path.join(distPath, file.relative);
    return distFile;
}
function runBabel(file, options, distPath) {
  const { code, map } = babel.transform(file.contents.toString(), options);
  const mappings =  new Vinyl({
    contents: new Buffer(map.mappings),
    base: distPath,
    path: path.join(distPath, file.relative),
    basename: file.basename + '.map'
  });

  let distFile = file.clone();
  distFile.base = distPath;
  distFile.path = path.join(distPath, file.relative);
  distFile.contents = code ?  new Buffer(`${code}\n\n//# sourceMappingURL=${mappings.basename}`) : new Buffer(code);
  return [mappings,distFile];
}

function compile(files, distPath) {
  const options = {
    presets: presets,
    sourceMaps: true,
    ast: false,
    minified: false,
    plugins: plugins
  };

  try {
    const filesToCompile = files.filter(file => (file.extname === '.js' || file.extname === '.jsx') )
    const fileToNotCompile = files.filter(file => !(file.extname === '.js' || file.extname === '.jsx') )
    const compiled = (filesToCompile.length === 0) ? [] : filesToCompile.map(file => runBabel(file, options, distPath)).reduce((a, b) => a.concat(b));
    const nonCompiled = fileToNotCompile.map(file => convertNonCompiledContent(file, distPath));
    return compiled.concat(nonCompiled);
  } catch (e) {
    throw e;
  }
}

function getTemplate() {
  return `/** @flow */
import React, { Component } from 'react';

/**
 * My new and awesome React component
 */
class MyComponent extends Component {

}

module.exports = MyComponent;
`;
}

module.exports = {
  compile,
  getTemplate
};



/*const vinylFile = require('vinyl-file');
const file = vinylFile.readSync('/Users/Amit/Desktop/amit2/src/button/button.js');
const file2 = vinylFile.readSync('/Users/Amit/Desktop/amit2/19105661_10212968959042720_4563266308727015864_n.jpg');

  compile([file,file2],'/tmp')*/
