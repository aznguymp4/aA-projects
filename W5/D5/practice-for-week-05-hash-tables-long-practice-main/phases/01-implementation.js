class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    // Your code here
    this.count = 0
    this.capacity = numBuckets
    this.data = new Array(numBuckets).fill(null)
    this.keys = new Set()
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
    const idx = this.hashMod(key)
    const kvp = new KeyValuePair(key, value)
    if(this.keys.has(key)) {
      let override
      for(const pair of this.data) {
        if(pair.key === key) return override=pair
        let next = pair.next
        while(next) {
          if(next.key === key) return override=next
          next = pair.next
        }
      }
      override.value = value
      
    }
    if(this.data[idx]) kvp.next = this.data[idx]
    this.data[idx] = kvp
    this.count++
    this.keys.add(key)
  }


  read(key) {
    // for (const pair of this.data) {
    //   if(pair.key === key) return pair
    //   let next = pair.next
    //   while(next) {
    //     if(next.key === key) return next
    //     next = pair.next
    //   }
    // }
    // return false
  }


  resize() {
    this.data = [...this.data, ...new Array(this.capacity).fill(null)]
    this.capacity *= 2
  }


  delete(key) {
    // Your code here
  }
}


module.exports = HashTable;