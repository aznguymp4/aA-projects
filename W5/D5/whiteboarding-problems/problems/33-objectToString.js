function objectToString(count) {
    return Object.keys(count).map(letter => letter.repeat(count[letter])).join('')
}

console.log(objectToString({ a : 2, b: 4, c: 1 })) // => 'aabbbbc'
console.log(objectToString({ b: 1, o: 2, t: 1 })) // => 'boot'

module.exports = objectToString