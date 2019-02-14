import { parseBlock } from "./parse-block";
import { NEW_LINE } from "../constants";
import { normalizer } from "./normalizer";

/**
 * Parses the css syntax, line by line
 * @param {String} hash The className
 * @param {String} val Value to be parsed
 */
export const parse = (hash, val) => 
    normalizer(val)
      .split(NEW_LINE + NEW_LINE)
      .map(block => parseBlock(hash, block).replace(/\n+/gi, ""))
      .filter(Boolean)
;