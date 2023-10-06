const VOWELS = 'aeiou';

function threeUniqueVowels(string) {
    let set = new Set()
    for(let i=0;i<string.length;i++) {
        if(VOWELS.includes(string[i])) set.add(string[i])
        if(set.size >= 3) return true
    }
    return false
}

console.log(threeUniqueVowels('delicious'));  // => true
console.log(threeUniqueVowels('the bootcamp'));  // => true
console.log(threeUniqueVowels('bootcamp'));  // => false
console.log(threeUniqueVowels('dog'));  // => false
console.log(threeUniqueVowels('go home'));  // => false

module.exports = threeUniqueVowels