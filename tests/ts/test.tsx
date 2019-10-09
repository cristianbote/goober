import { h, Component } from 'preact';
import { styled, setPragma } from '../..';

setPragma(h);

interface IButtonProps {
    clicked: boolean;
}

const Button = styled<IButtonProps>('button')`
    background: blue,
`;

class TestComp extends Component {
    public render () {
        return (
            <Button clicked={false}></Button>
        )
    };
}
