import { h, render } from 'preact';
import { setup, styled } from '../index';
import { extractCss } from '../core/update';

/** @jsx h */

describe('integrations', () => {
    it('preact', () => {
        setup(h);

        const target = document.createElement('div');

        const Box = styled('div')`
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

        render(
            <div>
                <Box />
                <BoxWithColor color={'red'} />
                <BoxWithColorFn color={'red'} />
            </div>,
            target
        );

        expect(extractCss()).toEqual(' .go3707426746{color:red;}');
    });
});
