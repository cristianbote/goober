import { parse } from "./parser";

const styles = {};

// Parser rules
const TRIM_RULE = /(\s|\n)/gim;

// Values
const SHEET_ID = "data-goober";

let sheet;

/**
 * Hashing function. Borrowed from... `JAVA` 💥
 * God help us all.
 * @param {String} str 
 * @returns {String}
 */
const hush = str =>
  str.split("").reduce(
    (out, _, i) => (out << 8) - out + str.charCodeAt(i),
    0
  );

/**
 * Adds the hash and it's css to cache and to appends it to stylesheet
 * @param {String} hash
 * @param {String} css
 */
const addStyle = (hash, css) => {

  // If this is already present just stop
  if (styles[hash] == css) {
    return;
  }

  // Keep the hash and the value in _cache_
  styles[hash] = css;

  // If we're no the client
  if (typeof document !== "undefined") {
    if (!sheet || !sheet.parentElement) {
      sheet = document.querySelector(`style[${SHEET_ID}]`);

      if (!sheet) {
        sheet = document.createElement("style");
        sheet.setAttribute(SHEET_ID, "");
        document.head.appendChild(sheet);
      }
    }

    if (!sheet.firstChild) {
      sheet.appendChild(document.createTextNode(''));
    }

    // Append the css into the style sheet
    sheet.firstChild.data += css;
  }
};

/**
 * Does the hush-ing of the css declaration and returns the className.
 * @param {String} css 
 * @return {String}
 */
const getClassNameForCss = compiled => {
  const trimmed = compiled.replace(TRIM_RULE, "");
  const hash = "g0" + hush(trimmed).toString(16);
  const parsed = parse("." + hash, compiled).join("");

  // This methods adds or updates the new style
  addStyle(hash, parsed);

  return hash;
};

const getValues = () => Object.values(styles)

export {
    getClassNameForCss,
    getValues
}
