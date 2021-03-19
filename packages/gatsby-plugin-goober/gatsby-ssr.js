import React from 'react';
import { setup, extractCss } from 'goober';
import { prefix } from 'goober/prefixer';

// Set the pragma for `goober` to know which to use
setup(React.createElement, prefix);

// Define a cache entry
const cache = new Map();

export const onRenderBody = ({ setHeadComponents, pathname }) => {
    // Add cache support for short-circuiting the processing part
    if (!cache.has(pathname)) {
        cache.set(pathname, extractCss());
    }

    // Set the head style component with the extracted css
    setHeadComponents([
        React.createElement('style', {
            id: '_goober',
            key: 'goober',
            dangerouslySetInnerHTML: {
                __html: ' ' + cache.get(pathname)
            }
        })
    ]);
};
