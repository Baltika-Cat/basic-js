const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = new Object();
  let arr = domains.map((item) => item.split('.').reverse());
  for (let i = 0; i < arr.length; i += 1) {
    let dns = '';
    for (let j = 0; j < arr[i].length; j += 1) {
      dns += `.${arr[i][j]}`;
      if (obj[dns]) {
        obj[dns] += 1;
      } else {
        obj[dns] = 1;
      }
    }    
  }
  return obj;
}

module.exports = {
  getDNSStats
};
