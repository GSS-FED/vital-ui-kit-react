import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import autoExternal from 'rollup-plugin-auto-external';
import typescript from 'rollup-plugin-typescript2';
import css from 'rollup-plugin-css-only';
import fs from 'fs-extra';

const config = {
  external: [
    'react',
    'react-dom',
    'styled-components',
  ],
  input: 'src/index.ts',
  output: [{
    file: 'dist/index.js',
    format: 'esm',
    sourcemap: true,
  }, {
    file: 'cjs/index.js',
    format: 'cjs',
    sourcemap: true,
  }],
  plugins: [
    resolve(),
    commonjs(),
    autoExternal(),
    typescript({ useTsconfigDeclarationDir: true }),
    css({
      output: function(styles) {
        fs.ensureDirSync('dist/');
        fs.writeFileSync('dist/index.css', styles);
        fs.ensureDirSync('cjs/');
        fs.writeFileSync('cjs/index.css', styles);
      },
    }),
  ],
};

export default config;

