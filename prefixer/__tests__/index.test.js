import { prefix } from '../src';

const sanitize = (str) => str.replace(/\s/g, '');

describe('goober-autoprefixer', () => {
    it('can prefix values', () => {
        const output = prefix('position', 'sticky');
        expect(sanitize(output)).toEqual('position:-webkit-sticky;position:sticky;');
    });

    it('can prefix properties', () => {
        const output = prefix('appearance', 'none');
        expect(sanitize(output)).toEqual(
            `-webkit-appearance:none;-moz-appearance:none;appearance:none;`
        );
    });

    it('leaves unprefixed the values that do not need prefixing', () => {
        const output = prefix('font-weight', 400);
        expect(sanitize(output)).toEqual('font-weight:400;');
    });
});
