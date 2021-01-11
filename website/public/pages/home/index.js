import { styled } from 'goober';
import { Box } from '../../components/box/box';
import { Button } from '../../components/button/button';
import { Feature } from '../../components/feature/feature';
import { Text } from '../../components/text/text';

const BoxWithBorder = styled(Box)(({ theme }) => ({
    borderTop: `1px solid ${theme.colors['gray-100']}`
}));

const BoxOverlapAndShadow = styled(Box)(({ theme, size }) => ({
    boxShadow: [0, theme.sizes[100], theme.sizes[400], theme.colors['gray-25']].join(' '),
    marginTop: '-' + theme.sizes[size]
}));

const TopLeft = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: theme.sizes[400],
    left: theme.sizes[400],
    flexDirection: 'row',
    '> * + *': {
        marginLeft: theme.sizes[200]
    }
}));

const Dot = styled('div')(({ theme, bg }) => ({
    width: theme.sizes[300],
    height: theme.sizes[300],
    borderRadius: '50%',
    backgroundColor: theme.colors[bg]
}));

const Code = styled('pre')(({ theme }) => ({
    color: theme.colors['gray-300'],
    fontSize: theme.fontSizes['300'],
    b: {
        fontWeight: 'normal',
        color: theme.colors['accent-100']
    },
    i: { fontStyle: 'normal', color: theme.colors['accent-200'] },
    u: { textDecoration: 'none', color: theme.colors['accent-300'] }
}));

export default function Home() {
    return (
        <Box full>
            <Box size={700} centered full>
                <Text size={600} as="h1" bold spaced>
                    <Text as="span" bold color="accent-100">
                        g
                    </Text>
                    <Text as="span" bold color="accent-400">
                        o
                    </Text>
                    <Text as="span" bold color="accent-100">
                        o
                    </Text>
                    <Text as="span" bold color="accent-500">
                        b
                    </Text>
                    <Text as="span" bold color="accent-400">
                        e
                    </Text>
                    <Text as="span" bold color="accent-300">
                        r
                    </Text>
                </Text>
                <Box size={300} />
                <Text as="h2" faded>
                    A less than 1KB css-in-js solution
                </Text>
            </Box>
            <Box full centered>
                <Box size={400} rounded={100} centered horizontal>
                    <Button secondary>Documentation</Button>
                    <Box size={300} />
                    <Button>GitHub</Button>
                </Box>
                <Box size={500} />
                <Box centered full>
                    <Box size={600} rounded={300} bg="gray-25">
                        <Code
                            dangerouslySetInnerHTML={{
                                __html: `<i>import</i> { <b>styled</b> } <i>from</i> <u>'goober'</u>;

<i>const</i> <b>Button</b> = <b>styled</b>(<u>'button'</u>)\`
  <i>border</i>: 0;
  <i>background</i/>: dodgerblue;

  <i>span</i/> {
    <i>color</i/>: white;
  }

  <i>&:hover</i/> {
    <i>background</i/>: tomato;
    <i>span</i/> {
      <i>color</i/>: black;
    }
  }
\`;`
                            }}
                        />
                    </Box>
                    <BoxOverlapAndShadow bg="gray-50" size={500} rounded={300}>
                        <TopLeft>
                            <Dot bg="accent-100" />
                            <Dot bg="accent-500" />
                            <Dot bg="accent-200" />
                        </TopLeft>
                        <Text mono size={300} color="gray-300">
                            npm install &nbsp;
                            <Text as="span" mono bold color="accent-100">
                                goober
                            </Text>
                        </Text>
                    </BoxOverlapAndShadow>
                </Box>
                <Box size={600} />
                <Text size={300} bold>
                    Features
                </Text>
                <Text size={300} faded>
                    Even though small in size &nbsp;
                    <Text color="accent-100" size={200} bold as="span">
                        {' '}
                        goober
                    </Text>{' '}
                    &nbsp; has got you covered, feature wise.
                </Text>
                <Box size={400} />
                <Box horizontal full max reactive size={400}>
                    <Box flex>
                        <Feature title={'Lightweight'}>
                            As the subtitle notes, this is the smallest and fullest featured
                            css-in-js solution out there. Weighing at 1KB and once bundled it's
                            gonna be less due to tree-shake.
                        </Feature>
                        <Box size={400} />
                        <Feature title={'Familiar API'}>
                            <Text color="accent-100" size={200} bold as="span">
                                goober
                            </Text>{' '}
                            &nbsp; is built on the shoulders of well established solutions. That
                            means the API has been paved and we need to follow it. You'll find{' '}
                            &nbsp;
                            <Text color="accent-200" size={200} bold as="span">
                                as
                            </Text>
                            , &nbsp;
                            <Text color="accent-200" size={200} bold as="span">
                                forwardRef
                            </Text>
                            , &nbsp;
                            <Text color="accent-200" size={200} bold as="span">
                                css
                            </Text>
                            , &nbsp;
                            <Text color="accent-200" size={200} bold as="span">
                                keyframes
                            </Text>
                            , &nbsp;
                            <Text color="accent-200" size={200} bold as="span">
                                styled
                            </Text>{' '}
                            &nbsp; and so much more.
                        </Feature>
                        <Box size={400} />
                        <Feature title="Themeing">
                            Easily access your common sizes, colors, anything really with the use of
                            a theme.
                        </Feature>
                    </Box>
                    <Box size={300} />
                    <Box flex>
                        <Box size={200}>
                            <Text size={300} bold>
                                Performant
                            </Text>
                            <Box size={200} />
                            <Text size={200} faded>
                                <Text color="accent-100" size={200} bold as="span">
                                    goober
                                </Text>{' '}
                                &nbsp; does more with less! Since the code measure less in size,
                                it's served, read and ran quicker.
                            </Text>
                        </Box>
                        <Box size={400} />
                        <Box size={200}>
                            <Text size={300} bold>
                                Server-Side Rendering
                            </Text>
                            <Box size={200} />
                            <Text size={200} faded>
                                On the server you can easily extract the css for the current state
                                with &nbsp;
                                <Text color="accent-200" size={200} bold as="span">
                                    extractCss
                                </Text>
                                .
                            </Text>
                        </Box>
                        <Box size={400} />
                        <Box size={200}>
                            <Text size={300} bold>
                                Why the 🥜
                            </Text>
                            <Box size={200} />
                            <Text size={200} faded>
                                The initial thought of &nbsp;
                                <Text color="accent-100" size={200} bold as="span">
                                    goober
                                </Text>{' '}
                                &nbsp; was a css-in-js solution at the cost of peanunts. Hence the
                                peanuts emoji.
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box size={400} />
            <BoxWithBorder centered full>
                <Box horizontal full max reactive size={400}>
                    <Box flex>
                        <Box size={200}>
                            <Text size={100} bold>
                                goober
                            </Text>
                            <Text size={100}>A less than 1KB css-in-js solution.</Text>
                            <Box size={300} />
                            <Text size={100}>Maintained with love by a bunch of good people.</Text>
                        </Box>
                    </Box>
                    <Box size={300} />
                    <Box>
                        <Box size={200}>
                            <Text as="a" href="/" size={100} bold>
                                Documentation
                            </Text>
                            <Box size={300} />
                            <Text as="a" href="https://github.com" size={100} bold>
                                GitHub
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </BoxWithBorder>
        </Box>
    );
}
