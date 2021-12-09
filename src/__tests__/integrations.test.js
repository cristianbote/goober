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

        const PlainButton = styled('button')``;
        const AnotherPlainButton = styled('button')``;

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
                    <PlainButton />
                    <AnotherPlainButton />
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
                '<span class="go3865451590"></span>',
                '<div class="go3865451590"></div>',
                '<div class="go3682718143">',
                '<span class="go3865451590"></span>',
                '</div>',
                '<button class="go1161"></button>',
                '<button class="go1162"></button>',
                '<div color="red" class="go3863554002"></div>',
                '<div color="red" class="go3863554003"></div>',
                '<div class="go1209684397"></div>',
                '<div class="go1209684398"></div>',
                '<div theme="[object Object]" class="go1749251122"></div>',
                '<div theme="[object Object]" class="go2479975434"></div>',
                '<span class="go2869839072"></span>',
                '<div isactive="true" class="go3632499960"></div>',
                '<div class="go98630897"></div>',
                '<div class="go3838708239"></div>',
                '<div class="go1127809067"></div>',
                '</div>'
            ].join('')
        );

        expect(extractCss()).toMatchInlineSnapshot(
            [
                '"',
                ' ', // Empty white space that holds the textNode that the styles are appended
                '@keyframes go384228713{0%{opacity:0;}99%{opacity:1;color:dodgerblue;}}',
                '.go1127809067{opacity:0;background:cyan;}',
                '.go3865451590{color:red;}',
                '.go3682718143{color:cyan;}',
                '.go3682718143 ',
                '.go3865451590{border:1px solid red;}',
                '.go3863554002{color:red;}',
                '.go3863554003{color:red;}',
                '.go1209684397{color:blue;}',
                '.go1209684398{color:blue;}',
                '.go1749251122{color:green;}',
                '.go2479975434{color:orange;}',
                '.go2869839072{opacity:0;animation:go384228713 500ms ease-in-out;}',
                '.go3632499960{foo:1;color:red;baz:0;}',
                '.go98630897{opacity:0;}',
                '.go3838708239{opacity:0;baz:0;}',
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
                '<div class="go208584043"></div>',
                '<div class="go416704845"></div>',
                '<span class="go2480855007"></span>',
                '<button class="go713643136 go2882251333"></button>',
                '</div>'
            ].join('')
        );

        expect(extractCss()).toMatchInlineSnapshot(
            [
                '"',
                '.go713643136{color:white;padding:0em;margin:1em;}',
                '.go208584043{color:white;padding:0em;}',
                '.go416704845{color:white;padding:2em;}',
                '.go2480855007{color:white;padding:3em;margin:1em;}',
                '.go2882251333{background:dodgerblue;}',
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
                '<div class="go208584045"></div>',
                '<div class="go416704847"></div>',
                '<span class="go2480855009"></span>',
                '</div>'
            ].join(''),
            `"<div><div class=\\"go208584043\\"></div><div class=\\"go416704845\\"></div><span class=\\"go2480855007\\"></span></div>"`
        );

        expect(extractCss()).toMatchInlineSnapshot(
            [
                '"',
                '.go208584045{color:white;padding:0em;}',
                '.go416704847{color:white;padding:2em;}',
                '.go2480855009{color:white;padding:3em;margin:1em;}',
                '"'
            ].join('')
        );
    });
});
