import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import ts from 'typescript';

const buildDir = 'dist'
const esm = 'esm'
const cjs = 'cjs'

const dest = ({ name, format }) => `lib/${name}.${format}.js`

const bundle = ({ name, path, isMain = false }) => ({
  input: `./src/${path}`,
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  output: [
    {
      file: `./${buildDir}/${dest({ format: esm, name })}`,
      format: esm,
      sourcemap: true,
    },
    {
      file: `./${buildDir}/${dest({ format: cjs, name })}`,
      format: cjs,
      sourcemap: true,
    },
    // {
    //   name: 'QuaantumComponents',
    //   file: `./${buildDir}/lib/${name}.udm.js`,
    //   format: 'umd',
    //   sourcemap: true,
    // },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      typescript: ts,
      tsconfig: 'tsconfig.json',
      tsconfigDefaults: {
        exclude: [
          '**/*.spec.ts',
          '**/*.test.ts',
          '**/*.stories.ts',
          '**/*.spec.tsx',
          '**/*.test.tsx',
          '**/*.stories.tsx',
          'node_modules',
          'bower_components',
          'jspm_packages',
          buildDir,
        ],
        compilerOptions: {
          sourceMap: true,
          declaration: true,
        },
      },
    }),
    terser({
      output: {
        comments: false,
      },
    }),
    copy({
      targets: [
        { src: 'LICENSE', dest: buildDir },
        { src: 'README.md', dest: buildDir },
        {
          src: 'package.json',
          dest: isMain ? buildDir : `${buildDir}/${name}`,
          transform: (content) => {
            if (!isMain) {
              return JSON.stringify({
                name: name.toLowerCase(),
                private: true,
                main: `../${dest({ format: cjs, name })}`,
                module: `../${dest({ format: esm, name })}`,
                types: `../lib/${path}`
              }, null, 2)
            }
            const { scripts, devDependencies, husky, release, engines, ...keep } = JSON.parse(
              content.toString()
            );
            return JSON.stringify({
              ...keep,
              module: `lib/${keep.module}`,
              main: `lib/${keep.main}`,
              types: `lib/${keep.types}`,
            }, null, 2);
          },
        },
      ],
    }),
  ],
})

export default [
  bundle({ path: 'index.ts', name: 'index', isMain: true }),
  bundle({ path: 'components/External/ReactRouterLink.tsx', name: 'reactRouterLink' })
];
