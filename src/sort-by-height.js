const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let array = [];
  arr.forEach((item, index) => {
    if (item === -1) {
      array.push(index);
    }
  })
  let result = arr.filter((item) => item !== -1).sort((a, b) => a - b);
  array.forEach((index) => {
    result.splice(index, 0, -1);
  })
  console.log(array);
  return result;
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};

//sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])
