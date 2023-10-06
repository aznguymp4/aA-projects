function commonFactors(num1, num2) {
    let arr = []
    for(let i=1;i<=Math.min(num1,num2);i++) {
        if(!(num1%i || num2%i)) arr.push(i)
    }
    return arr
}

console.log(commonFactors(12, 50));  // => [ 1, 2 ]
console.log(commonFactors(6, 24));  // => [ 1, 2, 3, 6 ]
console.log(commonFactors(11, 22));  // => [ 1, 11 ]
console.log(commonFactors(45, 60));  // => [ 1, 3, 5, 15 ]

module.exports = commonFactors