const elementCount = require('./24-elementCount')

function moreDotLessDash(str) {
    const count = elementCount([...str])
    const [dot,dash] = [count['.'],count['-']]
    if(!(dot && dash)) return false
    return dot > dash
}

console.log(moreDotLessDash('2-D arrays are fun. I think.'));  // => true
console.log(moreDotLessDash('.-.-.'));  // => true
console.log(moreDotLessDash('.-'));  // => false
console.log(moreDotLessDash('..--'));  // => false

module.exports = moreDotLessDash