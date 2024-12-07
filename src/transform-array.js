const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`)
    let newArr = []
    let discardnext = false;
    arr.forEach((elem, index) => {
        if(typeof(elem) === 'number') {
            if(!discardnext) newArr.push(elem)
            discardnext = false
        }else if(typeof(elem) === 'string') {
            switch(elem){
                case '--discard-next':
                    if(arr[index + 1]) discardnext = true
                    break;
                case '--discard-prev':
                    if(arr[index - 2] !== '--discard-next'){
                        if(arr[index - 1]) newArr.pop()
                    }
                    break;
                case '--double-next':
                    if(arr[index + 1]) newArr.push(arr[index + 1])
                    break;
                case '--double-prev':
                    if(arr[index - 2] !== '--discard-next'){
                        if(arr[index - 1]) newArr.push(arr[index - 1])
                    }
                    break;
                default:
                    newArr.push(elem)
            }
        } else {
            newArr.push(elem)
        }
    })
    return newArr
}

module.exports = {
  transform
};
