function adults(people) {
  return people.filter(person => person.age>=18).map(person => person.name)
}

const ppl = [
  {name: 'John', age: 20},
  {name: 'Jim', age: 13},
  {name: 'Jane', age: 18},
  {name: 'Bob', age: 7}
];

console.log(adults(ppl)); // => [ 'John', 'Jane' ]

module.exports = adults