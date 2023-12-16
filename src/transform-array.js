const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  try {
    if (!Array.isArray(arr)) {
      throw new Error(`'arr' parameter must be an instance of the Array!`)
    }
    const command = ['--discard-prev', '--discard-next', '--double-prev', '--double-next'];
    let index = 100;
    let result = [];
    arr.map(function(item, index, array) {
      if(command.includes(item)) {
        switch(command.indexOf(item)) {
          case 0:
            if (index > 0 && !command.includes(array[index - 1])) {
              result.splice(index - 1, 1);
            }
            break;
          case 1:
            if (index < array.length - 1 && !command.includes(array[index + 1])) {
              array.splice(index + 1, 1);
            }
            break;
          case 2:
            if (index > 0 && !command.includes(array[index - 1])) {
              result.push(array[index - 1]);
            }
            break;
          case 3:
            if (index < array.length - 1 && !command.includes(array[index + 1])) {
              result.push(array[index + 1]);
            }
            break;
        }
      } else {
        result.push(item);
      }
      console.log(result)
    })
    return result;
    } catch(e) {
      throw new Error(`'arr' parameter must be an instance of the Array!`)
    }
  // remove line with error and write your code here
}

module.exports = {
  transform
};

//transform([1, 2, 3, '--discard-next', 4, 5])