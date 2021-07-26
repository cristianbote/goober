import clsx from '../index';
import { core } from 'goober';

const { update, hash, toHash, compile, getSheet } = core;

jest.mock('goober', () => {
    return {
        core: {
            cache: {},
            toHash: jest.fn().mockReturnValue('hash()'),
            getSheet: jest.fn().mockReturnValue('sheet()'),
            hash: jest.fn().mockReturnValue('hash()'),
            compile: jest.fn().mockReturnValue('compile()'),
            update: jest.fn().mockReturnValue('update()')
        }
    };
});

describe('clsx', () => {
    beforeEach(() => {
        toHash.mockClear();
        getSheet.mockClear();
        compile.mockClear();
        update.mockClear();
        hash.mockClear();
        core.cache = {
            // Fake classes and styles
            foo: '.foo{foo:1;}',
            foo1: 'foo',
            bar: '.bar{bar:1;}',
            bar1: 'bar',
            baz: '.baz{baz:1;}',
            baz1: 'baz'
        };
    });

    it('type', () => {
        expect(typeof clsx).toEqual('function');
    });

    it('hash', () => {
        clsx('foo', 'bar');

        expect(toHash).toHaveBeenCalledWith('foo$bar');
    });

    it('hash: nested', () => {
        clsx('foo', clsx('bar', 'baz'));

        expect(toHash).toHaveBeenCalledWith('bar$baz');
        expect(toHash).toHaveBeenCalledWith('foo$bar-hash() baz-hash()');
    });

    it('args', () => {
        const combined = clsx('foo', 'bar');

        expect(combined).toEqual('foo-hash() bar-hash()');
        expect(update).toHaveBeenCalledWith('.foo-hash(){foo:1;}', 'sheet()', undefined);
        expect(update).toHaveBeenCalledWith('.bar-hash(){bar:1;}', 'sheet()', undefined);
    });

    it('args: nested', () => {
        const combined = clsx(clsx('foo', 'bar'), 'baz');

        expect(combined).toEqual('foo-hash()-hash() bar-hash()-hash() baz-hash()');

        // first call
        expect(update).toHaveBeenCalledWith('.foo-hash(){foo:1;}', 'sheet()', undefined);
        expect(update).toHaveBeenCalledWith('.bar-hash(){bar:1;}', 'sheet()', undefined);

        // second call
        // nested
        expect(update).toHaveBeenCalledWith('.foo-hash()-hash(){foo:1;}', 'sheet()', undefined);
        expect(update).toHaveBeenCalledWith('.bar-hash()-hash(){bar:1;}', 'sheet()', undefined);

        // not nested
        expect(update).toHaveBeenCalledWith('.baz-hash(){baz:1;}', 'sheet()', undefined);
    });

    it('args: untracked', () => {
        const combined = clsx('foo', 'my-class');

        expect(combined).toEqual('foo-hash() my-class');
        expect(update).toHaveBeenCalledWith('.foo-hash(){foo:1;}', 'sheet()', undefined);
        expect(update).toHaveBeenCalledTimes(1);
    });
});
