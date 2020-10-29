const { uid } = require('../dist');

// $ node test/collisions 16 1e7
const [len=8, cycles] = process.argv.slice(2);
const total = cycles ? +cycles : 1e6;

console.log('~> item total:', total.toLocaleString());
console.log('~> hash length:', len);

let sentry = new Set();
let i=0, tmp, duplicates=0;
for (; i < total; i++) {
	tmp = uid(+len);
	if (sentry.has(tmp)) {
		duplicates++;
	} else {
		sentry.add(tmp);
	}
}

console.log('iterations:', total.toLocaleString());
console.log('collisions:', duplicates.toLocaleString());
console.log('~> uniques:', sentry.size.toLocaleString());
console.log('percentage:', (duplicates / total * 100).toFixed(4) + '%');
