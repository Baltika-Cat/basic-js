const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  try {
    let dateStr = String(date);
    console.log(date)
    //console.log(Object.prototype.toString.call(date) !== '[object Date]')
    let season = '';
    if (arguments.length < 1) {
      return 'Unable to determine the time of year!';
    } else if (Object.prototype.toString.call(date) !== '[object Date]' || dateStr.length < 1 || Object.getOwnPropertyNames(date).length > 0) {
      throw new Error('Invalid date!');
    }
    const day = [];
    for (let i = 1; i <= 31; i += 1) {
      day.push(i);
    }
    const seasons = {
      autumn : [8, 9, 10],
      winter : [11, 0, 1],
      spring : [2, 3, 4],
      summer : [5, 6, 7]
    }
    const keysValues = Object.entries(seasons);
    keysValues.forEach((element) => {
      //console.log(element[1])
      //console.log(item)
      if (element[1].includes(date.getMonth())) {
        season = element[0];
      }
    })
  /*console.log(keysValues)
  console.log(date instanceof Date)
  console.log(arr)
  console.log(arr.includes('Jan'));*/
  // remove line with error and write your code here
  return season;
  } catch(e) {
    throw new Error(e.message);
  }
  
}

module.exports = {
  getSeason
};

/*const deeperFakeDate = {
  toString() {
      return Date.prototype.toString.call(new Date());
  },
  getMonth() {
      return Date.prototype.getMonth.call(new Date());
  },
  getFullYear() {
      return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
  },
  getDate() {
      return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
  },
  getHours() {
      return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
  },
  getMinutes() {
      return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
  },
  getSeconds() {
      return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
  },
  getMilliseconds() {
      return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
  },
  getDay() {
      return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
  },
  [Symbol.toStringTag]: 'Date'
};*/
//console.log(getSeason())
//console.log(getSeason(deeperFakeDate));