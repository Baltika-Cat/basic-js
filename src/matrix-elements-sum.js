const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let array = [...matrix[0]];
  for (let i = 0; i < matrix.length - 1; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] === 0) {
        if (matrix[i + 1][j] !== 0) {
          matrix[i + 1].splice(j, 1, -1);
        }
      } else {
        array.push(matrix[i + 1][j]);
      }
    }
  }
  array.filter((item) => item > 0);
  console.log(array);
  return array.reduce((acc, item) => acc + item);
  // remove line with error and write your code here
}

module.exports = {
  getMatrixElementsSum
};

getMatrixElementsSum([[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]])