function reverb(word) {
    if(!/[aeiou]/.test(word.toLowerCase())) return word

    let vowelChunk = ''
    let amt = -1
    while(!/[aeiou]/.test(vowelChunk.toLowerCase())) {
        vowelChunk = word.slice(amt)
        amt--
    }

    return `${word}${vowelChunk}`
}

console.log(reverb('running'));  // => 'runninging'
console.log(reverb('wild'));  // => 'wildild'
console.log(reverb('debugged'));  // => 'debuggeded'
console.log(reverb('my'));  // => 'my'

module.exports = reverb