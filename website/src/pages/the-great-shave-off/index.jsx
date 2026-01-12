import { keyframes, styled } from 'goober';
import { Box } from '../../components/box/box';
import { Logo } from '../../components/logo/logo';
import { Text } from '../../components/text/text';

const bg = keyframes({
    from: {
        backgroundSize: '100%'
    },
    '50%': {
        backgroundSize: '200%'
    },
    to: {
        backgroundSize: '100%'
    }
});

const SuperTitle = styled(Text)(({ theme }) => ({
    backgroundImage: `linear-gradient(to left, ${theme.colors['accent-300']}, ${theme.colors['accent-100']})`,
    backgroundSize: '100%',
    padding: theme.sizes[100],
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bolder',
    animation: `${bg} 10s linear infinite`
}));

export default function TheGreatShaveOff() {
    return (
        <Box centered fill full size={400}>
            <SuperTitle size={600} bold>
                The Great Shave Off
            </SuperTitle>
            <Box marginAuto max full size={400}>
                <Text size={400} bold>
                    Hello there!
                </Text>
                <Box size={200} />
                <Text>
                    <Logo /> is all about keeping it small and offer the same functionalities. So
                    with that, we're launching a new challenge open to <b>everyone</b> who wants to
                    try it!
                </Text>
                <Box size={200} />
                <Text>
                    In exchange of your byte shavings we are offering <b>1USD</b> dollar for each{' '}
                    <b>1B</b> removed from goober's output, minified and gzipped.
                </Text>
                <Box size={400} />
                <Text size={400}>How it's all gonna happen</Text>
                <Box size={200} />
                <Text>
                    Step 1: Clone the repo from 👉{' '}
                    <Text
                        as="a"
                        href="https://github.com/cristianbote/goober"
                        color="accent-100"
                        bold
                    >
                        https://github.com/cristianbote/goober
                    </Text>
                </Text>
                <Box size={300} />
                <Text>Step 2: Do your magic of shaving off bytes!</Text>
                <Box size={300} />
                <Text>Step 3: Open a PR to the above repo with the changes.</Text>
                <Text faded>
                    On each PR there's an action that builds out the changes and computes the amout
                    of shavings.
                </Text>
                <Box size={300} />
                <Text>
                    Step 4: Submit an expense into <Logo />
                    's open collective 👉{' '}
                    <Text as="a" href="https://opencollective.com/goober" color="accent-100" bold>
                        https://opencollective.com/goober
                    </Text>
                </Text>
                <Text faded>
                    The amount should be calculated as per the amount of bytes reported by the
                    action.
                </Text>
                <Text as="pre" faded>
                    -1 B = 1 USD\n-10 B = 10 USD\n-100 B = 100 USD
                </Text>
                <Box size={400} />
                <Text size={400}>That's about it!</Text>
                <Text>
                    If you have more questions don't hesitate to reach out by opening an issue.
                </Text>
                <Box size={400} />
                <Text>
                    This challenge would not be possible without the financial support from our
                    backers. And with this we would like to thank them for their support! 🙏
                </Text>
                <Box size={200} />
                <Text>
                    If you'd like to support <Logo /> as well go to our{' '}
                    <Text as="a" href="https://opencollective.com/goober" color="accent-100" bold>
                        https://opencollective.com/goober
                    </Text>{' '}
                    and become one!
                </Text>
            </Box>
        </Box>
    );
}
