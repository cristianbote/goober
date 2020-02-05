import { h, ComponentChildren } from 'preact';
import { styled, setPragma, css, glob } from '../goober';

setPragma(h);

const testStyledCss = () => {
    interface ButtonProps {
        clicked: boolean;
        children: ComponentChildren;
        color?: string;
    }

    const buttonStyles = ({ color }: Pick<ButtonProps, 'color'>) => css`
        background: ${color || 'black'};
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

    const MultipleFunctions = styled<{ isActive: boolean }>('b')`
        color: ${props => (props.isActive ? 'tomato' : 'dodgerblue')};
        background-color: ${props => (props.isActive ? 'tomato' : 'dodgerblue')};
    `;

    const TestComp = () => {
        return (
            <div>
                <Button clicked={false} color="red">
                    click me
                </Button>
                <ButtonRaw clicked={false}>click me</ButtonRaw>
                <button class={buttonStyles({ color: 'red' })}>click me</button>
                <button class={buttonStylesRaw}>click me</button>
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
