/**
 * Parses the object into css, scoped, blocks
 * @param {Object} obj 
 * @param {String} paren 
 * @param {String} wrapper 
 */
export const parse = (obj, paren, wrapper, glob) => {
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
  
        // Call the parse for this block
        blocks += parse(val, next, next == paren ? key : wrapper || '', glob);
      } else {
  
        // Push the line for this property
        current += key + ":" + val + ";";
      }
    }
    
    // If we have properties
    if (current.length) {
      // Standard rule composition
      const rule = paren + "{" + current + "}";
      
      // With wrapper
      if (wrapper) return blocks + wrapper + "{" + rule + "}";
  
      // Else just push the rule
      return rule + blocks;
    }
  
    return blocks;
};