const vowels = 'aeiouAEIOU'
function hipsterfyWord(word) {
    let newWord = ''
    let vowelFound = false
    
    for(let i=word.length-1;i>=0;i--) {
        if(vowels.includes(word[i]) && !vowelFound) vowelFound = true
        else newWord = word[i] + newWord
    }
    
    return newWord
}

console.log(hipsterfyWord('proper')) // => 'propr'
console.log(hipsterfyWord('tonic')) // => 'tonc'
console.log(hipsterfyWord('PANTHER')) // => 'PANTHR'
console.log(hipsterfyWord('BACKWARDS')) // => 'BACKWRDS'

module.exports = hipsterfyWord