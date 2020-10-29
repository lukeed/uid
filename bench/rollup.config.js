import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default {
	input: 'browser/index.js',
	output: {
		format: 'esm',
		file: 'browser/bundle.js',
	},
	plugins: [
		resolve({ browser: true }),
		commonjs(),
		replace({
			'process.env.NODE_ENV': '"production"'
		})
	]
}
