import { styled, setup } from '../styled';
import { css } from '../css';

jest.mock('../css', () => ({
    css: jest.fn().mockReturnValue('css()')
}));

describe('styled', () => {
    it('type', () => {
        expect(typeof styled).toEqual('function');
    });

    it('return type', () => {
        expect(typeof styled()).toEqual('function');
    });

    it('setup pragma', () => {
        const pragma = jest.fn();

        expect(() => styled()()()).toThrow();

        setup(pragma);
        styled()()();

        expect(pragma).toBeCalled();

        setup(undefined);
    });

    it('args', () => {
        const _h = jest.fn().mockReturnValue('h()');
        const p = { bar: 1 };
        setup(_h);

        expect(
            styled('tag')`
                foo: 1;
            `(p)
        ).toEqual('h()');
        expect(css).toBeCalledWith([expect.stringContaining('foo: 1')]);
        expect(_h).toBeCalledWith('tag', Object.assign({}, p, { className: 'css()' }));
    });

    it('args: concat className', () => {
        const _h = jest.fn().mockReturnValue('h()');
        const p = { bar: 1, className: 'existing' };
        setup(_h);

        expect(
            styled('tag')`
                foo: 1;
            `(p)
        ).toEqual('h()');
        expect(css).toBeCalledWith([expect.stringContaining('foo: 1')]);
        expect(_h).toBeCalledWith('tag', Object.assign({}, p, { className: 'css() existing' }));
    });

    it('args: function', () => {
        const _h = jest.fn().mockReturnValue('h()');
        const incoming = { color: 'red' };
        setup(_h);

        const styleFn = props => ({ color: props.color });
        expect(styled('tag')(styleFn)(incoming)).toEqual('h()');
        expect(css).toBeCalledWith(styleFn);
        expect(_h).toBeCalledWith('tag', Object.assign({}, incoming, { className: 'css()' }));
    });

    it('setup forwardRef', () => {
        const _h = jest.fn().mockReturnValue('h()');
        const forwardRef = jest.fn().mockImplementation(Styled => props => Styled(props, 'ref'));
        const p = { bar: 1 };
        setup(_h, forwardRef);

        expect(
            styled('tag')`
                foo: 1;
            `(p)
        ).toEqual('h()');
        expect(_h).toBeCalledWith('tag', Object.assign({}, p, { className: 'css()', ref: 'ref' }));
        expect(forwardRef).toHaveBeenCalled();
    });

    it('setup useTheme', () => {
        jest.resetModules();
        jest.unmock('../css');
        jest.doMock('../core/hash', () => ({
            hash: jest.fn().mockReturnValue('css()')
        }));

        const { styled, setup } = require('../styled');
        const _h = jest.fn().mockReturnValue('h()');
        const useTheme = jest.fn().mockReturnValue('theme');
        const p = { bar: 1 };
        setup(_h, null, useTheme);

        const styleFn = jest.fn().mockReturnValue({ color: 'red' });
        expect(styled('tag')(styleFn)(p)).toEqual('h()');
        expect(styleFn).toHaveBeenCalledWith(Object.assign({}, p, { theme: 'theme' }));
        expect(_h).toBeCalledWith('tag', Object.assign({}, p, { className: 'css()' }));
        expect(useTheme).toHaveBeenCalled();
    });

    it('setup useTheme with theme prop override', () => {
        jest.resetModules();
        jest.unmock('../css');
        jest.doMock('../core/hash', () => ({
            hash: jest.fn().mockReturnValue('css()')
        }));

        const { styled, setup } = require('../styled');
        const _h = jest.fn().mockReturnValue('h()');
        const useTheme = jest.fn().mockReturnValue('theme');
        const p = { theme: 'override' };
        setup(_h, null, useTheme);

        const styleFn = jest.fn().mockReturnValue({ color: 'red' });
        expect(styled('tag')(styleFn)(p)).toEqual('h()');
        expect(styleFn).toHaveBeenCalledWith(Object.assign({}, p));
        expect(_h).toBeCalledWith('tag', Object.assign({}, p, { className: 'css()' }));
    });
});
