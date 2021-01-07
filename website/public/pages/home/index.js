import { styled } from 'goober';
import { Box } from '../../components/box/box';
import { Button } from '../../components/button/button';
import { Text } from '../../components/text/text';

const BoxWithBorder = styled(Box)(({ theme }) => ({
    borderTop: `1px solid ${theme.colors['gray-100']}`
}));

export default function Home() {
    return (
        <Box full>
            <Box size={700} centered full>
                <Text size={500} as="h1" bold>
                    goober
                </Text>
                <Box size={300} />
                <Text as="h2" faded>
                    A less than 1KB css-in-js solution
                </Text>
            </Box>
            <Box full centered>
                <Box size={400} rounded={100} centered horizontal>
                    <Button>Documentation</Button>
                    <Box size={300} />
                    <Button plain>GitHub</Button>
                </Box>
                <Box size={500} />
                <Box bg="black" size={700} centered full>
                    <Text mono size={300} color="gray-300">
                        npm install{' '}
                        <Text as="span" mono bold color="accent-100">
                            goober
                        </Text>
                    </Text>
                </Box>
                <Box size={400} />
                <Box horizontal full max reactive size={400}>
                    <Box flex>
                        <Box size={200}>
                            <Text size={300} bold>
                                Lightweight
                            </Text>
                            <Box size={200} />
                            <Text size={200} faded>
                                As the subtitle notes, this is the smallest and fullest featured
                                css-in-js solution out there. Weighing at 1KB and once bundled it's
                                gonna be less due to tree-shake.
                            </Text>
                        </Box>
                        <Box size={400} />
                        <Box size={200}>
                            <Text size={300} bold>
                                Familiar API
                            </Text>
                            <Box size={200} />
                            <Text size={200} faded>
                                <Text color="accent-100" size={200} bold as="span">
                                    goober
                                </Text>{' '}
                                is built on the shoulders of well established solutions. That means
                                the API has been paved and we need to follow it. You'll find{' '}
                                <Text color="accent-200" size={200} bold as="span">
                                    as
                                </Text>
                                ,{' '}
                                <Text color="accent-200" size={200} bold as="span">
                                    forwardRef
                                </Text>
                                ,{' '}
                                <Text color="accent-200" size={200} bold as="span">
                                    css
                                </Text>
                                ,{' '}
                                <Text color="accent-200" size={200} bold as="span">
                                    keyframes
                                </Text>
                                ,{' '}
                                <Text color="accent-200" size={200} bold as="span">
                                    styled
                                </Text>{' '}
                                and so much more.
                            </Text>
                        </Box>
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
                                with{' '}
                                <Text color="accent-200" size={200} bold as="span">
                                    extractCss
                                </Text>
                                .
                            </Text>
                        </Box>
                        <Box size={400} />
                        <Box size={200}>
                            <Text size={300} bold>
                                Themeing
                            </Text>
                            <Box size={200} />
                            <Text size={200} faded>
                                Easily access your common sizes, colors, anything really with the
                                use of a theme.
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
                            <Box size={300} />
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
