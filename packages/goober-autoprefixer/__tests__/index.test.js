import '../src';
import { parse } from 'goober';

describe('goober-autoprefixer', () => {
    it('can prefix values', () => {
        const output = parse('position: sticky;');
        expect(output).toEqual('position: -webkit-sticky, sticky;');
    });
});
