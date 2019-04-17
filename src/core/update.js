import { getSheet } from "./get-sheet";
/**
 * Extracts and wipes the cache
 * @returns {String}
 */
const extractCss = target => {
    const sheet = getSheet(target);
    const out = sheet.data;
    sheet.data = "";
    return out;
};

/**
 * Updates the target and keeps a local cache
 * @param {String} css
 * @param {Object} target
 */
const update = (css, sheet) => {
    sheet.data.indexOf(css) < 0 && (sheet.data += css);
};

export { extractCss, update };
