function signFlipCount(nums) {
    let count = 0
    let lastNum = nums[0]
    for(let i=1;i<nums.length;i++) {
        if(nums[i] > 0 !== lastNum > 0) count++
        lastNum = nums[i]
    }
    return count
}

console.log(signFlipCount([5, 6, 10, 3])); // => 0
console.log(signFlipCount([-12, 0, -3, -5])); // => 0
console.log(signFlipCount([-12, 10, -3, -5])); // => 2
console.log(signFlipCount([1, -2, -3, -4])); // => 1
console.log(signFlipCount([-1, 11.3, -3, 100])); // => 3

module.exports = signFlipCount