const VOWELS = 'aeiou'

function abbreviate(sentence) {
    return sentence.toLowerCase().split(' ').map(word => {
        if(word.length<4) return word
        return word.split('').map(letter => VOWELS.includes(letter)?'':letter).filter(Boolean).join('')
    }).join(' ')
}

console.log(abbreviate('the bootcamp is fun')); // => 'the btcmp is fun'
console.log(abbreviate('programming is fantastic')); // => 'prgrmmng is fntstc'
console.log(abbreviate('hello world')); // => 'hll wrld'
console.log(abbreviate('how are you')); // => 'how are you'

module.exports = abbreviate