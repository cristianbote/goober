const styles = {};
const replaceRule = /(\s|\n)/gim;
const replaceSpacesRule = /\s+/gi;
let sheet;

const hush = str =>
  [].reduce.call(
    str,
    (out, char, i, str) => (out << 5) - out + str.charCodeAt(i),
    0
  );

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
      sheet.setAttribute("id", "__basket");
      document.head.appendChild(sheet);
    }

    // Append the css into the style sheet
    sheet.innerHTML += `${css}\n`;
  }
};

const getClassNameForCss = css => {
  const trimmed = css.replace(replaceRule, "");
  const hash = "c-" + hush(trimmed).toString(16);
  const parsed = parse("." + hash, css).join("\n");

  if (styles[hash]) return hash;

  addStyle(hash, parsed);

  return hash;
};

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
    console.warn("[🧺] Could not find target to render JSX");
  }
}

const styled = tag => (str, ...defs) => props => {
  const className = getClassNameForCss(getCss(str, defs, props));
  return h(tag, {
    ...props,
    className: [props.className, className].filter(Boolean).join(" ")
  });
};

const extractCss = () => Object.values(styles).join("\n");

export { extractCss, styled };
