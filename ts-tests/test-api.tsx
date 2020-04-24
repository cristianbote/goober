import { h, ComponentChildren } from 'preact';
import { styled, setup, css, glob } from '../goober';

setup(h);

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

    const Button = styled('button')<ButtonProps>`
        background: ${(props) => (props.color ? props.color : 'black')};
    `;

    const ButtonRaw = styled('button')<ButtonProps>`
        background: black;
    `;

    const EmptyPropsText = styled('p')`
        color: blue;
    `;

    const NestedText = styled(EmptyPropsText)`
        color: red;
    `;

    const CustomTagged = styled('a-web-component')`
        color: lightyellow;
    `;

    const Childless = styled('div')`
        color: purple;
    `;

    const HelloComponent = (props: { name: string }) => <h1>Hello, {props.name}</h1>;

    const StyledHello = styled(HelloComponent)`
        color: blue;
    `;

    const MultipleFunctions = styled('b')<{ isActive: boolean }>`
        color: ${(props) => (props.isActive ? 'tomato' : 'dodgerblue')};
        background-color: ${(props) => (props.isActive ? 'tomato' : 'dodgerblue')};
    `;

    const StyledObject = styled('button')((props) => ({
        background: props.disabled ? 'gray' : 'tomato'
    }));

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
                <MultipleFunctions isActive={false} />
                <CustomTagged>test</CustomTagged>
                <Childless />
                <StyledHello name="you" />
                <StyledObject disabled />
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
