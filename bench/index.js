const uuid = require('uuid');
const assert = require('assert');
const { Suite } = require('benchmark');
const Hash = require('hashids/cjs');
const nanoid = require('nanoid');
const foid = require('../dist');

const size_11 = {
	'hashids/fixed': new Hash('', 11),
	'nanoid': nanoid.bind(nanoid, 11),
	'foid': foid.bind(foid, 11),
};

const size_16 = {
	'hashids/fixed': new Hash('', 16),
	'nanoid': nanoid.bind(nanoid, 16),
	'foid': foid.bind(foid, 16),
};

const size_25 = {
	'cuid': require('cuid'),
	'hashids/fixed': new Hash('', 25),
	'nanoid': nanoid.bind(nanoid, 25),
	'foid': foid.bind(foid, 25),
};

const size_36 = {
	'uuid/v1': uuid.v1,
	'uuid/v4': uuid.v4,
	'hashids/fixed': new Hash('', 36),
	'@lukeed/uuid': require('@lukeed/uuid'),
	'nanoid': nanoid.bind(nanoid, 36),
	'foid': foid.bind(foid, 36),
};

function pad(str) {
	return str + ' '.repeat(16 - str.length);
}

function runner(group, size) {
	let num = 0;

	console.log(`\nValidation (length = ${size}): `);
	Object.keys(group).forEach(name => {
		try {
			num = 0;
			const lib = group[name];
			const isHash = name.startsWith('hashids');
			const output = isHash ? lib.encode(num++) : lib();

			assert.deepStrictEqual(typeof output, 'string', 'returns string');
			assert.notDeepEqual(output, isHash ? lib.encode(num++) : lib(), 'unqiue strings');

			console.log('  ✔', pad(name), `(example: "${output}")`);
		} catch (err) {
			console.log('  ✘', pad(name), `(FAILED @ "${err.message}")`);
		}
	});

	console.log(`\nBenchmark (length = ${size}):`);
	const bench = new Suite().on('cycle', e => {
		console.log('  ' + e.target);
		num = 0; // hashids reset
	});

	Object.keys(group).forEach(name => {
		if (name.startsWith('hashids')) {
			num = 0;
			bench.add(pad(name), () => {
				group[name].encode(num++);
			});
		} else {
			bench.add(pad(name), () => {
				group[name]();
			});
		}
	});

	bench.run();
}

// ---

runner(size_11, 11);
runner(size_16, 16);
runner(size_25, 25);
runner(size_36, 36);
