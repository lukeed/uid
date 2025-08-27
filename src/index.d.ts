/**
 * Generate a unique identifier of desired length using Math.random().
 * Uses a hexadecimal alphabet (0-9, a-f) with internal buffering for performance.
 * @param length The desired length of the UID. Defaults to 11 characters.
 * @returns A randomized string of the specified length
 * @example
 * ```js
 * import { uid } from 'uid';
 * uid(); // 'b17eb6af4b8'
 * uid(6); // '4fdbca'
 * ```
 */
export function uid(length?: number): string;
