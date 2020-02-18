import { h, render } from 'preact';
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

    it('setup', () => {
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
});
