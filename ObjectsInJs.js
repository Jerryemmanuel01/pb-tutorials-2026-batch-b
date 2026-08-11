//----------------Object in javascript-------------------

/*
  An object is a collection of properties, and a property is an association between a name (or key) and a value.
  example:
  let person = {
    name: "John",
    age: 30,
    city: "New York"
  };

  Accessing object properties:
  - Dot notation: person.name
  - Bracket notation: person["name"]

  Adding or modifying properties:
  - person.country = "USA"; // Adds a new property
  - person.age = 31; // Modifies an existing property

  Deleting properties:
  - delete person.city; // Removes the property

  Looping through object properties:
  - 
*/


// Object.values(findvalue).forEach((val) => console.log(val));

// looping through an array of objects
let students = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 23 },
  { name: "David", age: 24 },
  { name: "Eve", age: 25 },
];

students.forEach((student) => {
  console.log(student.name + " is " + student.age + " years old.");
});

let car = {
  name: "BMW",
  model: "M3",
  model: "M4",
  color: "black",
  horsepower: 560,
  engine: "V8",
  year: "2018",
  key: "TESTING"
};

// console.log(`Our dream is ${car.name}, with a model of ${car.model}, having is in a ${car.color} will look nice.\nIt should have ${car["horsepower"]} horsepower with a ${car["engine"]}`);

car.year = "2025";

delete car.model;

console.log(car);

// for (let key in car) {
//   console.log(key + ": " + car[key]);
// }

Object.values(car).forEach((FAME) => console.log(`this is the returned value: ${FAME}`));

// console.log(Object.values(car));
