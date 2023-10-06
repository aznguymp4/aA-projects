function factorial(n) {
    let product = 1
    for(let i=n;i>0;i--) product *= i
    return product
}

console.log(factorial(1));  // => 1
console.log(factorial(4));  // => 24
console.log(factorial(5));  // => 120
console.log(factorial(10));  // => 3628800

module.exports = factorial