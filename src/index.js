const HEX = '0123456789abcdef';
const SIZE = 256;
var idx = SIZE, buffer;

export function uid(len) {
	var i=0, tmp=(len || 11);
	if (!buffer || ((idx + tmp) > SIZE*2)) {
		for (buffer='',idx=0; i < SIZE; i++) {
			buffer += HEX[Math.random() * 16 | 0] + HEX[Math.random() * 16 | 0];
		}
	}

	return buffer.substring(idx, idx += tmp);
}
