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
            `appearance:none;-moz-appearance:none;-webkit-appearance:none;`
        );
    });
});
