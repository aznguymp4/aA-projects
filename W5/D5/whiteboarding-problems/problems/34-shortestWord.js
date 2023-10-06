function shortestWord(sentence) {
    return sentence.split(' ').sort((a,b)=>a.length-b.length)[0]
}

console.log(shortestWord('app academy is cool')) // => 'is'
console.log(shortestWord('programming bootcamp')) // => 'bootcamp'

module.exports = shortestWord