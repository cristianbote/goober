import { useEffect, useState, useCallback, useRef } from 'preact/hooks';
import { styled } from 'goober';
import { Box } from '../box/box';
import { Text } from '../text/text';

const Wrapper = styled('div')(({ show, theme }) => [
    {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        opacity: 0,
        transition: 'opacity 200ms ease-out',
        boxShadow: [0, theme.sizes[100], theme.sizes[400], theme.colors['black']].join(' ')
    },
    show && { opacity: 1 }
]);

const BoxWithCenter = styled(Box)({
    alignItems: 'center',
    justifyContent: 'space-between'
});

export const Nav = ({ logo, buttons }) => {
    const [show, setShow] = useState(false);
    const point = useRef();
    const listener = useCallback(
        (e) => {
            const pos = e.currentTarget.scrollY;

            if (!point.current) point.current = document.body.offsetHeight * 0.33;

            if (!show && pos >= point.current) {
                setShow(true);
            } else {
                setShow(false);
            }
        },
        [setShow]
    );

    useEffect(() => {
        window.addEventListener('scroll', listener, { passive: true });
        return () => {
            window.removeEventListener('scroll', listener);
        };
    }, []);
    return (
        <Wrapper show={show}>
            <Box reactive size={300} centered full horizontal bg={'gray-50'}>
                <BoxWithCenter full max horizontal reactive>
                    <Box horizontal centered>
                        <Text size={400} superSpaced>
                            {logo}
                        </Text>
                        <Box size={200} />
                        <Text as="h2" faded>
                            A less than 1KB css-in-js solution
                        </Text>
                    </Box>
                    <Box size={200} />
                    <Box horizontal>{buttons}</Box>
                </BoxWithCenter>
            </Box>
        </Wrapper>
    );
};
