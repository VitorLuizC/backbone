// @ts-check

import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

/**
 * Get the output options object.
 * @returns {import('rollup').OutputOptions}
 */
function getOutputOptions() {
  return {
    name: 'Backbone',
    format: 'umd',
    sourcemap: true,
    globals: {
      jquery: 'jQuery',
      underscore: '_',
    },
  };
}

/**
 * The options object for Rollup configuration.
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: './src/main.ts',
  output: [
    {
      ...getOutputOptions(),
      file: './backbone.js',
    },
    {
      ...getOutputOptions(),
      file: './backbone-min.js',
      plugins: [terser()],
    }
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
    }),
  ],
};
