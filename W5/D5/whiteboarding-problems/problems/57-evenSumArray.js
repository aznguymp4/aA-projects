function evenSumArray(array) {
    return array.map(num => {
        let sum = 0
        for(let i=(~~(num*.5))*2; i>0; i-=2) {
            sum += i
        }
        return sum
    })
}

console.log(evenSumArray([6, 7, 5])) // => [ 12, 12, 6 ]
console.log(evenSumArray([2, 8, 3, 5])) // => [ 2, 20, 2, 6 ]

module.exports = evenSumArray