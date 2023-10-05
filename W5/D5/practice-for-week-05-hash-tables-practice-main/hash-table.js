const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(numBuckets = 4) {
    this.count = 0
    this.capacity = numBuckets
    this.data = new Array(numBuckets).fill(null)
  }

  hash(key) {
    return parseInt(sha256(key).slice(0,8),16)
  }

  hashMod(key) {
    return this.hash(key) % this.capacity
  }

  insertNoCollisions(key, value) {
    const index = this.hashMod(key)
    if(this.data[index]) throw Error('hash collision or same key/value pair already exists!')
    this.data[index] = {key, value}
    this.count++
  }

  insertWithHashCollisions(key, value) {
    const pair = new KeyValuePair(key, value)
    const index = this.hashMod(key)
    pair.next = this.data[index]
    this.data[index] = pair
    this.count++
  }
  
  insert(key, value) {
    let index = this.hashMod(key)
    let current = this.data[index]
    while(current) {
      if(current.key === key) break
      current = current.next
    }
    
    if(current) {
      current.value = value
    } else {
      const pair = new KeyValuePair(key, value)
      pair.next = this.data[index]
      this.data[index] = pair
      this.count++
    }
  }
}


module.exports = HashTable;