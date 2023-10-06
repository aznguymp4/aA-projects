function logBetween(lowNum, highNum) {
    let arr = []
    for(let i=lowNum;i<=highNum;i++) arr.push(i)
    return arr
}

console.log(logBetween(-1, 2));  // => [-1, 0, 1, 2]
console.log(logBetween(14, 6));  // => []
console.log(logBetween(4, 6));  // => [4, 5, 6]

module.exports = logBetween