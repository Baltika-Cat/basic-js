const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  while (n.toString().length > 1) {
    let arr = n.toString().split('');
    n = arr.reduce((acc, item) => parseInt(acc) + parseInt(item));
    console.log(n)
  }
  return n;
  // remove line with error and write your code here
}

module.exports = {
  getSumOfDigits
};
getSumOfDigits(100)