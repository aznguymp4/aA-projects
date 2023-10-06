function splitHalfArray(array) {
  return [array.slice(0,array.length*.5), array.slice(Math.ceil(array.length*.5),array.length)]
}

console.log(splitHalfArray([1, 2, 3, 4, 5]));
  // => [ [ 1, 2 ], [ 4, 5 ] ]

console.log(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']));
  // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]

module.exports = splitHalfArray