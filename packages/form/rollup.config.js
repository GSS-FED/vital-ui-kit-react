import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import autoExternal from 'rollup-plugin-auto-external';
import typescript from 'rollup-plugin-typescript2';

const config = {
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
  ],
};

export default config;

