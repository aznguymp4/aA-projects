function variableNameify(words) {
    return words.map((w,i)=>i?w[0].toUpperCase()+w.toLowerCase().substr(1):w.toLowerCase()).join('')
}

console.log(variableNameify(['is', 'prime'])) // => 'isPrime'
console.log(variableNameify(['remove', 'last', 'vowel'])) // => 'removeLastVowel'
console.log(variableNameify(['MaX', 'VALUE'])) // => 'maxValue'

module.exports = variableNameify