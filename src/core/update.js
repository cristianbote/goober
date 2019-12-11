import { getSheet } from './get-sheet';
/**
 * Extracts and wipes the cache
 * @returns {String}
 */
const extractCss = target => {
    const sheet = getSheet(target);
    const out = sheet.data;
    sheet.data = '';
    return out;
};

/**
 * Updates the target and keeps a local cache
 * @param {String} css
 * @param {Object} target
 * @param {Boolean} append
 */
const update = (css, sheet, append) => {
    sheet.data.indexOf(css) < 0 && (sheet.data = append ? css + sheet.data : sheet.data + css);
};

export { extractCss, update };
