import { clx } from '../clx';
import { update } from '../core/update';
import { toHash } from '../core/to-hash';
import { compile } from '../core/compile';
import { getSheet } from '../core/get-sheet';
import hash from '../core/hash';

jest.mock('../core/to-hash', () => ({
    toHash: jest.fn().mockReturnValue('hash()')
}));

jest.mock('../core/get-sheet', () => ({
    getSheet: jest.fn().mockReturnValue('sheet()')
}));

jest.mock('../core/hash', () => ({
    hash: jest.fn().mockReturnValue('hash()'),
    cache: {}
}));

jest.mock('../core/compile', () => ({
    compile: jest.fn().mockReturnValue('compile()')
}));

jest.mock('../core/update', () => ({
    update: jest.fn().mockReturnValue('update()')
}));

describe('clx', () => {
    beforeEach(() => {
        toHash.mockClear();
        getSheet.mockClear();
        compile.mockClear();
        update.mockClear();
        hash.hash.mockClear();
        hash.cache = {
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
        expect(typeof clx).toEqual('function');
    });

    it('hash', () => {
        clx('foo', 'bar');

        expect(toHash).toHaveBeenCalledWith('foo$bar');
    });

    it('hash: nested', () => {
        clx('foo', clx('bar', 'baz'));

        expect(toHash).toHaveBeenCalledWith('bar$baz');
        expect(toHash).toHaveBeenCalledWith('foo$bar-hash() baz-hash()');
    });

    it('args', () => {
        const combined = clx('foo', 'bar');

        expect(combined).toEqual('foo-hash() bar-hash()');
        expect(update).toHaveBeenCalledWith('.foo-hash(){foo:1;}', 'sheet()', undefined);
        expect(update).toHaveBeenCalledWith('.bar-hash(){bar:1;}', 'sheet()', undefined);
    });

    it('args: nested', () => {
        const combined = clx(clx('foo', 'bar'), 'baz');

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
        const combined = clx('foo', 'my-class');

        expect(combined).toEqual('foo-hash() my-class');
        expect(update).toHaveBeenCalledWith('.foo-hash(){foo:1;}', 'sheet()', undefined);
        expect(update).toHaveBeenCalledTimes(1);
    });
});
