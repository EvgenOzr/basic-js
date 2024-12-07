const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let mapS1 = new Map()
  let mapS2 = new Map()
  let result = 0;
  s1.split('').forEach((elem) => {
      if(mapS1.has(elem)) {
          let value = mapS1.get(elem)
          mapS1.set(elem, value + 1)
      } else {
          mapS1.set(elem, 1)
      }
  })
  s2.split('').forEach((elem) => {
      if(mapS2.has(elem)) {
          let value = mapS1.get(elem)
          mapS2.set(elem, value + 1)
      } else {
          mapS2.set(elem, 1)
      }
  })
  mapS1.forEach((value, key) => {
      if(mapS2.has(key)) result += (value <= mapS2.get(key)) ? value : mapS2.get(key)
  })

  return result
}

module.exports = {
  getCommonCharacterCount
};
