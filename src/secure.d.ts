/**
 * Generate a cryptographically secure unique identifier using CSPRNG.
 * Uses a hexadecimal alphabet (0-9, a-f) with internal buffering for performance.
 * Requires crypto.getRandomValues() support in browsers or crypto module in Node.js.
 * @param length The desired length of the UID. Defaults to 11 characters.
 * @returns A cryptographically secure randomized string of the specified length
 * @example
 * ```js
 * import { uid } from 'uid/secure';
 * uid(); // 'b17eb6af4b8'
 * uid(6); // '4fdbca'
 * ```
 */
export function uid(length?: number): string;
