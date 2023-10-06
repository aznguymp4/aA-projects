function oddRange(end) {
    let arr = []
    for(let i=1;i<=end;i+=2) arr.push(i)
    return arr
}

console.log(oddRange(13));  // => [ 1, 3, 5, 7, 9, 11, 13 ]
console.log(oddRange(6));  // => [ 1, 3, 5 ]

module.exports = oddRange