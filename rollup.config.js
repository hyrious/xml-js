
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import polyfill from "rollup-plugin-node-polyfills";
import pkg from "./package.json"

export default {
    input: "lib/index.mjs",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            sourcemap: true,
            sourcemapExcludeSources: true,
            exports: "auto",
        },
        {
            file: pkg.module,
            format: "es",
            sourcemap: true,
            sourcemapExcludeSources: true,
            exports: "auto",
        },
    ],
    plugins: [
        nodeResolve({ preferBuiltins: false }),
        commonjs(),
        polyfill(),
    ],
};
