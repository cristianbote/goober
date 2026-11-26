import { getSheet } from '../get-sheet';

/**
 * A <style id="_goober"> element may already exist in the DOM without any
 * children (e.g. left by an SSR framework or set up manually). In that case
 * getSheet must return a usable text node instead of null (fixes #500).
 */
describe('getSheet with a pre-existing empty style element', () => {
    // Without a target, getSheet finds the element through window._goober
    // (named access); with one, through target.querySelector.
    it.each([
        ['no target', () => getSheet()],
        ['a target', () => getSheet(document.head)]
    ])('returns a text node when the element has no children (%s)', (_, get) => {
        const el = document.createElement('style');
        el.id = '_goober';
        document.head.appendChild(el);

        const sheet = get();

        expect(sheet).not.toBeNull();
        expect(sheet.nodeType).toBe(3);
        expect(() => (sheet.data += '.a{color:red;}')).not.toThrow();

        document.head.removeChild(el);
    });
});
