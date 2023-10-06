function factorArray(array, number) {
    let factors = []
    for (let i=1;i<=number;i++) if(number%i == 0) factors.push(i)
    return array.filter(e => factors.includes(e))
}

console.log(factorArray([2,3,4,5,6],20)) // => [2,4,5]
console.log(factorArray([2,3,4,5,6],35)) // => [5]
console.log(factorArray([10,15,20,25],5)) // => []

module.exports = factorArray