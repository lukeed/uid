var IDX=36, HEX='';
while (IDX--) HEX += IDX.toString(36);

export function uid(len) {
	if (len !== void 0 && (typeof len !== 'number' || len < 0 || len % 1 !== 0 || len > 9007199254740991)) {
		throw new RangeError('length must be a nonnegative safe integer');
	}
	var str='', num = len || 11;
	while (num--) str += HEX[Math.random() * 36 | 0];
	return str;
}
