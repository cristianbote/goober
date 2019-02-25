import { hush } from "../hush";
import { add } from "./sheet";
import { parse } from "../parser/parse";

/**
 * Does the hush-ing of the css declaration and returns the className.
 * @param {String} css 
 * @return {String}
 */
export const getClassNameForCss = compiled => {
  const hash = "g0" + hush(
      compiled.replace(/\s|\n/gm, "")
    ).toString(8);
  const parsed = parse("." + hash, compiled);
  
    // This methods adds or updates the new style
  add(hash, parsed);
  
  return hash;
};