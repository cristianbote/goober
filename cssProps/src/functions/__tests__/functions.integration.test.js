import { h, createContext, render } from 'preact';
import { useContext } from 'preact/hooks';
import { setup, extractCss, css, styled } from 'goober';
import { color, background } from '../../props/index';
import { rgb } from '../index'

describe('css functions', () => {
    it('regular', () => {
        setup(h);

        const target = document.createElement('div');

        const cssClass = css([
            color(rgb(0,0,255)),
            background("#FFA500")
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
            color(rgb(255,128,0)),
            background(props.theme.color)
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
