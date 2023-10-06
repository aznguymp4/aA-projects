function oddWordsOut(sentence) {
    return sentence.split(' ').map(word => word.length%2?'':word).filter(Boolean).join(' ')
}

console.log(oddWordsOut('go to the store and buy milk'));  // => 'go to milk'
console.log(oddWordsOut('what is the answer'));  // => 'what is answer'

module.exports = oddWordsOut