const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  for (let i = 0; i < names.length; i += 1) {
    let name = names[i];
    let count = 1;
    for (let j = i + 1; j < names.length; j += 1) {
      if (names[j] === name) {
        console.log(true)
        console.log(j)
        names.splice(j, 1, `${name}(${count})`);
        count += 1;
      }
    }
  }
  console.log(names);
  return names;
  // remove line with error and write your code here
}

module.exports = {
  renameFiles
};


renameFiles(["file", "file", "image", "file(1)", "file"]);