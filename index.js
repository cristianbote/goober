const styles = {};
const replaceRule = /(\s|\n)/gim;
const replaceSpacesRule = /\s+/gi;
const sheetId = "__goober";
let sheet;

/**
 * Hashing function. Borrowed from... `JAVA` 💥
 * Code name: hashCode.
 * God help us all.
 * @param {*} str 
 */
const hush = str =>
  [].reduce.call(
    str,
    (out, char, i, str) => (out << 5) - out + str.charCodeAt(i),
    0
  );

/**
 * Parses the block for nested rules.
 * @param {String} hash 
 * @param {String} block 
 */
const parseBlock = (hash, block) => {
  if (!block) {
    return block;
  }

  if (block.indexOf("{") === -1) {
    return `${hash}{${block}}`;
  }
  if (block.startsWith("&")) {
    return block.replace(/&/g, hash);
  }
  return `${hash} ${block}`;
};

/**
 * Parses the css syntax, line by line
 * @param {String} hash The className
 * @param {String} val Value to be parsed
 */
const parse = (hash, val) => {
  const lines = val.split("\n");
  let currentBlock = "";
  const blocks = [];

  // Go over each line and parse it
  lines.forEach(line => {
    line = line.replace(replaceSpacesRule, "");
    if (line.endsWith(";")) {
      currentBlock += line;
    } else if (line.startsWith("&") || line.startsWith(".")) {
      // If this is not continued, push the new block
      if (!currentBlock.endsWith(",")) {
        blocks.push(parseBlock(hash, currentBlock));
        currentBlock = "";
      }

      currentBlock += line;
    } else if (line.endsWith("}")) {
      currentBlock += line;
      blocks.push(parseBlock(hash, currentBlock));
      currentBlock = "";
    }
  });

  return blocks;
};

/**
 * Adds the hash and it's css to cache and to appends it to stylesheet
 * @param {String} hash
 * @param {String} css
 */
const addStyle = (hash, css) => {
  // Keep the hash and the value in _cache_
  styles[hash] = css;

  // If we're no the client
  if (typeof document !== "undefined") {
    if (!sheet || !sheet.parentElement) {
      sheet = document.createElement("style");
      sheet.setAttribute("id", sheetId);
      document.head.appendChild(sheet);
    }

    // TODO: Should check first if the css is present
    // Append the css into the style sheet
    sheet.innerHTML += `${css}\n`;
  }
};

/**
 * Does the hush-ing of the css declaration and returns the className.
 * @param {String} css 
 * @return {String}
 */
const getClassNameForCss = css => {
  const trimmed = css.replace(replaceRule, "");
  const hash = "g-" + hush(trimmed).toString(16);
  const parsed = parse("." + hash, css).join("\n");

  if (styles[hash]) return hash;

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
    return `${out}${next}${defs[i] || ""}`;
  }, "");

let h;

try {
  h = require("react").createElement;
} catch (e) {
  try {
    h = require("preact").h;
  } catch (e) {
    console.warn("[goober] Could not find a target to return a vDOM component");
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
    className: [props.className, className].filter(Boolean).join(" ")
  });
};

/**
 * Returns the `<style>` tag to be used on SSR.
 */
const extractCss = () => `<style id="${sheetId}">Object.values(styles).join("\n")</style>`;

export { extractCss, styled }
