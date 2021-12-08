import { hash } from '../hash';
import { toHash } from '../to-hash';
import { update } from '../update';
import { parse } from '../parse';
import { astish } from '../astish';

jest.mock('../astish', () => ({
    astish: jest.fn().mockReturnValue('astish()')
}));

jest.mock('../parse', () => ({
    parse: jest.fn().mockReturnValue('parse()')
}));

jest.mock('../to-hash', () => ({
    toHash: jest.fn().mockReturnValue('toHash()')
}));

jest.mock('../update', () => ({
    update: jest.fn().mockReturnValue('update()')
}));

jest.mock('../astish', () => ({
    astish: jest.fn().mockReturnValue('astish()')
}));

jest.mock('../parse', () => ({
    parse: jest.fn().mockReturnValue('parse()')
}));

const cache = {};

describe('hash', () => {
    beforeEach(() => {
        toHash.mockClear();
        update.mockClear();
        parse.mockClear();
        astish.mockClear();
    });

    it('regression', () => {
        const res = hash('compiled', 'target', undefined, undefined, undefined, cache);

        expect(toHash).toBeCalledWith('compiled');
        expect(update).toBeCalledWith('parse()', 'target', undefined);
        expect(astish).toBeCalledWith('compiled');
        expect(parse).toBeCalledWith('astish()', '.toHash()');

        expect(res).toEqual('toHash()');
    });

    it('regression: cache', () => {
        const res = hash('compiled', 'target', undefined, undefined, undefined, cache);

        expect(toHash).not.toBeCalled();
        expect(astish).not.toBeCalled();
        expect(parse).not.toBeCalled();
        expect(update).toBeCalledWith('parse()', 'target', undefined);

        expect(res).toEqual('toHash()');
    });

    it('regression: global', () => {
        const res = hash('global', 'target', true, undefined, undefined, cache);

        expect(toHash).toBeCalledWith('global');
        expect(astish).not.toBeCalled();
        expect(parse).not.toBeCalled();
        expect(update).toBeCalledWith('parse()', 'target', undefined);

        expect(res).toEqual('toHash()');
    });

    it('regression: keyframes', () => {
        const res = hash('keyframes', 'target', undefined, undefined, 1, cache);

        expect(toHash).toBeCalledWith('keyframes');
        expect(astish).not.toBeCalled();
        expect(parse).not.toBeCalled();
        expect(update).toBeCalledWith('parse()', 'target', undefined);

        expect(res).toEqual('toHash()');
    });

    it('regression: object', () => {
        const className = Math.random() + 'unique';
        toHash.mockReturnValue(className);

        const res = hash({ baz: 1 }, 'target', undefined, undefined, undefined, cache);

        expect(toHash).toBeCalledWith('baz1');
        expect(astish).not.toBeCalled();
        expect(parse).toBeCalledWith({ baz: 1 }, '.' + className);
        expect(update).toBeCalledWith('parse()', 'target', undefined);

        expect(res).toEqual(className);
    });

    it('regression: cache-object', () => {
        const className = Math.random() + 'unique';
        toHash.mockReturnValue(className);
        const cache = {};

        // Since it's not yet cached
        hash({ cacheObject: 1 }, 'target', undefined, undefined, undefined, cache);
        expect(toHash).toBeCalledWith('cacheObject1');
        toHash.mockClear();

        // Different object
        hash({ foo: 2 }, 'target', undefined, undefined, undefined, cache);
        expect(toHash).toBeCalledWith('foo2');
        toHash.mockClear();

        // First object should not call .toHash
        hash({ cacheObject: 1 }, 'target', undefined, undefined, undefined, cache);
        expect(toHash).not.toBeCalled();
    });
});
