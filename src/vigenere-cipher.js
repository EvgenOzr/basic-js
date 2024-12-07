const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direction){
    this.direction = direction
  }

  library = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  encrypt(base, key) {
    this.checkArg(base, key)
    return this.cypher(base, key, 'encrypt')
  }
  decrypt(base, key) {
    this.checkArg(base, key)
    return this.cypher(base, key, 'decrypt')
  }
  checkArg(base, key){
    if(!base || !key) throw new Error('Incorrect arguments!')
  }
  cypher(str, key, type){
    let baselength = str.match(/[a-z]/gi).length
    let newKey = key
    let newkeyCount = 0;
    while(newKey.length < baselength){
        newKey += key
    }
    newKey = newKey.slice(0, baselength)
    
    let result = str.split('').map((elem, index) => {
        if(this.library.includes(elem.toLowerCase())) {
            //crypt
            let baseIndex = this.library.indexOf(elem.toLowerCase())
            let indexCrypt = this.library.indexOf(newKey[newkeyCount].toLowerCase())
            let newIndex = (type === 'encrypt') ? 
                (baseIndex + indexCrypt < 26) ? (baseIndex + indexCrypt) : (baseIndex + indexCrypt - 26) :
                (baseIndex - indexCrypt >= 0) ? (baseIndex - indexCrypt) : (baseIndex - indexCrypt + 26)
            newkeyCount += 1;
            return this.library[newIndex]
        }else{
            return elem;
        }
    }).join('').toUpperCase()
    return (this.direction === false) ? result.split('').reverse().join('') : result
  }
}

module.exports = {
  VigenereCipheringMachine
};
