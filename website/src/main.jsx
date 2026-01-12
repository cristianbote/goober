import { hydrate, prerender as ssr } from 'preact-iso';
import { extractCss } from 'goober';
import { App } from './App';

// Client-side hydration
if (typeof window !== 'undefined') {
    hydrate(<App />, document.getElementById('app'));
}

// Server-side prerendering
export async function prerender(data) {
    // Pass the URL to preact-iso's prerender function
    const result = await ssr(<App />, { url: data.url || '/' });
    const css = extractCss();
    
    // Inject CSS into the result
    if (css) {
        result.html = `<style id="_goober">${css}</style>${result.html}`;
    }
    
    return result;
}

export { extractCss };
