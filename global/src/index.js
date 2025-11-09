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
    const args = arguments;

    /**
     * This is the actual component that gets rendered.
     */
    return function GlobalStyles(props) {
        // Call glob with props context
        glob.apply({ p: props }, args);

        // Returns a hole.
        return null;
    };
}
