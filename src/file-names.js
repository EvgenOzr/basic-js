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
  let fileMap = new Map()
  return names.map((elem) => {
      if(fileMap.has(elem)){
          let newValue = fileMap.get(elem)
          let newElem = `${elem}(${newValue})`
          fileMap.set(elem, newValue + 1)
          fileMap.set(newElem, 1)
          return newElem
      }else{
          fileMap.set(elem, 1)
          return elem
      }
  })
}

module.exports = {
  renameFiles
};
