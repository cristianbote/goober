import { astish } from "./astish";

/**
 * Inner compile function to construct the css from a object
 * @param {object} obj 
 * @param {string} [paren] 
 * @param {string} [wrapper]
 */
const compile = (obj, paren, wrapper) => {
  let current = "";
  let blocks = "";
  
  // If we're dealing with keyframes just flatten them
  if (/^@k/.test(wrapper)) {
    // Return the wrapper, which should be the @keyframes selector
    // and stringify the obj which should be just flatten 
    return wrapper + JSON.stringify(obj).replace(/","/g, ";").replace(/"|,"/g, "").replace(/:{/g, "{");
  }
  
  for (let key in obj) {
    const val = obj[key];
    
    // If this is a 'block'
    if (typeof val === "object") {
      // Regular selector
      let next = paren + " " + key;
      
      // Nested
      if (/&/g.test(key)) next = key.replace(/&/g, paren);

      // Media queries or other
      if (key[0] == '@') next = paren;

      // Call the compile for this block
      blocks += compile(val, next, next == paren ? key : wrapper || '');
    } else {

      // Push the line for this property
      current += key + ":" + val + ";";
    }
  }
  
  // If we have properties
  if (current.length) {
    // Standard rule compostion
    const rule = paren + "{" + current + "}";
    
    // With wrapper
    if (wrapper) return blocks + wrapper + "{" + rule + "}";

    // Else just push the rule
    return rule + blocks;
  }

  return blocks;
};

/**
 * Parses the string value and does a string(style) -> object -> string(css) transformation
 * @param {String} hash The className
 * @param {String} val Value to be parsed
 */
export const parse = (hash, val) => {
  // Kick the compilation
  return compile(
    val.big ? astish(val) : val,
    hash
  );
};