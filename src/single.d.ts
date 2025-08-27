/**
 * Generate a unique identifier without internal buffering (single-use mode).
 * Uses an alphanumeric alphabet (0-9, a-z) for smaller output size.
 * Ideal for short-lived environments or when memory usage is critical.
 * @param length The desired length of the UID. Defaults to 11 characters.
 * @returns A randomized string of the specified length
 * @example
 * ```js
 * import { uid } from 'uid/single';
 * uid(); // '2h4wfub16up'
 * uid(6); // 'mxa7nd'
 * ```
 */
export function uid(length?: number): string;
