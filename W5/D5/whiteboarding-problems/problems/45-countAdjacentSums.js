function countAdjacentSums(arr, n) {
    let count = 0
    for(let i=0;i<arr.length;i++)
    if(arr[i]&&arr[i+1]&&arr[i]+arr[i+1]===n) count++
    return count
}

console.log(countAdjacentSums([1, 5, 1], 6)) // => 2
console.log(countAdjacentSums([7, 2, 4, 6], 7)) // => 0
console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)) // => 3

module.exports = countAdjacentSums