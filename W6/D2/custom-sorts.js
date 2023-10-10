function ageSort(users) {
  // Your code here
  return users.sort((a, b) => a.age - b.age);
}

function oddEvenSort(arr) {
  // Your code here
  return [...(arr.filter(n => n%2)).sort((a, b) => a - b), ...(arr.filter(n => n%2===0)).sort((a, b) => a - b)]

}

function validAnagrams(s, t) {
  // Your code here
  return s.split('').sort().join('') === t.split('').sort().join('');
}

function reverseBaseSort(arr) {
  // Your code here
  let largest = 0
  let sorted = []
  let map = {}
  arr.forEach(num => {
    largest = Math.max(largest, num)
    let digits = num.toString().length
    if(!map[digits]) map[digits] = [num]
    else map[digits].push(num)
  })

  for(let i=largest.toString().length;i>0;i--) {
    sorted.push(...map[i].sort((a,b)=>a-b))
  }
  return sorted
}

function frequencySort(arr) {
  // Your code here
  let sorted = []
  let obj = {}
  arr.forEach(num => {
    if(!obj[num]) obj[num] = 1
    else obj[num]++
  })
  
  Object.entries(obj).sort((a,b) => (a[1] + (0-a[0]*.01)) - (b[1] + (0-b[0]*.01))).map(entry => {
    let arr = []
    for(let i=0;i<entry[1];i++) arr.push(parseInt(entry[0]))
    sorted.push(...arr)
  })
  return sorted
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
