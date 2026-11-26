/** @jest-environment node */

/**
 * A server that shims `document` but has no `window` (e.g. a linkedom-style
 * setup). The DOM path reads `window._goober` and `window.__nonce__`, so
 * getSheet must take the SSR path here instead of throwing.
 */
import { getSheet } from '../get-sheet';

globalThis.document = { head: {}, createElement: () => ({}) };

describe('getSheet: document without window', () => {
    it('returns the SSR fallback', () => {
        expect(() => getSheet()).not.toThrow();
        expect(getSheet()).toHaveProperty('data');
    });
});
