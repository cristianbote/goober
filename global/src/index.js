import { css } from 'goober';

/**
 * CSS Global function to declare global styles
 * @type {Function}
 */
export let glob = css.bind({ g: 1 });

/**
 * Creates the global styles component to be used as part of your tree.
 * @returns {Function}
 */
export function createGlobalStyles() {
    let args = arguments;
    return function GlobalStyles() {
        css.apply({ g: 1 }, args);
        return null;
    };
}
