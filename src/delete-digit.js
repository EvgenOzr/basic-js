const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0
  let nStr = `${n}`
  for(let i = 0; i < nStr.length; i += 1){
      let t = nStr.slice(0, i) + nStr.slice(i + 1) 
      if(result < t) result = t;
  }
  return +result
}

module.exports = {
  deleteDigit
};
