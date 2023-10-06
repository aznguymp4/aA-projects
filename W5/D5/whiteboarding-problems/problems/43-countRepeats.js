const elementCount = require('./24-elementCount')

function countRepeats(string) {
    return Object.values(elementCount(string.split(''))).reduce((a,b)=>a+(b>1),0)
}

console.log(countRepeats('calvin')); // => 0
console.log(countRepeats('caaaalvin')); // => 1
console.log(countRepeats('pops')); // => 1
console.log(countRepeats('mississippi')); // => 3
console.log(countRepeats('hellobootcampprep')); // => 4

module.exports = countRepeats