function greatestCommonFactor(num1, num2) {
    x = Math.abs(num1);
    y = Math.abs(num2);
    while(y) {
        let t = y
        y = x % y
        x = t
    }
    return x 
}

console.log(greatestCommonFactor(15, 25)) // => 5
console.log(greatestCommonFactor(16, 24)) // => 8
console.log(greatestCommonFactor(7, 11)) // => 1

module.exports = greatestCommonFactor