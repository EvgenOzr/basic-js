const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  
  result: '',

  getLength() {
      return this.result.length
  },
  addLink(value = ``) {
      this.result += (this.result) ? `~~( ${value} )` : `( ${value} )`
      return this
  },
  removeLink(position) {
      if((position < 1) || (position > this.result.split('~~').length) || (typeof(position) !== 'number')){
        this.result = ''
        throw new Error("You can't remove incorrect link!")
      }
      this.result = this.result.split('~~').filter((_, index) => index !== position - 1).join('~~')
      return this
  },
  reverseChain() {
      this.result = this.result.split('~~').reverse().join('~~')
      return this
  },
  finishChain() {
      let temp = this.result
      this.result = ''
      return temp;
  }
};

module.exports = {
  chainMaker
};
