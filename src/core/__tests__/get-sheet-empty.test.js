import { getSheet } from '../get-sheet';

/**
 * A <style id="_goober"> element may already exist in the DOM without any
 * children (e.g. left by an SSR framework or set up manually). In that case
 * getSheet must return a usable text node instead of null (fixes #500).
 */
describe('getSheet with a pre-existing empty style element', () => {
    it('returns a text node when the found element has no children', () => {
        const el = document.createElement('style');
        el.id = '_goober';
        document.head.appendChild(el);

        const sheet = getSheet(document.head);

        expect(sheet).not.toBeNull();
        expect(sheet.nodeType).toBe(3);
        expect(() => (sheet.data += '.a{color:red;}')).not.toThrow();

        document.head.removeChild(el);
    });
});
