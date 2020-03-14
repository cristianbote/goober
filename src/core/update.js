import { getSheet } from './get-sheet';
/**
 * Extracts and wipes the cache
 * @returns {String}
 */
const extractCss = () => {
    let out = getSheet.a;
    getSheet.a = '';
    return out;
};

/**
 * Updates the target and keeps a local cache
 * @param {String} css
 * @param {Object} target
 * @param {Boolean} append
 */
const update = (css, sheet, append) => {
    if (sheet.insertRule) {
        sheet.insertRule(css, append ? sheet.rules.length : 0);
    } else {
        sheet.a = append ? css + sheet.a : sheet.a + css;
    }
};

export { extractCss, update };
