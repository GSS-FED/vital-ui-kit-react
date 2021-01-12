import autoExternal from 'rollup-plugin-auto-external';
import typescript from 'rollup-plugin-typescript2';

const config = {
  input: 'src/index.tsx',
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
  ],
};

export default config;
