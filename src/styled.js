import { css } from './css';

let h, forwardRef, useTheme;
const setup = (_h, _forwardRef, _useTheme) => {
    h = _h;
    forwardRef = _forwardRef;
    useTheme = _useTheme;
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
            _ctx.p = Object.assign({ theme: useTheme ? useTheme() : undefined }, props)
                ...(useTheme && { theme: useTheme() }),
                ...props
            };

            const _previousClassName = _ctx.p.className;
            _ctx.o = /\s*go[0-9]+/g.test(_previousClassName);
            const _props = {
                ...props,
                ref,
                className:
                    css.apply(_ctx, _args) + (_previousClassName ? ' ' + _previousClassName : '')
            };

            return h(tag, Object.assign({ ref, className: css.apply(_ctx, _args) + (_previousClassName ? ' ' + _previousClassName : '')  }, props));
        }

        return forwardRef ? forwardRef(Styled) : Styled;
    };
}

export { styled, setup };
