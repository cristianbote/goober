import { css, styled } from 'goober';

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
    const fn = styled.call({ g: 1 }, 'div').apply(null, arguments);

    // Render hook: call the styled fn for side-effects, return null vnode.
    return (props) => (fn(props), null);
}
