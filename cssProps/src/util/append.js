export default (name, delim) => (...args) => `${name}(${args.join(delim)})`;
