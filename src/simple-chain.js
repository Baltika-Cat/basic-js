const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  count: 0,
  array: [],
  getLength() {
    return this;
    // remove line with error and write your code here
  },
  addLink(value) {
    this.count += 1;
    this.array.push(`( ${value} )`);
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    try {
      this.count += 1;
      this.array.splice(position - 1, 1);
      if (typeof position !== 'number' || position % 1 !== 0 || position > this.array.length || position < 1) {
        this.array.splice(0, this.array.length);
        throw new Error(`You can't remove incorrect link!`);
      }
    } catch(error) {
      error.message = `You can't remove incorrect link!`;
      throw new Error(`You can't remove incorrect link!`);
    }
    return this; 
    // remove line with error and write your code here
  },
  reverseChain() {
    this.count += 1;
    this.array.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    this.count += 1;
    let result = this.array.join(`~~`);
    this.array.splice(0, this.array.length);
    return result;
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};

//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4))
//console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain())