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
  let newArr = domains.map((elem) => elem.split('.').reverse())
  let domMap = new Map()

  newArr.forEach((elem) => {
      let domain = ''
      for(let i = 0; i < elem.length; i+=1){
          domain += `.${elem[i]}`;
          if(domMap.has(domain)){
              let value = domMap.get(domain)
              domMap.set(domain,value + 1)
          } else {
              domMap.set(domain, 1)
          }
      }
  })
  return Object.fromEntries(domMap) 
}

module.exports = {
  getDNSStats
};
