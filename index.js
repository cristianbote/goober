const styles = {};

// Parser rules
const TRIM_RULE = /(\s|\n)/gim;
const NEW_LINES_SEL = /(\s{2,})/gm;
const AT_SEL = /@/gm;
const REGULAR_SEL = /^(\.|\*|&|\#)/gm;
const COMMA_SEL = /(,\n+)/gm;

// Values
const SHEET_ID = "data-goober";
const NEW_LINE = "\n";

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
 * Parses the block for nested rules.
 * @param {String} hash 
 * @param {String} block 
 */
const parseBlock = (hash, block) => {
  // Animations (@keyframes)
  if (!block || (block && block.startsWith("@k"))) {
    return block;
  }

  // If this is part of the default block
  if (block.indexOf("{") === -1) {
    return `${hash}{${block}}`;
  }

  // Nested selectors
  if (block.startsWith("&")) {
    return block.replace(/&/g, hash);
  }

  // @media queries
  if (block.startsWith("@m")) {
    const lines = block.split(NEW_LINE);
    return lines.shift() +
      parseBlock(hash, lines.slice(0, lines.length - 1).join("")) +
      // This block will always end with the bracket
      "}";
  }

  return `${hash} ${block}`;
};

/**
 * Parses the css syntax, line by line
 * @param {String} hash The className
 * @param {String} val Value to be parsed
 */
const parse = (hash, val) => {
  const normalized = val
    .replace(NEW_LINES_SEL, NEW_LINE)
    .replace(AT_SEL, NEW_LINE + "$&")
    .replace(REGULAR_SEL, NEW_LINE + "$&")
    .replace(COMMA_SEL, "," + NEW_LINE);

  return normalized.split(NEW_LINE + NEW_LINE).map(block => parseBlock(hash, block).replace(/\n+/gi, ""));
};

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
  const hash = "g" + hush(trimmed).toString(16);
  const parsed = parse("." + hash, compiled).join("");

  // This methods adds or updates the new style
  addStyle(hash, parsed);

  return hash;
};

/**
 * Returns the css parsed. This is the tag template parser.
 * @param {String} str 
 * @param {Array} defs 
 * @param {Object} props 
 * @return {String}
 */
const getCss = (str, defs, props) =>
  str.reduce((out, next, i) => {
    if (typeof defs[i] === "function") {
      const res = defs[i](props);
      // If this is a vNode with a className
      if (res.attributes && res.attributes.className) {
        return `${out}${next}.${res.attributes.className}`;
      }
      return `${out}${next}${res}`;
    }
    return out + next + (defs[i] || "");
  }, "");

let h;

try {
  h = require("react").createElement;
} catch (e) {
  try {
    h = require("preact").h;
  } catch (e) {
    throw(e);
  }
}

/**
 * Styled function. Returns a vDOM component with a className that defines it's style.
 * @param {String} tag DOM tagName
 * @return {Function}
 */
const styled = tag => (str, ...defs) => props => {
  const className = getClassNameForCss(getCss(str, defs, props));
  return h(tag, {
    ...props,
    className: props.className || "" + " " + className
  });
};

/**
 * Returns the `<style>` tag to be used on SSR.
 */
const extractCss = () => `<style data-goober>${Object.values(styles).join(NEW_LINE)}</style>`;

export { extractCss, styled }
