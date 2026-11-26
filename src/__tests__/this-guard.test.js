/**
 * `this` handling in css/styled.
 *
 * #545/#562: in sloppy-mode bundles (concatenated UMD, esbuild without
 * "use strict") a plain call gets the global object as `this`, so globals
 * like `g`, `k` or `target` change the output and styled writes `p`/`o` to it.
 * #589: called through a module namespace (vitest), `this` is not
 * extensible and styled's writes throw.
 */

import { css } from '../css';
import { styled, setup } from '../styled';
import { extractCss } from '../core/update';

describe('css/styled this guard', () => {
    beforeEach(() => {
        setup((tag, props) => props.className);
        extractCss();
    });

    it('css ignores globals when called with the global object as this', () => {
        globalThis.g = 1;
        try {
            const className = css.call(globalThis, `color: red;`);
            expect(extractCss()).toContain('.' + className + '{color:red;}');
        } finally {
            delete globalThis.g;
        }
    });

    it('styled does not write render props onto the global object', () => {
        styled.call(globalThis, 'div')`color: red;`({});

        expect(globalThis).not.toHaveProperty('p');
        expect(globalThis).not.toHaveProperty('o');
    });

    it('styled works with a non-extensible this', () => {
        const ns = Object.preventExtensions({});

        expect(typeof styled.call(ns, 'div')`color: red;`({})).toBe('string');
    });

    it('css keeps reading a frozen bound context', () => {
        const bound = css.bind(Object.freeze({ p: { color: 'tomato' } }));
        const className = bound`color: ${(p) => p.color};`;

        expect(extractCss()).toContain('.' + className + '{color:tomato;}');
    });

    it('does not need globalThis to exist', () => {
        const root = globalThis;
        delete root.globalThis;
        try {
            expect(() => css.call({}, `color: red;`)).not.toThrow();
            expect(() =>
                styled('div')`
                    color: red;
                `({})
            ).not.toThrow();
        } finally {
            root.globalThis = root;
        }
    });

    it('plain calls with an undefined this still work', () => {
        expect(() => css.call(undefined, `color: green;`)).not.toThrow();
        expect(() =>
            styled('div')`
                color: olive;
            `({})
        ).not.toThrow();
    });
});
