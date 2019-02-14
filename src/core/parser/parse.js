import { parseBlock } from "./parse-block";
import {
    NEW_LINE,
    NEW_LINES_SEL,
    REGULAR_SEL,
    COMMA_SEL
} from "../constants";

/**
 * Parses the css syntax, line by line
 * @param {String} hash The className
 * @param {String} val Value to be parsed
 */
export const parse = (hash, val) => {
    const normalized = val
      .replace(NEW_LINES_SEL, NEW_LINE)
      .replace(REGULAR_SEL, NEW_LINE + "$&")
      .replace(COMMA_SEL, "$1" + NEW_LINE);
  
    return normalized
      .split(NEW_LINE + NEW_LINE)
      .map(block => parseBlock(hash, block).replace(/\n+/gi, ""));
  };