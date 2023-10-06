function elementCount(array, obj = {}) {
    array.map(el => {
        if(!obj[el]) obj[el]=1
        else obj[el]++
    })
    return obj
}

console.log(elementCount(["a", "a", "b", "b"])); // => { "a" : 2, "b" : 2 }
console.log(elementCount(['c', 'a', 'c', 'a', 'b'])); // => { "c": 2, "a": 2, "b": 1 }

module.exports = elementCount