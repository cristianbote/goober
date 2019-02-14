import { NEW_LINE } from "../constants";

/**
 * Parses the block for nested rules.
 * @param {String} hash 
 * @param {String} block 
 */
export const parseBlock = (hash, block) => {
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
      return lines[0] +
        parseBlock(hash, lines.slice(1, lines.length - 1).join("")) +
        // This block will always end with the bracket
        "}";
    }
  
    return `${hash} ${block}`;
  };