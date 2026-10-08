var IDX=256, HEX=[], SIZE=256, BUFFER;
while (IDX--) HEX[IDX] = (IDX + 256).toString(16).substring(1);

export function uid(len) {
	if (len !== void 0 && (typeof len !== 'number' || len < 0 || len % 1 !== 0 || len > 9007199254740991)) {
		throw new RangeError('length must be a nonnegative safe integer');
	}
	var i=0, tmp=(len || 11);
	if (!BUFFER || ((IDX + tmp) > BUFFER.length)) {
		for (BUFFER='',IDX=0,i=Math.max(SIZE, Math.ceil(tmp / 2)); i--;) {
			BUFFER += HEX[Math.random() * 256 | 0];
		}
	}

	return BUFFER.substring(IDX, IDX++ + tmp);
}
