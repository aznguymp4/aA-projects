function threeIncreasing(arr) {
    for(let i=0;i<arr.length;i++)
    if(arr[i]+1==arr[i+1]&&arr[i+1]+1==arr[i+2])
    return true
    return false
}

console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));  // => true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));  // => false

module.exports = threeIncreasing