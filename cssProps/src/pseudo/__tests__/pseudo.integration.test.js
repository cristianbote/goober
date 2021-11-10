import { h, createContext, render } from 'preact';
import { useContext } from 'preact/hooks';
import { setup, extractCss, css, styled } from 'goober';
import { color, background } from '../../props/index';
import { hover } from '../index';

describe('pseudoSelectors', () => {
    it('regular', () => {
        setup(h);

        const target = document.createElement('div');

        const cssClass = css([
            hover([
                color("blue"),
                background("orange")
            ])
        ])

        render(
            <div className={cssClass}>
            </div>,
            target
        );

        expect(extractCss()).toMatchSnapshot();
        expect(target.innerHTML).toMatchSnapshot();
    });

    it('with theme', () => {
        const ThemeContext = createContext();
        const useTheme = () => useContext(ThemeContext);

        setup(h, null, useTheme);

        const target = document.createElement('div');

        const ThemeContainer = styled('div')((props) => ([
            hover([
                color("orange"),
                background(props.theme.color)
            ])
        ]));

        render(
            <ThemeContext.Provider value={{ color: 'blue' }}>
                <ThemeContainer/>
            </ThemeContext.Provider>,
            target
        );

        expect(extractCss()).toMatchSnapshot();
        expect(target.innerHTML).toMatchSnapshot();
    });
});
