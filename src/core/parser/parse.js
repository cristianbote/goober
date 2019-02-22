import { astish } from "./astish";

/**
 * Holds the compiled values
 */
const values = [];

/**
 * Inner compile function to construct the css from a object
 * @param {object} obj 
 * @param {string} [paren] 
 * @param {string} [wrapper]
 */
const compile = (obj, paren, wrapper) => {
  let current = [];
  
  // If we're dealing with keyframes just flatten them
  if (/^@k/.test(wrapper)) {
  	values.push(wrapper + JSON.stringify(obj).replace(/","/g, ";").replace(/"|,"/g, "").replace(/:{/g, "{"));
    return;
  }
  
	for (let key in obj) {
    const val = obj[key];
    
    // If this is a 'block'
    if (typeof val === "object") {
      // Regular selector
      let next = paren + " " + key;
      
      // Nsted
      if (/&/g.test(key)) next = key.replace(/&/g, paren);

      // Media queries or other
      if (key[0] == '@') next = paren;
      
      // Call the compile for this block
      compile(val, next, next == paren ? key : wrapper || '');
    } else {

      // Push the line for this property
	    current.push(`${key}:${val};`);
    }
  }
  
  // If we have properties
  if (current.length) {
    // Standard rule compostion
    const rule = `${paren}{${current.join("")}}`;
    
    // With wrapper
    if (wrapper) values.push(`${wrapper}{${rule}}`);
    // Else just push the rule
  	else values.push(rule);
  }
};

/**
 * Parses the css syntax, line by line
 * @param {String} hash The className
 * @param {String} val Value to be parsed
 */
export const parse = (hash, val) => {
  values.length = 0;

  // Kick the compilation
  compile(
    astish(val),
    hash
  );

  // The last item, compiled is the first rule
  values.unshift(values.pop());

  return values.slice();
};