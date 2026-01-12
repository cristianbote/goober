import { styled } from 'goober';
import { Box } from '../box/Box';
import { Button } from '../button/Button';
import { Text } from '../text/Text';
import { Nav } from '../nav/Nav';
import { Logo } from '../logo/Logo';

const BoxWithBorder = styled(Box)(({ theme }) => ({
    borderTop: `1px solid ${theme.colors['gray-100']}`
}));

export function Layout({ children }) {
    return (
        <Box full>
            <Nav
                logo={<Logo />}
                buttons={
                    <>
                        <Button as="a" href="https://goober.js.org/" secondary>
                            Documentation
                        </Button>
                        <Box size={300} />
                        <Button as="a" href="https://github.com/cristianbote/goober">
                            GitHub
                        </Button>
                    </>
                }
            />
            {children}
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
                            <Text size={100}>
                                This website was built with{' '}
                                <Text
                                    as="a"
                                    href="https://vitejs.dev"
                                    color="accent-100"
                                    size={300}
                                    bold
                                >
                                    vite
                                </Text>, <Text
                                    as="a"
                                    href="https://preactjs.com"
                                    color="accent-100"
                                    size={300}
                                    bold
                                >
                                    preact
                                </Text>{' '}
                                and{' '}
                                <Text
                                    as="a"
                                    href="https://github.com/cristianbote/goober"
                                    color="accent-100"
                                    size={300}
                                    bold
                                >
                                    goober
                                </Text>
                                .
                            </Text>
                            <Box size={300} />
                            <Text size={100}>Maintained with love by a bunch of good people.</Text>
                        </Box>
                    </Box>
                    <Box size={300} />
                    <Box>
                        <Box size={200}>
                            <Text as="a" href="https://goober.js.org/" size={100} bold>
                                Documentation
                            </Text>
                            <Box size={300} />
                            <Text
                                as="a"
                                href="https://github.com/cristianbote/goober"
                                size={100}
                                bold
                            >
                                GitHub
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </BoxWithBorder>
        </Box>
    );
}
