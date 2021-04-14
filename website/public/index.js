import { h } from 'preact';
import hydrate from 'preact-iso/hydrate';
import { LocationProvider, Router } from 'preact-iso/router';
import { ErrorBoundary } from 'preact-iso/lazy';
import Home from './pages/home/index.js';
import TheGreatShaveOff from './pages/the-great-shave-off/index.js';
import NotFound from './pages/_404.js';
import { extractCss, setup } from 'goober';
import { prefix } from 'goober/prefixer';
import { shouldForwardProp } from 'goober/should-forward-prop';
import { Box } from './components/box/box.js';
import { props, theme } from './styles/theme.js';
import { GlobalStyles } from './styles/global.js';
import { Layout } from './components/layout/layout.js';

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

hydrate(<App />);

export async function prerender(data) {
    const { default: prerender } = await import('preact-iso/prerender');
    const res = await prerender(<App {...data} />);
    const css = extractCss();

    res.html = `<style id="_goober"> ${css}</style>${res.html}`;

    return res;
}
