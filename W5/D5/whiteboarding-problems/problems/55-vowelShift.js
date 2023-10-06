const VOWELS = 'aeiou';

function vowelShift(sentence) {
    let str = ''
    for(let i=0;i<sentence.length;i++) {
        const letter = sentence[i]
        str += VOWELS.includes(letter)
        ? VOWELS[(VOWELS.indexOf(letter)+1)%VOWELS.length]
        : letter
    }
    return str
}

console.log(vowelShift('bootcamp'));  // => 'buutcemp'
console.log(vowelShift('hello world'));  // => 'hillu wurld'
console.log(vowelShift('on the hunt'));  // => 'un thi hant'

module.exports = vowelShift