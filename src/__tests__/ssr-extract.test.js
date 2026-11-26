// SSR extractCss bug repro (#495 Solid Start SSR)
//
// In SSR, goober uses a module-level `ssr` object as the sheet target
// (see get-sheet.js). This object persists across requests in a long-lived
// server process. extractCss() returns sheet.data then sets it to ''
// (the "wipe"). The first request gets the accumulated CSS; every
// subsequent request gets an empty string.
//
// The fix: make extractCss non-destructive - return the data without
// wiping the buffer (same behavior as styled-components and emotion).

import { css, extractCss } from '../index';
import { getSheet } from '../core/get-sheet';

describe('SSR extractCss non-destructive (#495)', () => {
    // Helpers to simulate fresh module loads between tests.
    // In real SSR the module is loaded once at server start.
    let originalData = '';
    beforeAll(() => {
        const sheet = getSheet();
        originalData = sheet.data;
    });
    beforeEach(() => {
        const sheet = getSheet();
        sheet.data = '';
    });
    afterAll(() => {
        const sheet = getSheet();
        sheet.data = originalData;
    });

    it('extractCss returns CSS on every call (not just the first)', () => {
        // Simulate module-level css declarations that fire once at server startup.
        css`
            color: red;
        `;

        // Request 1: extractCss returns the accumulated CSS.
        const first = extractCss();
        expect(first).toContain('color');
        expect(first).toContain('red');

        // Request 2: on buggy main, sheet.data was wiped so this is ''.
        // After the fix, this should also contain the CSS.
        const second = extractCss();
        expect(second).toContain('color');
        expect(second).toContain('red');
    });

    it('extractCss returns CSS on 3rd call too', () => {
        css`
            color: blue;
        `;

        extractCss(); // request 1
        extractCss(); // request 2

        // Request 3: same issue - should still return CSS.
        const third = extractCss();
        expect(third).toContain('color');
        expect(third).toContain('blue');
    });
});
