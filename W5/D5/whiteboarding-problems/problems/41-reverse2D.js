function reverse2D(array) {
  let str = ''
  for(let row=array.length-1;row>=0;row--) {
    for(let ltr=array[row].length-1;ltr>=0;ltr--) {
      str += array[row][ltr]
    }
  }
  return str
}

const arr1 = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f'],
  ['g', 'h', 'i']
];

console.log(reverse2D(arr1)) // => 'ihgfedcba'
const arr2 = [
  ['Julian', 'Matt', 'Mike'],
  ['Oscar', 'Patrick']
];
console.log(reverse2D(arr2)) // => 'PatrickOscarMikeMattJulian'

module.exports = reverse2D