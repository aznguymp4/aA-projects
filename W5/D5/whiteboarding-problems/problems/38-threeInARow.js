function threeInARow(arr) {
    for(let i=0;i<arr.length;i++)
    if(arr[i]===arr[i+1]&&arr[i+1]===arr[i+2])
    return true
    return false
}

console.log(threeInARow([4, 3, 7, 7, 7, 13, 8]));  // => true;
console.log(threeInARow([10, 9, 20, 33, 3, 3]));  // => false;

module.exports = threeInARow