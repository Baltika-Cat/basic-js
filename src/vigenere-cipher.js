const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(bool) {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
    this.bool = bool === false ? bool : true;
  }
  encrypt(string, key) {
    try {
      let alphabet = this.alphabet;
      if (!string || !key) {
        throw new Error('Incorrect arguments!');
      }
      let len = string.split('').filter((item) => alphabet.includes(item.toLowerCase())).join('').length;
      //console.log(len)
      let arr = [];
      let arrResult = [];
      while (key.length < len) {
        for (let i = 0; i < key.length; i += 1) {
          if (key.length < len) {
            key += key[i];
          } else {
            break;
          }
        }
      }
      //console.log(key)
      let stringLetters = string.split('').filter((item) => alphabet.includes(item.toLowerCase()));
      //console.log(stringLetters)
      stringLetters.map(function(item, index) {
        let indexString = alphabet.indexOf(item.toLowerCase());
        let indexKey = alphabet.indexOf(key[index].toLowerCase());
        //console.log(indexKey)
        //console.log(indexString)
        let alphaLen = alphabet.length;
        let indexFinal = indexString + indexKey > alphaLen - 1 ? indexString + indexKey - alphaLen : indexString + indexKey;
        //console.log(indexFinal)
        //console.log(alphabet[indexFinal])
        arrResult.push(alphabet[indexFinal].toUpperCase());
      })
      string.split('').map(function(item, index) {
        if (!alphabet.includes(item.toLowerCase())) {
          arr.push([item, index]);
        }
      })
      arr.forEach((item) => {
        arrResult.splice(item[1], 0, item[0]);
      })
      //console.log(arrResult.join(''), arrResult.reverse().join(''));
      console.log(this.bool)
      return this.bool ? arrResult.join('') : arrResult.reverse().join('');
    } catch(e) {
      throw new Error('Incorrect arguments!');
    }
    // remove line with error and write your code here
  }
  decrypt(string, key) {
    try {
      let alphabet = this.alphabet;
      if (!string || !key) {
        throw new Error('Incorrect arguments!');
      }
      let len = string.split(' ').join('').length;
      let arr = [];
      let arrResult = [];
      while (key.length < len) {
        for (let i = 0; i < key.length; i += 1) {
          if (key.length < len) {
            key += key[i];
          } else {
            break;
          }
        }
      }

      let stringLetters = string.split('').filter((item) => alphabet.includes(item.toLowerCase()));
      //console.log(stringLetters)
      stringLetters.map(function(item, index) {
        let indexString = alphabet.indexOf(item.toLowerCase());
        let indexKey = alphabet.indexOf(key[index].toLowerCase());
        let alphaLen = alphabet.length;
        let indexFinal = indexString - indexKey < 0 ? indexString - indexKey + alphaLen : indexString - indexKey;
        arrResult.push(alphabet[indexFinal].toUpperCase());
        //console.log(arrResult)
      })
      string.split('').map(function(item, index) {
        if (!alphabet.includes(item.toLowerCase())) {
          arr.push([item, index]);
          //console.log(arr)
        }
      })
      arr.forEach((item) => {
        arrResult.splice(item[1], 0, item[0]);
      })
      //console.log(arrResult.join(''), arrResult.reverse().join(''));
      //console.log(!this.bool)
      return this.bool ? arrResult.join('') : arrResult.reverse().join('');
    } catch(e) {
      throw new Error('Incorrect arguments!');
    }
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
const directMachine = new VigenereCipheringMachine(false);
console.log(directMachine.bool)
//directMachine.encrypt('attack at dawn!', 'alphonse')
//console.log(directMachine.encrypt('attack at dawn!', 'alphonse'))
//directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')
//directMachine.encrypt('Example of sequence: 1, 2, 3, 4.', 'lilkey')
let str = 'attack at dawn!';
str = str.split('').reverse().join('');
let ke = 'alphonse';
let encr = directMachine.encrypt(str, ke);
encr = encr.split('').reverse().join('');
console.log(encr)
directMachine.decrypt(encr, ke)
console.log(directMachine.decrypt(encr, ke))