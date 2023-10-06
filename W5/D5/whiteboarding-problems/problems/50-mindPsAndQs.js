function mindPsAndQs(str) {
    return str.match(/[p|q]{1,}/gmi).sort((a,b)=>b.length-a.length)[0].length
}

console.log(mindPsAndQs('BOOTCAMP'));  // => 1
console.log(mindPsAndQs('APCDQQPPC'));  // => 4
console.log(mindPsAndQs('PQPQ'));  // => 4
console.log(mindPsAndQs('PPPXQPPPQ'));  // => 5

module.exports = mindPsAndQs