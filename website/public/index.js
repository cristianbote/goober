import { h } from 'preact';
import hydrate from 'preact-iso/hydrate';
import { LocationProvider, Router } from 'preact-iso/router';
import { ErrorBoundary } from 'preact-iso/lazy';
import Home from './pages/home/index.js';
import NotFound from './pages/_404.js';
import { setup } from 'goober';
import { prefix } from 'goober/prefixer';
import { Box } from './components/box/box.js';
import { WithStyles } from './styles/with-styles.js';
import { theme } from './styles/theme.js';

setup(h, prefix, () => theme);

export function App() {
    return (
        <WithStyles>
            <LocationProvider>
                <Box flex>
                    <ErrorBoundary>
                        <Router>
                            <Home path="/" />
                            <NotFound default />
                        </Router>
                    </ErrorBoundary>
                </Box>
            </LocationProvider>
        </WithStyles>
    );
}

hydrate(<App />);

export async function prerender(data) {
    const { default: prerender } = await import('preact-iso/prerender');
    return await prerender(<App {...data} />);
}
