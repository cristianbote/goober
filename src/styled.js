import { css } from './css';
import { parse } from './core/parse';

let h, useTheme;
function setup(pragma, prefix, theme) {
    // This one needs to stay in here, so we won't have cyclic dependencies
    parse.p = prefix;

    // These are scope to this context
    h = pragma;
    useTheme = theme;
}

/**
 * styled function
 * @param {string} tag
 * @param {function} forwardRef
 */
function styled(tag, forwardRef) {
    let _ctx = this || {};

    return function wrapper() {
        let _args = arguments;

        function Styled(props, ref) {
            // Grab a shallow copy of the props
            let _props = Object.assign(
                {
                    // If the forwardRef function is defined we have the ref
                    ref: forwardRef ? ref : undefined
                },
                props
            );

            // _ctx.p: is the props sent to the context
            _ctx.p = Object.assign({ theme: useTheme ? useTheme() : undefined }, props);

            // Set a flag if the current components had a previous className
            // similar to goober. This is the append/prepend flag
            _ctx.o = /\s*go[0-9]+/g.test(_props.className);

            // Define the new className
            _props.className =
                css.apply(_ctx, _args) + (_props.className ? ' ' + _props.className : '');

            return h(_props.as || tag, _props);
        }

        return forwardRef ? forwardRef(Styled) : Styled;
    };
}

export { styled, setup };
