function fizzBuzz(max) {
    let arr = []
    for(let i=0;i< max;i++)
    if((i%3==0 && i%5!==0) || (i%5==0 && i%3!==0))
    arr.push(i)

    return arr
}

console.log(fizzBuzz(20)); // => [3, 5, 6, 9, 10, 12, 18]

module.exports = fizzBuzz