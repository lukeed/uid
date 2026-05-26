import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { uid } from '../src';

test('exports', () => {
	assert.type(uid, 'function', 'exports function');
});


test('returns', () => {
	let output = uid();
	assert.type(output, 'string', 'returns a string');
	assert.is(output.length, 11, '~> has 11 characters (default)');
});


test('length :: 4', () => {
	let i=0, tmp;
	for (; i < 1e3; i++) {
		tmp = uid(4);
		assert.is(tmp.length, 4, `"${tmp}" is not 4 characters!`);
	}

	assert.ok('~> produced 1000 IDs w/ 4 chars each');
});


test('length :: 5', () => {
	let i=0, tmp;
	for (; i < 1e3; i++) {
		tmp = uid(5);
		assert.is(tmp.length, 5, `"${tmp}" is not 5 characters!`);
	}

	assert.ok('~> produced 1000 IDs w/ 5 chars each');
});


test('length :: 6', () => {
	let i=0, tmp;
	for (; i < 1e3; i++) {
		tmp = uid(6);
		assert.is(tmp.length, 6, `"${tmp}" is not 6 characters!`);
	}

	assert.ok('~> produced 1000 IDs w/ 6 chars each');
});


test('unique', () => {
	assert.is.not(uid(), uid(), '~> single');

	let items = new Set();
	for (let i=1e6; i--;) items.add(uid());
	assert.is(items.size, 1e6, '~> 1,000,000 uniques');
});


test('length :: boundary', () => {
	assert.is(uid(1).length, 1, '~> length=1');
	assert.is(uid().length, 11, '~> default length=11');
	assert.is(uid(32).length, 32, '~> length=32');

	let i=0, tmp;
	for (; i < 1e3; i++) {
		tmp = uid(1);
		assert.is(tmp.length, 1, `"${tmp}" is not 1 character!`);
	}
	assert.ok('~> produced 1000 IDs w/ 1 char each');

	for (i=0; i < 1e3; i++) {
		tmp = uid(32);
		assert.is(tmp.length, 32, `"${tmp}" is not 32 characters!`);
	}
	assert.ok('~> produced 1000 IDs w/ 32 chars each');
});


test('alphabet', () => {
	let i=0, tmp;
	for (; i < 1e3; i++) {
		tmp = uid();
		assert.ok(/^[0-9a-f]+$/.test(tmp), `"${tmp}" contains non-hex characters!`);
	}
	assert.ok('~> produced 1000 IDs w/ hex chars only');
});


test('unique :: 32', () => {
	let items = new Set();
	for (let i=1e4; i--;) items.add(uid(32));
	assert.is(items.size, 1e4, '~> 10,000 uniques (length=32)');
});


test.run();
