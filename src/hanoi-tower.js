const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // function moves (disksNumber, origin, auxiliary , destination){
  //   if (disksNumber <= 1) {
  //     return 1;
  //   }
  //   const turns = moves(disksNumber - 1, origin, destination, auxiliary);
  //   const additionalTurns = moves(disksNumber - 1, destination, auxiliary, origin);
    
  //   return turns + additionalTurns + 1;
  // } 
  let turns = Math.pow(2, disksNumber) - 1
  let seconds = Math.floor(turns / (turnsSpeed / 3600) )

  return {
    turns,
    seconds
  }
}

module.exports = {
  calculateHanoi
};
