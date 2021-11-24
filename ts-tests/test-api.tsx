import { h, ComponentChildren } from 'preact';
import { forwardRef as preactForwardRef } from 'preact/compat';
import { forwardRef as reactForwardRef } from 'react';
import { styled, setup, css, glob, keyframes } from '../goober';

// This would be an ambient module declaration in the client's project
declare module '../goober' {
    export interface DefaultTheme {
        colors: {
            primary: string;
        };
    }
}

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

    const animation = keyframes`
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    `;

    const Animated = styled('div')`
        animation: ${animation} 1s ease-in-out;
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

    const ThemeContainer = styled('div')<{ isActive: boolean }>`
        color: ${(props) => (props.isActive ? 'tomato' : 'dodgerblue')};
        background-color: ${(props) => props.theme.colors.primary};
    `;

    const BoxWithLogicalAnd = styled('div')<{ border: boolean }>`
        color: red;

        ${({ border }) =>
            border &&
            `
                border: 1px solid red;
            `}
    `;

    const BoxWithTernary = styled('div')<{ border: boolean }>`
        color: red;

        ${({ border }) =>
            border
                ? `
                border: 1px solid red;
            `
                : ``}
    `;

    Button.displayName = 'displayName';

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
                <CustomTagged as={'custom'}>test</CustomTagged>
                <Childless />
                <StyledHello name="you" />
                <StyledObject disabled />
                <Animated>test</Animated>
                <ThemeContainer isActive={true} />
                <BoxWithLogicalAnd border />
                <BoxWithTernary border />
            </div>
        );
    };

    const ReactForwardRefTest = styled('div', reactForwardRef);

    const PreactForwardRefTest = styled('div', preactForwardRef);
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
