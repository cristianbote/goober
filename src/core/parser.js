// Parser rules
const NEW_LINES_SEL = /(\s{2,})/gm;
const AT_SEL = /@/gm;
const REGULAR_SEL = /^(\.|\*|&|\#)/gm;
const COMMA_SEL = /(,\n+)/gm;

// Values
const NEW_LINE = "\n";

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
  if (block.indexOf("{") == -1) {
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

  return normalized
    .split(NEW_LINE + NEW_LINE)
    .map(block => parseBlock(hash, block)
    .replace(/\n+/gi, ""));
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
    if (typeof defs[i] == "function") {
      const res = defs[i](props);
      // If this is a vNode with a className
      if (res.attributes && res.attributes.className) {
        return `${out}${next}.${res.attributes.className}`;
      }

      // TODO: Should figure out a better _detection_
      if (res[0] == "g" && res[1] == "0") {
        return `${out}${next}.${res}`;
      }
      
      return `${out}${next}${res}`;
    }
    return out + next + (defs[i] || "");
  }, "");

export {
  getCss,
  parse
}