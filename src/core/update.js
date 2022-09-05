import { getSheet } from './get-sheet';
/**
 * Extracts and wipes the cache
 * @returns {String}
 */
export let extractCss = (target, sheet = getSheet(target), out = sheet.data) => (
    (sheet.data = ''), out
);

/**
 * Updates the target and keeps a local cache
 * @param {String} css
 * @param {Object} sheet
 * @param {Boolean} append
 * @param {?String} cssToReplace
 */
export let update = (css, sheet, append, cssToReplace) => {
    cssToReplace
        ? (sheet.data = sheet.data.replace(cssToReplace, css))
        : sheet.data.indexOf(css) === -1 &&
          (sheet.data = append ? css + sheet.data : sheet.data + css);
};
