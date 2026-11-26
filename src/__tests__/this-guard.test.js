/**
 * Tests for PR #562/#589 combined guard.
 *
 * #562: Guard `this` against globalThis when used in css/styled
 *       (issue #545: globalThis pollution via css.call(globalThis, ...))
 * #589: In vitest's CJS interop, `this` inside css/styled is module.exports
 *       which is a frozen/non-extensible object, causing
 *       "Cannot add property X, object is not extensible"
 *
 * Combined guard: ((this && this !== globalThis && Object.isExtensible(this))
 *                    ? this
 *                    : undefined) || {}
 *
 * This covers both:
 *   1. globalThis is not used as ctx → no pollution
 *   2. Non-extensible objects get a fresh {} → no TypeError
 */

import { css } from '../css';
import { styled, setup } from '../styled';
import { extractCss } from '../core/update';

describe('css/styled this guard (PR #562/#589)', () => {
    const pragma = jest.fn((tag, props) => ({ tag, props }));

    beforeEach(() => {
        pragma.mockClear();
        setup(pragma);
        extractCss();
    });

    it('does not pollute globalThis when css called with globalThis as this', () => {
        // #545: When `this` is globalThis, we should not set properties on it
        const result = css.call(globalThis, `color: red;`);

        expect(result).toBeDefined();
        expect(typeof result).toBe('string');
        expect(globalThis).not.toHaveProperty('p');
        expect(globalThis).not.toHaveProperty('o');
    });

    it('handles non-extensible object as this for css without throwing', () => {
        // #589: vitest CJS interop — module.exports is frozen
        const frozenObj = Object.preventExtensions({});

        expect(() => {
            const result = css.call(frozenObj, `color: blue;`);
            expect(typeof result).toBe('string');
        }).not.toThrow();
    });

    it('handles non-extensible object as this when creating styled component (styled.call)', () => {
        // When styled() itself is called with a frozen `this`,
        // _ctx = this || {} and all property sets happen on `this`.
        // The non-extensible guard ensures a fresh {} is created instead.
        const frozenObj = Object.preventExtensions({});

        expect(() => {
            const Div = styled.call(frozenObj, 'div')({ color: 'red' });
            expect(typeof Div).toBe('function');
            // Calling the returned wrapper exercises _ctx.p and _ctx.o
            Div({});
        }).not.toThrow();
    });
});

describe('plain calls (strict-mode undefined this)', () => {
    it('css.call(undefined, ...) does not throw', () => {
        expect(() => css.call(undefined, `color: green;`)).not.toThrow();
    });
    it('plain css tagged template does not throw', () => {
        expect(
            () =>
                css`
                    color: teal;
                `
        ).not.toThrow();
    });
    it('plain styled tagged template does not throw', () => {
        expect(
            () =>
                styled('div')`
                    color: olive;
                `
        ).not.toThrow();
    });
});
