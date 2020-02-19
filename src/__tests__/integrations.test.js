import { h, createContext, render } from 'preact';
import { useContext, forwardRef } from 'preact/compat';
import { setup, styled } from '../index';
import { extractCss } from '../core/update';

describe('integrations', () => {
    it('preact', () => {
        const ThemeContext = createContext();
        const useTheme = () => useContext(ThemeContext);

        setup(h, null, forwardRef, useTheme);

        const target = document.createElement('div');

        const Span = styled('span')`
            color: red;
        `;

        const BoxWithColor = styled('div')`
            color: ${props => props.color};
        `;

        const BoxWithColorFn = styled('div')(
            props => `
            color: ${props.color};
        `
        );

        const BoxWithThemeColor = styled('div')`
            color: ${props => props.theme.color};
        `;

        const BoxWithThemeColorFn = styled('div')(
            props => `
            color: ${props.theme.color};
        `
        );

        const refSpy = jest.fn();

        render(
            <ThemeContext.Provider value={{ color: 'blue' }}>
                <div>
                    <Span ref={refSpy} />
                    <BoxWithColor color={'red'} />
                    <BoxWithColorFn color={'red'} />
                    <BoxWithThemeColor />
                    <BoxWithThemeColorFn />
                    <BoxWithThemeColor theme={{ color: 'green' }} />
                    <BoxWithThemeColorFn theme={{ color: 'orange' }} />
                </div>
            </ThemeContext.Provider>,
            target
        );

        expect(extractCss()).toMatchInlineSnapshot(
            `" .go3707426746{color:red;}.go1167793535{color:blue;}.go1969535680{color:green;}.go4157736827{color:orange;}"`
        );
        expect(refSpy).toHaveBeenCalledWith(
            expect.objectContaining({
                tagName: 'SPAN'
            })
        );
    });
});
