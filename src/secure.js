import { random } from '@lukeed/csprng';

const HEX = '0123456789abcdef';
const SIZE = 256 * 16;
var idx = SIZE, buffer;

export function uid(len) {
	var tmp=(len || 11), num=(1+tmp) / 2 | 0, chars=[];
	if (!buffer || ((idx + num) > SIZE)) {
		buffer = random(SIZE);
		idx = 0;
	}

	while (num--) {
		chars.push(HEX[buffer[idx] >> 4] + HEX[buffer[idx++] & 15]);
	}

	return chars.join('').substring(0, tmp);
}
