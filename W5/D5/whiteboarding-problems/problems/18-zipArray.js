function zipArray(arr1, arr2) {
    return arr1.map((e,i) => [e,arr2[i]])
}

const a1 = ['a', 'b', 'c', 'd'];
const a2 = [10, 20, 30, 40];

const result = zipArray(a1, a2);
console.log(result); // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]

module.exports = zipArray