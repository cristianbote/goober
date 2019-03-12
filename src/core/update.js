import { getSheet } from "./get-sheet";
/**
 * Extracts and wipes the cache
 * @returns {String}
 */
const extractCss = target => {
    const sheet = getSheet(target);
    const out = sheet.data.substr(1);
    sheet.data = "";
    return out;
};

/**
 * Updates the target and keeps a local cache
 * @param {String} css
 * @param {Object} target
 */
const update = (css, sheet) => {
    ~sheet.data.indexOf(css) ? sheet.data : (sheet.data += css);
};

export { extractCss, update };
