const SHEET_ID = "data-goober";
let styles = {};

/**
 * Returns the values and clear the styles
 * @return {Array}
 */
export const flush = () => {
  const values = Object.values(styles);
  styles = {};
  return values;
};

/**
 * Adds the hash and it's css to cache and to appends it to stylesheet
 * @param {String} hash
 * @param {String} css
 */
export const add = (hash, css, target) => {
  // If this is already present just stop
  if (styles[hash] == css) {
    return;
  }

  // Keep the hash and the value in _cache_
  styles[hash] = css;

  // If we're no the client
  if (target) {
    let sheet = target.querySelector("style[" + SHEET_ID + "]");
    if (!sheet) {
      sheet = document.createElement("style");
      sheet.setAttribute(SHEET_ID, "");
      target.appendChild(sheet);
    }

    if (!sheet.firstChild) {
      sheet.appendChild(document.createTextNode(""));
    }

    // Append the css into the style sheet
    sheet.firstChild.data += css;
  }
};
