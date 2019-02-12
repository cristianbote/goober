import { hush } from "../hush";
import { add } from "./sheet";
import { parse } from "../parser/parse";
import { TRIM_RULE } from "../constants";

/**
 * Does the hush-ing of the css declaration and returns the className.
 * @param {String} css 
 * @return {String}
 */
export const getClassNameForCss = compiled => {
    const trimmed = compiled.replace(TRIM_RULE, "");
    const hash = "g0" + hush(trimmed).toString(16);
    const parsed = parse("." + hash, compiled).join("");
  
    // This methods adds or updates the new style
    add(hash, parsed);
  
    return hash;
  };