function hasSymmetry(array) {
    return array.slice(0,array.length*.5).map((e,i) => array[array.length-1-i] === e).every(Boolean)
}

console.log(hasSymmetry([1, 2, 3, 3, 2, 1])) // => true
console.log(hasSymmetry([1, 2, 3, 3, 4, 1])) // => false
console.log(hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat'])) // => true
console.log(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat'])) // => false

module.exports = hasSymmetry