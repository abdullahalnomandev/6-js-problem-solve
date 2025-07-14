const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Clara", age: 22, gender: "female" },
  { name: "David", age: 35, gender: "male" },
  { name: "Eva", age: 28, gender: "female" }
];

function getNonFemaleNames(personArray) {
  return personArray
    .filter(person => person.gender !== "female")
    .map(person => person.name);
}

const result = getNonFemaleNames(people);
// console.log(result);
