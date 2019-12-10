import { h, render } from 'preact';
import { forwardRef } from 'preact/compat';
import { setPragma, setForwardRef, styled } from '../index';
import { extractCss } from '../core/update';

describe("integrations", () => {

    it("preact", () => {
        setPragma(h);
        setForwardRef(forwardRef);

        const target = document.createElement('div');

        const Box = styled('div')`
            color: red;
        `;

        const BoxWithColor = styled('div')`
            color: ${props => props.color};
        `;

        const BoxWithColorFn = styled('div')(props => `
            color: ${props.color};
        `);

        let element;

        render(
            <div>
                <Box
                    ref={el => { element = el; }}
                    className="original-cls"
                />
                <BoxWithColor color={'red'} />
                <BoxWithColorFn color={'red'} />
            </div>
            ,
            target
        );

        expect(extractCss()).toEqual(' .go2155{color:red;}');
        expect(element.tagName).toBe('DIV');
        expect(element.className).toBe('go2155 original-cls');
    });

});