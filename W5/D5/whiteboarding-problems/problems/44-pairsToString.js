function pairsToString(arr) {
  return arr.map(pair => pair[0].repeat(pair[1])).join('')
}

const array1 = [
  ['a', 3],
  ['b', 1],
  ['c', 2]
];
console.log(pairsToString(array1));  // => 'aaabcc'

const array2 = [
  ['f', 1],
  ['o', 2],
  ['d', 1],
  ['!', 1]
];
console.log(pairsToString(array2));  // => 'food!'

module.exports = pairsToString