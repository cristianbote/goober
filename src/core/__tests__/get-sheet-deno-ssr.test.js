/** @jest-environment node */

/**
 * Simulates a Deno SSR environment:
 *   - `globalThis.window` is defined (object)
 *   - `globalThis.document` is NOT defined
 *
 * Without the fix, `typeof window === 'object'` is true, so the code
 * enters the DOM path and immediately throws ReferenceError: document is
 * not defined (issue #573).
 *
 * With the fix (`typeof document === 'object'`), the condition is false
 * and getSheet returns the SSR fallback without touching document.
 */

import { getSheet } from '../get-sheet';

// Ensure Deno-like globals for this test
globalThis.window = {};
delete globalThis.document;

describe('getSheet — Deno SSR (window exists, document does not)', () => {
    it('returns SSR fallback without target', () => {
        const result = getSheet();
        expect(result).toHaveProperty('data');
    });

    it('returns the provided collector when given one', () => {
        const collector = { data: '' };
        const result = getSheet(collector);
        expect(result).toBe(collector);
    });
});
