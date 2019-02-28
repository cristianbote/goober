let cache = "";

const extractCss = () => {
    let out = cache;
    cache = '';
    return out;
};

/**
 * Updates the target and keeps a cache local
 * @param {String} css 
 * @param {Object} target 
 */
const update = (css, target) => {
    cache = target
        ? ~target.data.indexOf(css) ? target.data : (target.data += css)
        : cache + css;
};

export {
    extractCss,
    update
}