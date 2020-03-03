import test from 'tape';
import foid from '../src';

test('exports', t => {
	t.is(typeof foid, 'function', 'exports function');
	t.end();
});


test('returns', t => {
	let output = foid();
	t.is(typeof output, 'string', 'returns a string');
	t.is(output.length, 11, '~> has 11 characters (default)');
	t.end();
});


test('length :: 4', t => {
	let i=0, tmp, bool=true;

	for (; i < 1e3; i++) {
		tmp = foid(4);
		bool = bool && tmp.length === 4;
		if (!bool) {
			t.fail(`"${tmp}" is not 4 characters!`);
			break;
		}
	}

	t.true(bool, '~> produced 1000 IDs w/ 4 chars each');

	t.end();
});


test('length :: 5', t => {
	let i=0, tmp, bool=true;

	for (; i < 1e3; i++) {
		tmp = foid(5);
		bool = bool && tmp.length === 5;
		if (!bool) {
			t.fail(`"${tmp}" is not 5 characters!`);
			break;
		}
	}

	t.true(bool, '~> produced 1000 IDs w/ 5 chars each');

	t.end();
});


test('length :: 6', t => {
	let i=0, tmp, bool=true;

	for (; i < 1e3; i++) {
		tmp = foid(6);
		bool = bool && tmp.length === 6;
		if (!bool) {
			t.fail(`"${tmp}" is not 6 characters!`);
			break;
		}
	}

	t.true(bool, '~> produced 1000 IDs w/ 6 chars each');

	t.end();
});


test('unique', t => {
	t.not(foid(), foid(), '~> single');

	let items = new Set();
	for (let i=1e6; i--;) items.add(foid());
	t.is(items.size, 1e6, '~> 1,000,000 uniques');

	t.end();
});
