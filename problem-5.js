const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Carol", age: 28, gender: "female" },
];

function updateAge(arr, target, newAge) {
  const person = arr.find((p) => p.name === target);
  if (person) person.age = newAge;
  return arr;
}

updateAge(people, "Bob", 35);
// console.log(people);
