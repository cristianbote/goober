let SHEET_ID = "data-goober";
let styles = "";
/**
 * Returns the values and clear the styles
 * @return {Array}
 */
export const flush = () => {
  let s = styles;
  styles = "";
  return s;
};

/**
 * Adds the hash and it's css to cache and to appends it to stylesheet
 * @param {String} css
 * @param {Element} target
 */
export const add = (css, target) => {
  if (~styles.indexOf(css)) {
    return;
  }
  styles += css;

  // If we're not the client
  if (typeof document != "undefined" && (target = target || document.head)) {
    let sheet = target.querySelector("style[" + SHEET_ID + "]");
    if (!sheet) {
      sheet = document.createElement("style");
      sheet.setAttribute(SHEET_ID, "");
      target.appendChild(sheet).innerHTML = css;
    } else {
      sheet.firstChild.data += css;
    }
  }
};
