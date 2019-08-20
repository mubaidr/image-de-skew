import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
import { terser } from 'rollup-plugin-terser'

const pkg = require('./package.json')

const production = !process.env.ROLLUP_WATCH

export default [
  {
    input: 'src/index.js',
    output: {
      file: `dist/${pkg.name}.min.js`,
      format: 'umd',
      name: pkg.name,
      sourcemap: true,
      sourcemapFile: `dist/${pkg.name}.min.js.map`,
    },
    plugins: [
      resolve(),
      commonjs(),
      json(),
      babel({
        babelrc: true,
        runtimeHelpers: true,
      }),
      production && terser(),
    ],
  },
  {
    input: 'src/index.js',
    output: {
      file: `docs/${pkg.name}.min.js`,
      format: 'umd',
      name: pkg.name,
      sourcemap: true,
      sourcemapFile: `docs/${pkg.name}.min.js.map`,
    },
    plugins: [
      resolve(),
      commonjs(),
      json(),
      babel({
        babelrc: true,
        runtimeHelpers: true,
      }),
      production && terser(),
    ],
  },
  {
    input: 'src/index.js',
    output: {
      file: `dist/${pkg.name}.js`,
      format: 'umd',
      name: pkg.name,
      sourcemap: true,
      sourcemapFile: `dist/${pkg.name}.js.map`,
    },
    plugins: [
      resolve(),
      commonjs(),
      json(),
      babel({
        babelrc: true,
        runtimeHelpers: true,
      }),
    ],
    watch: {
      clearScreen: true,
    },
  },
]
