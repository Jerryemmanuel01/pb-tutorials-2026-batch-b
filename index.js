// single line comment
/*
  multi-line comment
*/

//---------VARIABLES------------
/*
  Three forms of variable declaration
  --const - constant. not subjected to change.
  --let - subjected to change.
  --var - subjected to change.
*/

let variableName = 10000;

variableName = 500000;

const pi = 3.142;

// pi = 78.3

console.log("The value of Pi is = " + pi);

//------------------DATATYPES-----------------
/*
    -Primitive DataTypes
    *Strings
    *Number
    *Boolean
    *Null: Represents an intentional absence of any value
    *Undefined: Represents a variable that has been declared but not assigned a value

    -Non primitive DataTypes
    - Object: Represents a collection of key-value pairs, e.g., { name: "John", age: 30 }
    - Array: Represents an ordered list of values, e.g., [1, 2, 3, "Hello", true, null, undefined]
*/

// let name = "john";
let age = null;
console.log(age);
// let isAdult = false;

// let userAge = Number(prompt("Enter your age"));
// if (userAge >= 18 && userAge <= 80) {
//   isAdult = true;
//   alert("Your age is inbetween 18 - 80");
// } else if (userAge > 80) {
//   isAdult = true;
//   alert("You are a very old man, above the age of 80");
// } else {
//   alert("You are under age");
// }
// if (userAge >= 18) isAdult = true;

let myHouse = {
  location: "Ojido",
  apartment: "Duplex",
};

 
// accessing an object properties
// dot notation and bracket notation
// console.log(commissional.complextion, commissional.age, commissional.car);
// console.log(commissional["name"], commissional.age, commissional.car);

let shopinglist = [
  "Milk",
  "Eggs",
  "Bread",
  "Butter",
  "Cheese",
  true,
  56,
  null,
  { itemsToBuy: 78 },
];
console.log(shopinglist[5]);
