class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.count = 0
    this.capacity = numBuckets
    this.data = new Array(numBuckets).fill(null)
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    const index = this.hashMod(key)
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


  read(key) {
    const index = this.hashMod(key)
    let pair = this.data[index]
    if(pair && pair.key === key) return pair.value

    while(pair) {
      if(!pair) continue
      if(pair.key === key) return pair.value
      pair = pair.next
    }

    return undefined
  }


  resize() {
    let resize = this.data
    this.capacity *= 2
    this.data = new Array(this.capacity).fill(null)
    for (let i = 0; i < resize.length; i++) {
      if(!resize[i]) continue
      let pair = resize[i]
      while(pair) {
        if(!pair) continue
        this.insert(pair.key, pair.value)
        this.count--
        pair = pair.next
      }
    }
  }


  delete(key) {
    if(!this.read(key)) return 'Key not found'

    const index = this.hashMod(key)
    let pair = this.data[index]
    
    if(pair && pair.key === key) this.data[index] = pair?.next || null

    while(pair) {
      if(pair.next?.key === key) pair.next = pair.next?.next || null
      pair = pair.next
    }

    this.count--
  }
}

module.exports = HashTable;