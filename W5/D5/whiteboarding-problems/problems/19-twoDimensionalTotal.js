function twoDimensionalTotal(array) {
  return array.map(nums => nums.reduce((a,b)=>a+b,0)).reduce((a,b)=>a+b,0)
}

const arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];

console.log(twoDimensionalTotal(arr1));  // => 40

const arr2 = [
  [2],
  [1, 9],
  [1, 1, 1]
]

console.log(twoDimensionalTotal(arr2));  // => 15

module.exports = twoDimensionalTotal