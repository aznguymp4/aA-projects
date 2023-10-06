function lcm(num1, num2) {
    let i = 1
    while((i%num1 + i%num2) !== 0) i++
    return i
}

console.log(lcm(2, 3));  // => 6
console.log(lcm(6, 10));  // => 30
console.log(lcm(24, 26));  // => 312

module.exports = lcm