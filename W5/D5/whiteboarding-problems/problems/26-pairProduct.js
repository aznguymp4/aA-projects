// CONSTRAINT: Use only while loops. No for loops.

function pairProduct(arr, num) {
    let pairs = []
    let i = 0
    while (i < arr.length) {
        let j = i
        while (j < arr.length) {
            if(i!=j && arr[i] * arr[j] === num) pairs.push([i,j])
            j++
        }
        i++
    }
    return pairs
}

console.log(pairProduct([1, 2, 3, 4, 5], 4)); // => [ [ 0, 3 ] ]
console.log(pairProduct([1, 2, 3, 4, 5], 8)); // => [ [ 1, 3 ] ]
console.log(pairProduct([1, 2, 3, 12, 8], 24)); // => [ [ 1, 3 ], [ 2, 4 ] ]

module.exports = pairProduct