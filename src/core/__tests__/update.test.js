import { update, extractCss } from '../update';
import { getSheet } from '../get-sheet';

describe('update', () => {
    beforeEach(() => {
        const sheet = getSheet();
        sheet.data = '';
    });

    it('regression', () => {
        const t = { data: '' };

        update('css', t);
        expect(t.data).toEqual('css');
    });

    it('regression: duplicate', () => {
        const t = { data: '' };

        update('css', t);
        update('foo', t);
        update('css', t);

        expect(t.data).toEqual('cssfoo');
    });

    it('regression: extract preserves CSS', () => {
        update('filled', getSheet());
        expect(extractCss()).toEqual('filled');
        // Non-destructive: data is preserved
        expect(extractCss()).toEqual('filled');
    });

    it('regression: extract preserves CSS without DOM', () => {
        const bkp = global.self;
        delete global.self;
        update('filled', getSheet());
        expect(extractCss()).toEqual('filled');
        expect(extractCss()).toEqual('filled');
        global.self = bkp;
    });

    it('regression: extract preserves CSS from custom target', () => {
        const target = document.createElement('div');
        update('filled', getSheet());
        update('filledbody', getSheet(target));
        expect(extractCss(target)).toEqual(' filledbody');
        expect(extractCss(target)).toEqual(' filledbody');
    });

    it('regression: append or prepend', () => {
        update('end', getSheet());
        update('start', getSheet(), true);
        expect(extractCss()).toEqual('startend');
        // Non-destructive: data is preserved
        expect(extractCss()).toEqual('startend');
    });

    it('regression: global style replacement', () => {
        const t = { data: 'html, body { background-color: white; }' };

        update(
            'html, body { background-color: black; }',
            t,
            undefined,
            'html, body { background-color: white; }'
        );

        expect(t.data).toEqual('html, body { background-color: black; }');
    });
});
