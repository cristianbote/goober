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

        const Button = styled('button')``;
        const AnotherButton = styled('button')``;

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
                    <Button />
                    <AnotherButton />
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

        expect(target.innerHTML).toEqual(
            [
                '<div>',
                '<span class="go2">',
                '</span>',
                '<div class="go2">',
                '</div>',
                '<div class="go3">',
                '<span class="go2">',
                '</span>',
                '</div>',
                '<button class="go4">',
                '</button>',
                '<button class="go5">',
                '</button>',
                '<div color="red" class="go6">',
                '</div>',
                '<div color="red" class="go7">',
                '</div>',
                '<div class="go8">',
                '</div>',
                '<div class="go9">',
                '</div>',
                '<div theme="[object Object]" class="go10">',
                '</div>',
                '<div theme="[object Object]" class="go11">',
                '</div>',
                '<span class="go12">',
                '</span>',
                '<div isactive="true" class="go13">',
                '</div>',
                '<div class="go14">',
                '</div>',
                '<div class="go15">',
                '</div>',
                '<div class="go1">',
                '</div>',
                '</div>'
            ].join('')
        );

        expect(extractCss()).toMatchInlineSnapshot(
            [
                '"',
                ' ', // Empty white space that holds the textNode that the styles are appended
                '@keyframes go0{0%{opacity:0;}99%{opacity:1;color:dodgerblue;}}',
                '.go1{opacity:0;background:cyan;}',
                '.go2{color:red;}',
                '.go3{color:cyan;}',
                '.go3 .go2{border:1px solid red;}',
                '.go6{color:red;}',
                '.go7{color:red;}',
                '.go8{color:blue;}',
                '.go9{color:blue;}',
                '.go10{color:green;}',
                '.go11{color:orange;}',
                '.go12{opacity:0;animation:go0 500ms ease-in-out;}',
                '.go13{foo:1;color:red;baz:0;}',
                '.go14{opacity:0;}',
                '.go15{opacity:0;baz:0;}',
                '"'
            ].join('')
        );

        expect(refSpy).toHaveBeenCalledWith(
            expect.objectContaining({
                tagName: 'SPAN'
            })
        );
    });

    it('support extending with as', () => {
        const list = ['p', 'm', 'as', 'bg'];
        setup(h, undefined, undefined, (props) => {
            for (let prop in props) {
                if (list.indexOf(prop) !== -1) {
                    delete props[prop];
                }
            }
        });
        const target = document.createElement('div');

        const Base = styled('div')(({ p = 0, m }) => [
            {
                color: 'white',
                padding: p + 'em'
            },
            m != null && { margin: m + 'em' }
        ]);

        const Super = styled(Base)`
            background: ${(p) => p.bg || 'none'};
        `;

        render(
            <div>
                <Base />
                <Base p={2} />
                <Base m={1} p={3} as={'span'} />
                <Super m={1} bg={'dodgerblue'} as={'button'} />
            </div>,
            target
        );

        // Makes sure the resulting DOM does not contain any props
        expect(target.innerHTML).toEqual(
            [
                '<div>',
                '<div class="go16"></div>',
                '<div class="go17"></div>',
                '<span class="go18"></span>',
                '<button class="go20 go19"></button>',
                '</div>'
            ].join('')
        );

        expect(extractCss()).toMatchInlineSnapshot(
            [
                '"',
                '.go20{color:white;padding:0em;margin:1em;}',
                '.go16{color:white;padding:0em;}',
                '.go17{color:white;padding:2em;}',
                '.go18{color:white;padding:3em;margin:1em;}',
                '.go19{background:dodgerblue;}',
                '"'
            ].join('')
        );
    });

    it('shouldForwardProps', () => {
        const list = ['p', 'm', 'as'];
        setup(h, undefined, undefined, (props) => {
            for (let prop in props) {
                if (list.indexOf(prop) !== -1) {
                    delete props[prop];
                }
            }
        });

        const target = document.createElement('div');

        const Base = styled('div')(({ p = 0, m }) => [
            {
                color: 'white',
                padding: p + 'em'
            },
            m != null && { margin: m + 'em' }
        ]);

        render(
            <div>
                <Base />
                <Base p={2} />
                <Base m={1} p={3} as={'span'} />
            </div>,
            target
        );

        // Makes sure the resulting DOM does not contain any props
        expect(target.innerHTML).toEqual(
            [
                '<div>',
                '<div class="go21"></div>',
                '<div class="go22"></div>',
                '<span class="go23"></span>',
                '</div>'
            ].join('')
        );

        expect(extractCss()).toMatchInlineSnapshot(
            [
                '"',
                '.go21{color:white;padding:0em;}',
                '.go22{color:white;padding:2em;}',
                '.go23{color:white;padding:3em;margin:1em;}',
                '"'
            ].join('')
        );
    });
});
