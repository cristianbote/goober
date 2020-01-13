import { h, ComponentChildren } from 'preact';
import { styled, setPragma, css, glob } from '../goober';

setPragma(h);

const testStyledCss = () => {
    interface ButtonProps {
        clicked: boolean;
        children: ComponentChildren;
        color?: string;
    }

    const buttonStyles = css<Pick<ButtonProps, 'color'>>`
        background: ${props => props.color || 'black'};
    `;

    const buttonStylesRaw = css`
        background: black;
    `;

    const Button = styled<ButtonProps>('button')`
        background: ${props => (props.color ? props.color : 'black')};
    `;

    const ButtonRaw = styled<ButtonProps>('button')`
        background: black;
    `;

    const EmptyPropsText = styled('p')`
        color: blue;
    `;

    const NestedText = styled(EmptyPropsText)`
        color: red;
    `;

    const TestComp = () => {
        return (
            <div>
                <Button clicked={false} color="red">
                    click me
                </Button>
                <ButtonRaw clicked={false}>click me</ButtonRaw>
                <button class={buttonStyles({ color: 'red' })}>click me</button>
                <button class={buttonStylesRaw()}>click me</button>
                <EmptyPropsText>base text</EmptyPropsText>
                <NestedText>text</NestedText>
            </div>
        );
    };
};

const testGlob = () => {
    glob`
  html,
  body {
    background: light;
  }

  * {
    box-sizing: border-box;
  }
  `;

    glob(`
  html,
  body {
    background: light;
  }

  * {
    box-sizing: border-box;
  }
  `);

    glob({
        body: {
            background: 'light'
        }
    });
};
