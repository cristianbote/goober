import { h, createContext, render } from 'preact';
import { useContext, forwardRef } from 'preact/compat';
import { setup, css, styled, keyframes } from '../index';
import { extractCss } from '../core/update';

describe('integrations', () => {
    it('preact', () => {
        const ThemeContext = createContext();
        const useTheme = () => useContext(ThemeContext);

        setup(h, null, useTheme);

        const target = document.createElement('div');

        const Span = styled('span', forwardRef)`
            color: red;
        `;

        const SpanWrapper = styled('div')`
            color: cyan;

            ${Span} {
                border: 1px solid red;
            }
        `;

        const BoxWithColor = styled('div')`
            color: ${(props) => props.color};
        `;

        const BoxWithColorFn = styled('div')(
            (props) => `
            color: ${props.color};
        `
        );

        const BoxWithThemeColor = styled('div')`
            color: ${(props) => props.theme.color};
        `;

        const BoxWithThemeColorFn = styled('div')(
            (props) => `
            color: ${props.theme.color};
        `
        );

        const fadeAnimation = keyframes`
            0% {
                opacity: 0;
            }
            99% {
                opacity: 1;
                color: dodgerblue;
            }
        `;

        const BoxWithAnimation = styled('span')`
            opacity: 0;
            animation: ${fadeAnimation} 500ms ease-in-out;
        `;

        const BoxWithConditionals = styled('div')([
            { foo: 1 },
            (props) => ({ color: props.isActive ? 'red' : 'tomato' }),
            null,
            { baz: 0 },
            false,
            { baz: 0 }
        ]);

        const shared = { opacity: 0 };
        const BoxWithShared = styled('div')(shared);
        const BoxWithSharedAndConditional = styled('div')([shared, { baz: 0 }]);

        const refSpy = jest.fn();

        render(
            <ThemeContext.Provider value={{ color: 'blue' }}>
                <div>
                    <Span ref={refSpy} />
                    <Span as={'div'} />
                    <SpanWrapper>
                        <Span />
                    </SpanWrapper>
                    <BoxWithColor color={'red'} />
                    <BoxWithColorFn color={'red'} />
                    <BoxWithThemeColor />
                    <BoxWithThemeColorFn />
                    <BoxWithThemeColor theme={{ color: 'green' }} />
                    <BoxWithThemeColorFn theme={{ color: 'orange' }} />
                    <BoxWithAnimation />
                    <BoxWithConditionals isActive />
                    <BoxWithShared />
                    <BoxWithSharedAndConditional />
                    <div className={css([shared, { background: 'cyan' }])} />
                </div>
            </ThemeContext.Provider>,
            target
        );

        expect(extractCss()).toMatchInlineSnapshot(
            [
                '"',
                ' ', // Empty white space that holds the textNode that the styles are appended
                '@keyframes go384228713{0%{opacity:0;}99%{opacity:1;color:dodgerblue;}}',
                '.go1127809067{opacity:0;background:cyan;}',
                '.go3865451590{color:red;}',
                '.go3991234422{color:cyan;}',
                '.go3991234422 .go3865451590{border:1px solid red;}',
                '.go1925576363{color:blue;}',
                '.go3206651468{color:green;}',
                '.go4276997079{color:orange;}',
                '.go2069586824{opacity:0;animation:go384228713 500ms ease-in-out;}',
                '.go631307347{foo:1;color:red;baz:0;}',
                '.go3865943372{opacity:0;}',
                '.go1162430001{opacity:0;baz:0;}',
                '"'
            ].join('')
        );

        expect(refSpy).toHaveBeenCalledWith(
            expect.objectContaining({
                tagName: 'SPAN'
            })
        );
    });
});
