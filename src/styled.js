import { css } from './css';

let h, forwardRef, useTheme;
const setup = (_h, _forwardRef, _useTheme = () => {}) => {
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
            const theme = useTheme();
            const _props = (_ctx.p = Object.assign(theme ? { theme } : {}, props));
            const _previousClassName = _props.className;

            _ctx.o = /\s*go[0-9]+/g.test(_previousClassName);
            _props.className =
                css.apply(_ctx, _args) + (_previousClassName ? ' ' + _previousClassName : '');
            if (ref) {
                _props.ref = ref;
            }

            return h(tag, _props);
        }

        return forwardRef ? forwardRef(Styled) : Styled;
    };
}

export { styled, setup };
