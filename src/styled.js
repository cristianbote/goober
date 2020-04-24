import { css } from './css';
import { parse } from './core/parse';

let h, forwardRef, useTheme;
const setup = (pragma, prefix, fwd, theme) => {
    // This one needs to stay in here, so we won't have cyclic dependencies
    parse.p = prefix;

    // These are scope to this context
    h = pragma;
    forwardRef = fwd;
    useTheme = theme;
};

/**
 * Styled function
 * @param {String} tag
 */
function styled(tag) {
    const _ctx = this || {};

    return function wrapper() {
        const _args = arguments;

        function Styled(props, ref) {
            // Grab a shallow copy of the props
            // _ctx.p: is the props sent to the context
            const _props = (_ctx.p = Object.assign({ theme: useTheme && useTheme() }, props));
            const _previousClassName = _props.className;

            // Set a flag if the current components had a previous className
            // similar to goober. This is the append/prepend flag
            _ctx.o = /\s*go[0-9]+/g.test(_previousClassName);

            // Define the new className
            _props.className =
                css.apply(_ctx, _args) + (_previousClassName ? ' ' + _previousClassName : '');

            // Add the passed ref function to props
            _props.ref = ref;

            return h(tag, _props);
        }

        return forwardRef ? forwardRef(Styled) : Styled;
    };
}

export { styled, setup };
