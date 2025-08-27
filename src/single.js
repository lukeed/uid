const HEX = '0123456789abcdefghijklmnopqrstuvwxyz';

export function uid(len) {
	var num = len || 11, chars = [];
	while (num--) chars.push(HEX[Math.random() * 36 | 0]);
	return chars.join('');
}
