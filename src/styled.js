import { css } from './css';

let h, forwardRef, useTheme, prefixer;
const setup = (pragma, prefix, forward, theme) => {
    h = pragma;
    prefixer = prefix;
    forwardRef = forward;
    useTheme = theme;
};

/**
 * Styled function
 * @param {String} tag
 */
function styled(tag) {
    const _ctx = this || {};
    return function() {
        const _args = arguments;

        function Styled(props, ref) {
            _ctx.p = Object.assign({ theme: useTheme && useTheme() }, props);
            _ctx.o = /\s*go[0-9]+/g.test(_ctx.p.className);
            return h(
                tag,
                Object.assign({}, props, {
                    ref,
                    className: css.apply(_ctx, _args) + ' ' + (_ctx.p.className || '')
                })
            );
        }

        return forwardRef ? forwardRef(Styled) : Styled;
    };
}

export { styled, setup, prefixer };
