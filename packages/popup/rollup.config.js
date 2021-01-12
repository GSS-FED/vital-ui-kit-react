import autoExternal from 'rollup-plugin-auto-external';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';

const config = {
  external: ['react', 'react-dom', 'styled-components'],
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'cjs/index.js',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    autoExternal(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
  ],
};

export default config;
