let cache = "";

/**
 * Extracts and wipes the cache
 * @returns {String}
 */
const extractCss = () => {
    let out = cache;
    cache = '';
    return out;
};

/**
 * Updates the target and keeps a local cache
 * @param {String} css 
 * @param {Object} target 
 */
const update = (css, target) => {
    target
        ? ~target.data.indexOf(css) ? target.data : (target.data += css)
        : ~cache.indexOf(css) ? cache : (cache += css);
};

export {
    extractCss,
    update
}