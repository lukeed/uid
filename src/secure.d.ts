/**
 * Produce a cryptographically secure (CSPRNG) UID of desired length using the current environment's `crypto` module.
 * @NOTE Relies on a hexadecimal alphabet (A-E, 0-9).
 * @param {number} [length] Defaults to `11`
 */
export function uid(length?: number): string;
