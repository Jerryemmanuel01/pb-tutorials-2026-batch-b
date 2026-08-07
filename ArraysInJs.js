//------------------------------------------------------------------------------------
// --------------------------------ARRAYS IN JAVASCRIPT-------------------------------
//------------------------------------------------------------------------------------
/*Arrays are ordered collections of values that can hold multiple data types. They are used to store and manipulate lists of data. In JavaScript, arrays are created using square brackets [] and can contain any type of data, including other arrays and objects.
Example of an array:
let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
*/

// let fruits = [
//   "Apple", //0
//   "Banana", //1
//   "Cherry", //2
//   "Date", //3
//   "Elderberry", //4
// ];
//-----------------------------------------
// how to access an array: arrayCollection[]

// console.log("The first fruit is: " + fruits[5]); // accessing the first element

// ----------------------------------
// checking the length of the array
// console.log("The number of fruits in the array is: " + fruits.length); // checking the length of the array
// fruits[0] = "Mango"; // changing the first element of the array

//methods of arrays in js
/*
  Some common array methods include:
  - push(): Adds one or more elements to the end of an array.
  - pop(): Removes the last element from an array.
  - shift(): Removes the first element from an array.
  - unshift(): Adds one or more elements to the beginning of an array.
  - splice(): Adds or removes elements from an array at a specified index.
*/

// example of push() method
// fruits.push("Fig");
// console.log("After push, the fruits array is: " + fruits);

// //example of pop() method
// fruits.pop();
// console.log("After pop, the fruits array is: " + fruits);

// //example of shift() method
// fruits.shift();
// console.log("After shift, the fruits array is: " + fruits);

// //example of unshift() method
// fruits.unshift("Grapes");
// console.log("After unshift, the fruits array is: " + fruits);

// //example of splice() method
// fruits.splice(2, 1, "Kiwi"); // at index 2, remove 1 element and add "Kiwi"
// console.log("After splice, the fruits array is: " + fruits);

// ---------------------------------------------------------------------------------------

/*
 iteration of an array; 
 foreach loop
    The forEach() method executes a provided function once for each array element.
*/

let arrayExample = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Mike", age: 35 },
  { name: "Sarah", age: 28 },
  { name: "Tom", age: 22 },
  { name: "Emily", age: 27 },
];

// arrayExample.forEach((val, i) => {
//   console.log(`the name is ${val.name} and he is ${val.age} years old`);
// });

/*
Transformation
    The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
*/
let fruits = ["Apple", "Banana", "Orange"];
// console.log(fruits);

const transformedArray = fruits.map((fruit, i) => fruit?.toUpperCase());
// console.log(transformedArray);

/*
Filter
    filter in javascript creates a new array with result of the function called of filtered through
*/

let userData = [
  { name: "Jonathan", age: 30, isMarried: false },
  { name: "Jane", age: 25, isMarried: true },
  { name: "Mike", age: 35, isMarried: false },
  { name: "Sarah", age: 28, isMarried: true },
  { name: "Tom", age: 22, isMarried: false },
  { name: "Emily", age: 27, isMarried: true },
  { name: "David", age: 32, isMarried: false },
  { name: "Sophia", age: 29, isMarried: true },
  { name: "James", age: 31, isMarried: false },
  { name: "Olivia", age: 26, isMarried: true },
  { name: "Jonathan", age: 39, isMarried: true },
];

let filteredData = userData.filter(
  (user) => user.isMarried === true || user.age > 30,
);

// console.log(filteredData);

/*
Searching
  find- searches through the array and returns the first element that satisfies the provided testing function.
  some- tests whether at least one element in the array passes the test implemented by the provided function.
*/
let findvalue = userData.find((user) => user.name === "James");
// let isValue = userData.some((user) => user.name === "hanks");

// console.log(findvalue);
// console.log(isValue); // returns true if the object is found in the array
// console.log(fruits.includes("Orange"));

 // returns true if the object is found in the array

delete findvalue["age"];
console.log(findvalue);

findvalue.height = "6ft";

console.log(findvalue);

findvalue.name = "Davido";

console.log(findvalue);
