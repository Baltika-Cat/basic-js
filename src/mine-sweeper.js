const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let arr = new Array(matrix.length);
  for (let a = 0; a < matrix.length; a += 1) {
    arr[a] = new Array(matrix[0].length).fill(0);
  }
  const coord = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  for (let i = 0; i < matrix.length; i += 1) {
    let m = 0;
    let n = 0;
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] === true) {
        for (let x = 0; x < coord.length; x += 1) {
          m = i + coord[x][0];
          n = j + coord[x][1];
          if (m >= 0 && n >= 0 && m < arr.length && n < arr[m].length) {
            arr[m].splice(n, 1, arr[m][n] + 1);
          }
        }
      }
    }  
  }

  return arr;
  // remove line with error and write your code here
}

module.exports = {
  minesweeper
};

minesweeper([[true, false, false], [false, true, false], [false, false, false]]);