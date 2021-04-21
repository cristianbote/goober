import { getSheet } from './get-sheet';
/**
 * Extracts and wipes the cache
 * @returns {String}
 */
export let extractCss = (target) => {
    let sheet = getSheet(target);
    let out = sheet.data;
    sheet.data = '';
    return out;
};

/**
 * Updates the target and keeps a local cache
 * @param {String} css
 * @param {Object} sheet
 * @param {Boolean} append
 */
export let update = (css, sheet, before) => {
    sheet.data.indexOf(css) == -1 &&
        (sheet.data = before
            ? sheet.data.replace('/*' + before[0] + '*/', css + '/*' + before[0] + '*/')
            : sheet.data + css);
};
