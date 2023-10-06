function maxValue(array) {
    let highest
    for(let i=0;i<array.length;i++) {
        highest = Math.max(highest, array[i]) || array[i]
    }
    return highest || null
}

console.log(maxValue([12, 6, 43, 2]));  // => 43
console.log(maxValue([]));  // => null
console.log(maxValue([-4, -10, 0.43]));  // => 0.43

module.exports = maxValue