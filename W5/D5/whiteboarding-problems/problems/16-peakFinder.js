function peakFinder(array) {
    let peakIdxs = []
    for(let i=0;i<array.length;i++) {
        if((array[i] > array[i-1] || !array[i-1]) && (array[i] > array[i+1] || !array[i+1])) peakIdxs.push(i)
    }
    return peakIdxs
}

console.log(peakFinder([1, 2, 3, 2, 1])); // => [2]
console.log(peakFinder([2, 1, 2, 3, 4, 5])); // => [0, 5]
console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])); // => [2, 6, 8]

module.exports = peakFinder