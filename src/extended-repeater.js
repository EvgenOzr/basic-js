const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let base = str;

  if(options.addition || options.addition === false || options.addition === null) {
      let add = `${options.addition}`
      if(options.additionRepeatTimes){
          const addSeparator = (options.additionSeparator) ? options.additionSeparator : '|'
          const afterAddSeparator = `${add}${addSeparator}`.repeat(options.additionRepeatTimes)
          add = afterAddSeparator.slice(0, afterAddSeparator.length - addSeparator.length)
      }
      base += add;
  }
  if(options.repeatTimes){
      const separator = (options.separator) ? options.separator : '+'
      const afterSeparator = `${base}${separator}`.repeat(options.repeatTimes)
      return afterSeparator.slice(0, afterSeparator.length - separator.length)
  }

  return base
}

module.exports = {
  repeater
};
