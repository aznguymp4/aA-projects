const words = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten']

function numsToWords(numString) {
    return numString.split('').map(num=>words[num]).join('')
}

console.log(numsToWords('42')) // => 'FourTwo'
console.log(numsToWords('123')) // => 'OneTwoThree'
console.log(numsToWords('159598')) // => 'OneFiveNineFiveNineEight'

module.exports = numsToWords