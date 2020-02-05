const React = require('react');
const goober = require('goober');

// Set the pragma for `goober` to know which to use
goober.setPragma(React.createElement);

// Define a cache entry
const cache = new Map();

exports.onRenderBody = ({ setHeadComponents, pathname }) => {
    // Add cache support for short-circuiting the processing part
    if (!cache.has(pathname)) {
        cache.set(pathname, goober.extractCss());
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
