const isPrime = require('./04-isPrime')

function firstNPrimes(n, start=1) {
    if(!n) return []
    let arr = []
    let num = start
    while(arr.length<n) {
        if(isPrime(num)) arr.push(num)
        num++
    }
    return arr
}

console.log(firstNPrimes(0));  // => []
console.log(firstNPrimes(1));  // => [2]
console.log(firstNPrimes(4));  // => [2, 3, 5, 7]

module.exports = firstNPrimes