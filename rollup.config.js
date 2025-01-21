import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { readFileSync } from 'fs';

export default {
    input: './lib/index.js',
    plugins: [
        resolve({
            extensions: ['.js', '.jsx'],
        }),
        babel({
            babelHelpers: 'bundled',
            presets: [
                ['@babel/preset-env', { targets: { node: 'current' }, modules: false }],
                '@babel/preset-react'
            ]
        }),
        {
            name: 'inline-summernote',
            transform(code) {
                const targetFile = './dist/summernote-lite.min.js';

                // Check if the code contains the require statement
                if (code.includes(`require('${targetFile}')`)) {
                    // Read the content of the target file
                    const fileContent = readFileSync('./lib/dist/summernote-lite.min.js', 'utf-8');

                    // Replace the require statement with the file's content
                    const inlinedCode = code.replace(
                        `require('${targetFile}')`,
                        `(() => { ${fileContent} })();`
                    );

                    return { code: inlinedCode, map: null };
                }

                return null;
            }
        },
        terser()
    ],
    output: [
        {
            file: 'dist/esm.min.js',
            format: 'es'
        },
        {
            file: 'dist/cjs.min.js',
            format: 'cjs'
        }
    ],
    external: ['react', 'jquery']
};