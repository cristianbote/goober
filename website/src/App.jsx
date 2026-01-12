import { LocationProvider, Router, ErrorBoundary } from 'preact-iso';
import { h } from 'preact';
import { setup } from 'goober';
import { prefix } from 'goober/prefixer';
import { shouldForwardProp } from 'goober/should-forward-prop';

import { Box } from './components/box/box';
import { Layout } from './components/layout/layout';
import { GlobalStyles } from './styles/global';
import { props, theme } from './styles/theme';

import Home from './pages/home/index';
import TheGreatShaveOff from './pages/the-great-shave-off/index';
import NotFound from './pages/NotFound';

setup(
    h,
    prefix,
    () => theme,
    shouldForwardProp((prop) => props.indexOf(prop) === -1)
);

export function App() {
    return (
        <LocationProvider>
            <GlobalStyles />
            <Box full flex>
                <Layout>
                    <ErrorBoundary>
                        <Router>
                            <Home path="/" />
                            <TheGreatShaveOff path="/the-great-shave-off" />
                            <NotFound default />
                        </Router>
                    </ErrorBoundary>
                </Layout>
            </Box>
        </LocationProvider>
    );
}
