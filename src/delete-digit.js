const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n.toString();
  for (let i = 0; i < str.length; i += 1) {
    if (str[i - 1]) {
      if (str[i] > str[i - 1]) {
        str = str.replace(str[i - 1], '');
        break;
      } else if (i === str.length - 1) {
        str = str.replace(str[i], '');
      }
    }
  }
  return parseInt(str);
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
