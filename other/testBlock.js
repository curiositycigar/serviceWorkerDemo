const crypto = require('crypto')

class Block {
  constructor(prevHash) {
    this.prevHash = prevHash
    this.createHash()
  }
  createHash() {
    let hash = crypto.createHash('sha256')
    hash.update(this.prevHash)
    this.hash = hash.digest('hex')
    this.timestamp = Date.now()
  }
  getHash() {
    return this.hash
  }
}

let hash = crypto.createHash('sha256')
hash.update('the first')
let theFirstBlock = new Block(hash.digest('hex'))
console.log(theFirstBlock)
let hash2 = crypto.createHash('sha256')
hash2.update(theFirstBlock.getHash())
console.log(hash2.digest('hex'))