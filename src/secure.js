import { random } from '@lukeed/csprng';

var IDX=256, HEX=[], SIZE=256*16, BUFFER;
while (IDX--) HEX[IDX] = (IDX + 256).toString(16).substring(1);

export function uid(len) {
	if (len !== void 0 && (typeof len !== 'number' || len < 0 || len % 1 !== 0 || len > 9007199254740991)) {
		throw new RangeError('length must be a nonnegative safe integer');
	}
	var str='', tmp=(len || 11), num=Math.ceil(tmp / 2);
	if (!BUFFER || ((IDX + num) > BUFFER.length)) {
		BUFFER = random(Math.max(SIZE, num));
		IDX = 0;
	}

	while (num--) {
		str += HEX[BUFFER[IDX++]];
	}

	return str.substring(0, tmp);
}
