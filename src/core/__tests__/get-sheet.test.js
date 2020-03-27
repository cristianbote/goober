import { getSheet } from '../get-sheet';

describe('getSheet', () => {
    it('regression', () => {
        const target = getSheet();
        expect(target instanceof CSSStyleSheet).toBeTruthy();
    });

    it('custom target', () => {
        const custom = document.createElement('div');
        // We have to append this to the DOM in order for the style sheet api
        // to be instantiated
        document.body.append(custom);

        // Get the shee
        const sheet = getSheet(custom);

        expect(sheet instanceof CSSStyleSheet).toBeTruthy();
        expect(custom.firstElementChild.getAttribute('id')).toEqual('_goober');
        expect(custom.firstElementChild.sheet === sheet).toBeTruthy();
    });

    it('reuse sheet', () => {
        const custom = document.createElement('div');
        const sheet = getSheet(custom);
        const second = getSheet(custom);

        expect(sheet === second).toBeTruthy();
    });

    it('server side', () => {
        const bkp = global.document;
        delete global.document;

        expect(() => getSheet()).not.toThrow();

        global.document = bkp;
    });
});
