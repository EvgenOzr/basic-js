const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let newArr = []
  for(let i = 0; i < matrix.length; i +=1) {
      let newInArr = []
      for(let j = 0; j < matrix[i].length; j++){
          let result = 0
          result += ((j - 1 > -1) && (matrix[i][j-1])) ? 1:0 //left
          result += ((j + 1 < matrix[i].length) && (matrix[i][j + 1])) ? 1:0 //right
          result += ((i - 1 > -1) && (matrix[i - 1][j])) ? 1:0 //up
          result += ((i + 1 < matrix.length) && (matrix[i + 1][j])) ? 1:0 //down
          result += ((j - 1 > -1) && (i - 1 > -1) && (matrix[i - 1][j - 1])) ? 1:0 //leftUp 
          result += ((j + 1 < matrix[i].length) && (i - 1 > -1) && (matrix[i - 1][j + 1])) ? 1:0 //rightUp
          result += ((j - 1 > -1) && (i + 1 < matrix.length) && (matrix[i + 1][j - 1])) ? 1:0 //leftDown
          result += ((j + 1 < matrix[i].length) && (i + 1 < matrix.length) && (matrix[i + 1][j + 1])) ? 1:0 //rigthDown
          newInArr.push(result)
      }
      newArr.push(newInArr)
  }
  return newArr
}

module.exports = {
  minesweeper
};
