function twoDiff(array, diff=2) {
    let arr = []
    for(let i=0;i<array.length;i++) 
    for(let j=i;j<array.length;j++) 
    if((i!=j) && (Math.abs(array[i] - array[j]) === diff)) arr.push([i,j])
    return arr
}

console.log(twoDiff([2, 3, 4, 6, 1, 7]))  // => [[0, 2], [1, 4], [2, 3]]
console.log(twoDiff([0, 2, 4, 3, 5]))  // => [[0, 1], [1, 2], [3,4]]
console.log(twoDiff([]))  // => []

module.exports = twoDiff