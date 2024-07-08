import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default {
    input: ['./lib/index.js'],
    plugins: [
        resolve(),
        babel({
            babelHelpers: 'bundled',
            presets: [
                ['@babel/preset-env', { targets: { node: 'current' }, modules: false }],
                '@babel/preset-react'
            ]
        }),
        terser(),
        postcss({
            plugins: [
                require('postcss-import')(),
                require('postcss-preset-env')({
                    stage: 0,
                })
            ],
            extract: true, // Extract CSS to a separate file
            extensions: ['.css'], // Process CSS files only
            minimize: true // Minimize CSS output
        })
    ],
    output: [
        {
            dir: 'dist/esm',
            format: 'es',
            assetFileNames: '[name].[ext]'
        },
        {
            dir: 'dist/cjs',
            format: 'cjs',
            assetFileNames: '[name].[ext]'
        },
        // {
        //   file: 'dist/esm/index.min.js',
        //   format: 'es',
        // },
    ],
    external: ['react', 'jquery', './dist/summernote-lite.min.css', './dist/summernote-lite.min.js']
};