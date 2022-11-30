import { styled } from 'goober';
import { Box } from '../../components/box/box';
import { Button } from '../../components/button/button';
import { Feature } from '../../components/feature/feature';
import { Text } from '../../components/text/text';
import { Logo } from '../../components/logo/logo';

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
        <>
            <Box size={700} centered full>
                <Text size={600} as="h1" bold superSpaced>
                    <Logo />
                </Text>
                <Box size={300} />
                <Text as="h2" faded>
                    A less than 1KB css-in-js solution
                </Text>
            </Box>
            <Box full centered>
                <Button as="a" href="/the-great-shave-off">
                    <Text color="accent-100" bold>
                        The Great Shave Off Challenge
                    </Text>
                </Button>
                <Box size={400} />
                <Box size={400} rounded={100} centered horizontal>
                    <Button as="a" href="https://goober.js.org/" secondary>
                        Documentation
                    </Button>
                    <Box size={300} />
                    <Button as="a" href="https://github.com/cristianbote/goober">
                        GitHub
                    </Button>
                </Box>
                <Box size={500} />
                <Box centered full fill>
                    <Box size={600} rounded={300} bg="gray-25">
                        <Code
                            dangerouslySetInnerHTML={{
                                __html: `<i>import</i> { <b>styled</b> } <i>from</i> <u>'goober'</u>;

<i>const</i> <b>Button</b> = <b>styled</b>(<u>'button'</u>)\`
  <i>border</i>: 0;
  <i>background</i>: dodgerblue;

  <i>span</i> {
    <i>color</i>: white;
  }

  <i>&:hover</i> {
    <i>background</i>: tomato;
    <i>span</i> {
      <i>color</i>: black;
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
                            npm install
                            <Text pl={200} as="span" mono bold color="accent-100">
                                goober
                            </Text>
                        </Text>
                    </BoxOverlapAndShadow>
                    <Box size={300} />
                </Box>
                <Box size={200} />
                <Box size={400} centered full fill>
                    <Text size={300} bold>
                        Features
                    </Text>
                    <Text size={300} faded>
                        Even though small in size
                        <Text ph={200} color="accent-100" size={200} bold as="span">
                            goober
                        </Text>
                        has got you covered, feature wise.
                    </Text>
                </Box>
                <Box size={200} />
                <Box horizontal fill full max reactive size={400}>
                    <Box flex>
                        <Feature title={'Lightweight'}>
                            As the subtitle notes, this is the smallest and fullest featured
                            css-in-js solution out there. Weighing at 1KB and once bundled it's
                            gonna be less due to tree-shake.
                        </Feature>
                        <Box size={400} />
                        <Feature title={'Familiar API'}>
                            <Text pr={200} color="accent-100" size={200} bold as="span">
                                goober
                            </Text>
                            is built on the shoulders of well established solutions. That means the
                            API has been paved and we need to follow it. You'll find
                            <Text pl={200} color="accent-200" size={200} bold as="span">
                                as
                            </Text>
                            ,
                            <Text pl={200} color="accent-200" size={200} bold as="span">
                                forwardRef
                            </Text>
                            ,
                            <Text pl={200} color="accent-200" size={200} bold as="span">
                                css
                            </Text>
                            ,
                            <Text pl={200} color="accent-200" size={200} bold as="span">
                                keyframes
                            </Text>
                            ,
                            <Text ph={200} color="accent-200" size={200} bold as="span">
                                styled
                            </Text>
                            and so much more.
                        </Feature>
                        <Box size={400} />
                        <Feature title="Theming">
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
                                <Text pr={200} color="accent-100" size={200} bold as="span">
                                    goober
                                </Text>
                                does more with less! Since the code measure less in size, it's
                                served, read and ran quicker.
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
                                with
                                <Text pl={200} color="accent-200" size={200} bold as="span">
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
                                The initial thought of
                                <Text ph={200} color="accent-100" size={200} bold as="span">
                                    goober
                                </Text>
                                was a css-in-js solution at the cost of peanuts. Hence the peanuts
                                emoji.
                            </Text>
                        </Box>
                        <Box size={400} />
                        <Feature title="Build more">
                            By using{' '}
                            <Text ph={200} color="accent-100" size={200} bold as="span">
                                goober
                            </Text>
                            , you are practically getting back space in size to build more of the
                            needed features.
                        </Feature>
                    </Box>
                </Box>
                <Box size={300} />
                <Text as="h2" faded>
                    Take
                    <Text ph={200} color="accent-100" size={200} bold as="span">
                        goober
                    </Text>
                    for a spin.
                </Text>
                <Box size={300} />
                <Box size={400} rounded={100} centered horizontal>
                    <Button as="a" href="https://goober.js.org/" secondary>
                        Documentation
                    </Button>
                    <Box size={300} />
                    <Button as="a" href="https://github.com/cristianbote/goober">
                        GitHub
                    </Button>
                </Box>
            </Box>
        </>
    );
}
