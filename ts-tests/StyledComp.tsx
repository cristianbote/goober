import { h, Component } from 'preact';
import { styled, setPragma } from '../goober';

setPragma(h);

interface IButtonProps {
    clicked: boolean;
    color?: string;
}

const Button = styled<IButtonProps>('button')`
    background: ${props => (props.color ? props.color : 'black')};
`;

class TestComp extends Component {
    public render () {
        return (
            <div>
                <Button clicked={false}></Button>
            </div>
        )
    };
}
