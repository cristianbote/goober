/**
 * Hashing function. Borrowed from... `JAVA` 💥
 * God help us all.
 * @param {String} str 
 * @returns {String}
 */
export const hush = str =>
  str.split("").reduce(
    (out, _, i) => (out << 8) - out + str.charCodeAt(i),
    0
  );