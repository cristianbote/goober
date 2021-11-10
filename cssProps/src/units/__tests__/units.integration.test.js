import { h, createContext, render } from 'preact';
import { useContext } from 'preact/hooks';
import { setup, extractCss, css, styled } from 'goober';
import { minWidth, fontSize } from '../../props/index';
import { px, em } from '../index';

describe('cssUnits', () => {
    it('regular', () => {
        setup(h);

        const target = document.createElement('div');

        const cssClass = css([
            minWidth(px(10)),
            fontSize(em(20))
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
            minWidth(px(10)),
            fontSize(em(props.theme.minSize))
        ]));

        render(
            <ThemeContext.Provider value={{ minSize: 20 }}>
                <ThemeContainer/>
            </ThemeContext.Provider>,
            target
        );

        expect(extractCss()).toMatchSnapshot();
        expect(target.innerHTML).toMatchSnapshot();
    });
});
