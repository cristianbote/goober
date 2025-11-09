import { h, ComponentChildren } from 'preact';
import { setup, css, glob, keyframes } from '../goober';

setup();

const testCss = () => {
    interface ButtonProps {
        clicked: boolean;
        children: ComponentChildren;
        color?: string;
    }

    const buttonStyles = ({ color }: Pick<ButtonProps, 'color'>) =>
        css({
            background: color || 'black'
        });

    const buttonStylesRaw = css({
        background: 'black'
    });

    const buttonStylesObject = (props: { disabled?: boolean }) =>
        css({
            background: props.disabled ? 'gray' : 'tomato'
        });

    const animation = keyframes({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    });

    const animatedStyles = css({
        animation: `${animation} 1s ease-in-out`
    });

    const TestComp = () => {
        return (
            <div>
                <button class={buttonStyles({ color: 'red' })}>click me</button>
                <button class={buttonStylesRaw}>click me</button>
                <button class={buttonStylesObject({ disabled: true })}>disabled</button>
                <div class={animatedStyles}>animated</div>
            </div>
        );
    };
};

const testGlob = () => {
    glob({
        html: {
            background: 'light'
        },
        body: {
            background: 'light'
        },
        '*': {
            boxSizing: 'border-box'
        }
    });
};
