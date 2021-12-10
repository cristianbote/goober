import { hash } from '../hash';
import { update } from '../update';
import { parse } from '../parse';
import { astish } from '../astish';

jest.mock('../astish', () => ({
    astish: jest.fn().mockReturnValue('astish()')
}));

jest.mock('../parse', () => ({
    parse: jest.fn().mockReturnValue('parse()')
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

describe('hash', () => {
    beforeEach(() => {
        update.mockClear();
        parse.mockClear();
        astish.mockClear();
    });

    it('regression', () => {
        const res = hash('compiled', 'target');

        expect(update).toBeCalledWith('parse()', 'target', undefined);
        expect(astish).toBeCalledWith('compiled');
        expect(parse).toBeCalledWith('astish()', '.go0');

        expect(res).toEqual('go0');
    });

    it('regression: cache', () => {
        const res = hash('compiled', 'target');

        expect(astish).not.toBeCalled();
        expect(parse).not.toBeCalled();
        expect(update).toBeCalledWith('parse()', 'target', undefined);

        expect(res).toEqual('go0');
    });

    it('regression: global', () => {
        const res = hash('global', 'target', true);

        expect(astish).toBeCalledWith('global');
        expect(parse).toBeCalledWith('astish()', '');
        expect(update).toBeCalledWith('parse()', 'target', undefined);

        expect(res).toEqual('go1');
    });

    it('regression: keyframes', () => {
        const res = hash('keyframes', 'target', undefined, undefined, 1);

        expect(astish).toBeCalledWith('keyframes');
        expect(parse).toBeCalledWith({ '@keyframes go2': 'astish()' }, '.go2');
        expect(update).toBeCalledWith('parse()', 'target', undefined);

        expect(res).toEqual('go2');
    });

    it('regression: object', () => {
        const res = hash({ baz: 1 }, 'target');

        expect(astish).not.toBeCalled();
        expect(parse).toBeCalledWith({ baz: 1 }, '.go3');
        expect(update).toBeCalledWith('parse()', 'target', undefined);

        expect(res).toEqual('go3');
    });

    it('regression: cache-object', () => {
        // Since it's not yet cached
        const className1 = hash({ cacheObject: 1 }, 'target', undefined, undefined, undefined, 1);
        expect(className1).toEqual('go4');

        // Different object
        const className2 = hash({ foo: 2 }, 'target', undefined, undefined, undefined, 1);
        expect(className2).toEqual('go5');

        // First object should not increment class name
        const className3 = hash({ cacheObject: 1 }, 'target', undefined, undefined, undefined, 1);
        expect(className3).toEqual(className1);
    });
});
