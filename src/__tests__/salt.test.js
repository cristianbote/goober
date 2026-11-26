import { styled, setup } from '../styled';
import { extractCss } from '../core/update';

const pragma = jest.fn((tag, props) => ({ tag, props }));

/**
 * #609: two styled components with identical CSS used to share one
 * className, so a parent could not target a specific child
 * (e.g. `.parent:hover .childA { color: blue }`) without affecting the
 * other. Components are now salted, so each gets its own className.
 */
describe('component salt (#609)', () => {
    beforeEach(() => {
        pragma.mockClear();
        setup(pragma);
        extractCss();
    });

    it('hashes identical styled components to distinct classNames', () => {
        const A = styled('span')`
            color: red;
        `;
        const B = styled('span')`
            color: red;
        `;

        A({});
        B({});

        const [ca, cb] = [pragma.mock.calls[0][1].className, pragma.mock.calls[1][1].className];

        expect(ca).toMatch(/^go\d+$/);
        expect(cb).toMatch(/^go\d+$/);
        expect(ca).not.toEqual(cb);
    });

    it('emits a separate rule per identical child so parents can target them', () => {
        const A = styled('span')`
            font-size: 12px;
        `;
        const B = styled('span')`
            font-size: 12px;
        `;

        A({});
        B({});

        const out = extractCss();

        expect(out.match(/\.go\d+\{font-size:12px;\}/g)).toHaveLength(2);
    });

    it('keeps a stable className across re-renders', () => {
        const A = styled('span')`
            color: red;
        `;

        A({});
        A({});

        expect(pragma.mock.calls[0][1].className).toEqual(pragma.mock.calls[1][1].className);
    });
});
