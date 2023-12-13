const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let sym = '';
  let newStr = '';
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === sym) {
      count += 1;
    }
    if (str[i] !== sym) {
      if (count > 1) {
        newStr += count + sym;
      } else {
        newStr += sym;
      }
      sym = str[i];
      count = 1;
    }
    if (i === str.length - 1) {
      if (count > 1) {
        newStr += count + sym;
      } else {
        newStr += sym;
      }
    }
  }
  return newStr;
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
