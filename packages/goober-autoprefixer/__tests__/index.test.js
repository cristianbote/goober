import '../src';
import { parse } from '../../../src/core/parse';

const sanitize = str => str.replace('\n', '');

describe('goober-autoprefixer', () => {
    it('can prefix values', () => {
        const output = parse({ position: 'sticky' }, 'div');
        expect(sanitize(output)).toEqual('div{position: -webkit-sticky, sticky;}');
    });

    it('can prefix properties', () => {
        const output = parse({ appearance: 'none' }, 'div');
        expect(sanitize(output)).toEqual(`div{appearance: none;-moz-appearance: none;
-webkit-appearance: none;
}`);
    });
});
