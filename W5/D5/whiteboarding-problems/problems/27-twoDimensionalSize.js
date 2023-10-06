function twoDimensionalSize(array) {
  return array.map(sub => sub.length).reduce((a,b)=>a+b,0)
}

const arr1 = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];
console.log(twoDimensionalSize(arr1));  // => 9

const arr2 = [
  ['a'],
  ['b', 'c', 'd', 'e']
];
console.log(twoDimensionalSize(arr2));  // => 5

module.exports = twoDimensionalSize