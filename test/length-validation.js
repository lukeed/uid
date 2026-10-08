import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { uid as buffered } from '../src';
import { uid as secure } from '../src/secure';
import { uid as single } from '../src/single';

for (const [name, uid] of [['buffered', buffered], ['secure', secure], ['single', single]]) {
	test(`${name}: validates requested lengths`, () => {
		for (const length of [Infinity, -Infinity, NaN, -1, 1.5, 9007199254740992]) {
			assert.throws(() => uid(length), err => err instanceof RangeError);
		}
		assert.is(uid().length, 11);
		assert.is(uid(0).length, 11);
		for (const length of [1, 2, 11, 513, 8193]) {
			assert.is(uid(length).length, length);
		}
	});
}

test.run();
