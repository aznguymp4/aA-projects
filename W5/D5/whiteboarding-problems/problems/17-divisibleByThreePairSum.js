function divisibleByThreePairSum(array, target=3) {
    let arr = []
    for(let i=0;i<array.length;i++) 
    for(let j=i;j<array.length;j++) 
    if((i!=j) && !((array[i] + array[j]) % target)) arr.push([i,j])
    return arr
}

const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
console.log(arr1) // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
console.log(arr2) // => [[1, 3]]

module.exports = divisibleByThreePairSum