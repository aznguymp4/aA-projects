function intersect(arr1, arr2) {
    return arr1.filter(e=>arr2.includes(e))
}

console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e'])) // => [ 'b', 'd' ]
console.log(intersect(['a', 'b', 'c'], ['x', 'y', 'z'])) // => []

module.exports = intersect