function printReverse(min, max) {
    let arr = []
    for(let i=max-1;i>min;i--) arr.push(i)
    return arr
}

console.log(printReverse(13, 18)) // => [17, 16, 15, 14]
console.log(printReverse(90, 94)) // => [93, 92, 91]

module.exports = printReverse