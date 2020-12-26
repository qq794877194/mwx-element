import fs from 'fs';
import path from 'path';
import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';

const isDev = process.env.NODE_ENV !== 'production';

const plugins = [
    vue({
        css: true,
        compileTemplate: true
    }),
    json(),
    nodeResolve(),
    postcss({
        // 把css放到和js同一目录
        extract: true
    }),
];
isDev || plugins.push(terser());
const root = path.resolve(__dirname, 'packages');
module.exports = fs.readdirSync(root)
    .filter(item => fs.statSync(path.resolve(root,item)).isDirectory())
    .map(item => {
        const pkg = require(path.resolve(root,item, 'package.json'));
        return {
            input: path.resolve(root, item, 'index.js'),
            output: [
                {
                    exports: 'auto',
                    file: path.resolve(root,item, pkg.main),
                    format: 'cjs'
                },
                {
                    exports: 'auto',
                    file: path.resolve(root,item, pkg.module),
                    format: 'es'
                },
            ],
            plugins
        }
    });
