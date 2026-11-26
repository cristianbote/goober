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

        const BoxWithHas = styled('div')`
            label:has(input, select),
            :has(foo, boo) {
                color: red;
            }
        `;

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
                    <BoxWithHas />
                </div>
            </ThemeContext.Provider>,
            target
        );

        expect(extractCss()).toEqual(
            ' @keyframes go384228713{0%{opacity:0;}99%{opacity:1;color:dodgerblue;}}.go1127809067{opacity:0;background:cyan;}.go3863553999{color:red;}.go878590034{color:cyan;}.go878590034 .go3863553999{border:1px solid red;}.go3863554001{color:red;}.go3863554002{color:red;}.go1209684396{color:blue;}.go1209684397{color:blue;}.go1749251121{color:green;}.go2479975433{color:orange;}.go2869839071{opacity:0;animation:go384228713 500ms ease-in-out;}.go3632499959{foo:1;color:red;baz:0;}.go3913223989{opacity:0;}.go3838708238{opacity:0;baz:0;}.go4211283680 label:has(input, select),.go4211283680  :has(foo, boo){color:red;}'
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
            `"<div><div class=\\"go208584045\\"></div><div class=\\"go416704847\\"></div><span class=\\"go2480855009\\"></span></div>"`
        );

        expect(extractCss()).toEqual(
            '.go208584045{color:white;padding:0em;}.go416704847{color:white;padding:2em;}.go2480855009{color:white;padding:3em;margin:1em;}'
        );
    });
});
