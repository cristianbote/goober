/**
 * Hashing function. Borrowed from... `JAVA` 💥
 * God help us all.
 * @param {String} str
 * @returns {String}
 */
export const hush = str =>
  "g0" +(str.big ? str : JSON.stringify(str)).split("").reduce(
    (out, c) => out + c.charCodeAt(0),
    0
  );