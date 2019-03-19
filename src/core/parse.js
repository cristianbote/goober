/**
 * Parses the object into css, scoped, blocks
 * @param {Object} obj 
 * @param {String} paren 
 * @param {String} wrapper 
 */
export const parse = (obj, paren, wrapper) => {
    let current = "";
    let blocks = "";
    let outer = "";
    
    // If we're dealing with keyframes just flatten them
    if (/^@k/.test(wrapper)) {
      // Return the wrapper, which should be the @keyframes selector
      // and stringify the obj which should be just flatten 
      return wrapper + JSON.stringify(obj).replace(/","/g, ";").replace(/"|,"/g, "").replace(/:{/g, "{");
    }
    
    for (let key in obj) {
        const val = obj[key];
        const isImport = /^@i/.test(key);
        
        // If this is a 'block'
        if (isImport) {
            outer += key + " " + val + ";";
        } else if (typeof val === "object") {

            // Regular selector
            let next = paren + " " + key;
            
            // Nested
            if (/&/g.test(key)) next = key.replace(/&/g, paren);
    
            // Media queries or other
            if (key[0] == '@') next = paren;
    
            // Call the parse for this block
            blocks += parse(val, next, next == paren ? key : wrapper || '');
        } else {
            // Push the line for this property
            current += key.replace(/[A-Z]/g, "-$&").toLowerCase() + ":" + val + ";";
        }
    }
    
    // If we have properties
    if (current.charAt(0)) {
        // Standard rule composition
        const rule = paren + "{" + current + "}";
        
        // With wrapper
        if (wrapper) return blocks + wrapper + "{" + rule + "}";
    
        // Else just push the rule
        return outer + rule + blocks;
    }
  
    return outer + blocks;
};