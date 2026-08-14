
// variable declaration in js
/*
what is a variable?

a variable is a container to store data values

  ------ type of variables in js -------
  1. var
  2. let
  3. const

  var - global scope and function scope 
  let - block scope, data assigned to let can be changed
  const - block scope and constant value, data assigned to const cannot be changed

    // example of let and const variables

    let age = 20  // example of let variable and can be changed
    age = 25      // changing the value of age variable

  pie = 3.142 or 22/7  // example of constant value
  const name = "favour" // example of constant value and cannot be changed

*/

// let age;
// const name = "favour";
// let techNiche = "Software Developer";

// console.log("My name is " + name + ", I am a " + techNiche);

// age = 25;
// console.log("My name is " + name + ", I am " + age + " years old.");
// let isMarried = false;
// console.log("Am I married? " + isMarried);

// let favouriteColor = null;

// console.log("My favourite color is " + favouriteColor);
//------------------------------- Data Types in JavaScript -----------------------------
// what is data type?
/*
Data type is an attribute of data which tells the compiler or interpreter how the programmer intends to use the data.
    ------ types of data types in js -------
*/
/*JavaScript has several data types:
1. Primitive Types:
    - String: Represents text, e.g., "Hello World". we use single or double quotes to represent string data type  
        e.g., 'Hello' or "Hello"
    - Number: Represents numeric values, e.g., 42, 3.14
    - Boolean: Represents true or false values
    - Null: Represents an intentional absence of any value
    - Undefined: Represents a variable that has been declared but not assigned a value
*/

// 2. Non-Primitive Types:
/*
    - Object: Represents a collection of key-value pairs, e.g., { name: "John", age: 30 }
    - Array: Represents an ordered list of values, e.g., [1, 2, 3, "Hello", true, null, undefined]
*/

// let commissional = {
//   name: "John Doe",
//   age: 30,
//   complextion: "Fair",
//   isMarried: false,
//   car: "Toyota",
//   children: null,
//   hobbies: ["Reading", "Traveling", "Swimming"],
// };

//accessing an object properties
//dot notation and bracket notation
// // console.log(commissional.complextion, commissional.age, commissional.car);
// // console.log(commissional["name"], commissional.age, commissional.car);

// let shopinglist = ["Milk", "Eggs", "Bread", "Butter", "Cheese", true, 56, null];
// console.log(shopinglist[5]);


// --------- Promts and alerts in JavaScript -----------------
// Prompts and alerts are used to interact with the user in a web browser.
// 1. Alert: Displays a message to the user in a popup dialog box.
// alert("Hello, this is an alert message!");
// 2. Prompt: Displays a dialog box that prompts the user for input.


// -------------------------Control Flow in JavaScript-----------------
/*Control flow in JavaScript determines the order in which statements are executed based on certain conditions. The main control flow structures are:
1. Conditional Statements:
    - if, else if, else: Used to execute code based on conditions.
    - switch: Used to execute code based on multiple possible values of a variable.
2. Loops:
    - for: Used to repeat a block of code a specific number of times.
    - while: Used to repeat a block of code as long as a condition is true.
    - do...while: Similar to while, but the code block is executed at least once.
3. Break and Continue:
    - break: Exits a loop or switch statement.
    - continue: Skips the current iteration of a loop and continues with the next iteration.
*/

// if statement example
// let ade_Age = prompt("Please enter Ade's age: ");

// if (Number(ade_Age) < 18) {
//     alert("Ade is a minor.");
// } else if (Number(ade_Age) === 18) {
//     alert("Ade is exactly 18 years old.");
// }else if (Number(ade_Age) > 18 && Number(ade_Age) < 65) {
//     alert("Ade is an adult, above the age of 18, but below the age of 65.");
// }
// else {
//     alert("Ade is a senior citizen.");
// }

//switch case example
// switch (Number(ade_Age)) {
//     case 18:
//         alert("Ade is exactly 18 years old.");
//         break;
//     case Number(ade_Age) < 18:
//         alert("Ade is a minor.");
//         break;
//     default:
//         alert("Ade is not 18 years old.");
// }

// EXAMPLE OF LOOPS
// for loop
// for (let f = 0; f < 10; f++) {
//   console.log(f);
// }

//while loop
// let count = 0;
// let maxLimit =10

// while (count <= maxLimit ){
// console.log(count)
// count++
// }

// do...while loop
// do {
//     console.log(count);
//     count++;
// } while (count <= maxLimit);


// ----------------------Functions in JavaScript-------------------------------
/*Functions are reusable blocks of code that perform a specific task. They can take inputs (parameters) and return outputs (return values). Functions help organize code and make it more modular.

There are three main ways to define functions in JavaScript:
1. Function Declaration
function functionName(parameters) {
  // code to execute
  return value; // optional return statement
}
2. Function Expression
const functionName = function(parameters) {
    // code to execute
    return value; // optional return statement
    }
3. Arrow Function (ES6+)
const functionName = (parameters) => {
  // code to execute
  return value; // optional return statement
};
*/

//function declaration example
// function simpleInterest(principal, rate, time) {
//     //calculate simple interest
//     let simpleInterest = (principal * rate * time) / 100;
//     console.log("The simple interest is: " + simpleInterest);
//     return simpleInterest; // returning the calculated simple interest
// }

// simpleInterest(6000,30,20) // calling the function
// simpleInterest(5000,25,15) // calling the function
// simpleInterest(7000,35,25) // calling the function
// simpleInterest(8000,40,30) // calling the function

//function expression example
// const calculateArea = function(radius) {
//     const area = Math.PI * radius * radius;
//     console.log("The area of the circle is: " + area);
//     return area; // returning the calculated area
// }

// calculateArea(5) // calling the function
// calculateArea(10) // calling the function
// calculateArea(15) // calling the function
// calculateArea(20) // calling the function

// //ARROW FUNCTION IN JS
// const calculateCircumference = (radius) => {
//     const circumference = 2 * Math.PI * radius;
//     console.log("The circumference of the circle is: " + circumference);
//     return circumference; // returning the calculated circumference
// }

// // a callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. It allows you to handle asynchronous operations and execute code after a certain event has occurred.
// // Example of a callback function
// function fetchData(callback) {
//     setTimeout(() => {
//         const data = "Data fetched from the server";
//         callback(data); // calling the callback function with the fetched data
//     }, 2000); // simulating a delay of 2 seconds
// }

//------------------------------------------------------------------------------------
// --------------------------------ARRAYS IN JAVASCRIPT-------------------------------
//------------------------------------------------------------------------------------
/*Arrays are ordered collections of values that can hold multiple data types. They are used to store and manipulate lists of data. In JavaScript, arrays are created using square brackets [] and can contain any type of data, including other arrays and objects.
Example of an array:
let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
*/

// let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
// console.log("The first fruit is: " + fruits[0]); // accessing the first element
// //checking the length of the array
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

// let arrayExample = [
//   { name: "John", age: 30 },
//   { name: "Jane", age: 25 },
//   { name: "Mike", age: 35 },
//   { name: "Sarah", age: 28 },
//   { name: "Tom", age: 22 },
//   { name: "Emily", age: 27 },
// ];

// arrayExample.forEach((val, i) => {
//   console.log(val.name + " is " + val.age + " years old.");
// });

/*
Transformation
    The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
*/
// let fruits = ["Apple", "Banana", "Orange"];
// console.log(fruits);

// const transformedArray = fruits.map((fruit, i) => fruit?.toUpperCase());
// console.log(transformedArray);

/*
Filter
    filter in javascript creates a new array with result of the function called of filtered through
*/

// let userData = [
//   { name: "Jonathan", age: 30, isMarried: false },
//   { name: "Jane", age: 25, isMarried: true },
//   { name: "Mike", age: 35, isMarried: false },
//   { name: "Sarah", age: 28, isMarried: true },
//   { name: "Tom", age: 22, isMarried: false },
//   { name: "Emily", age: 27, isMarried: true },
//   { name: "David", age: 32, isMarried: false },
//   { name: "Sophia", age: 29, isMarried: true },
//   { name: "James", age: 31, isMarried: false },
//   { name: "Olivia", age: 26, isMarried: true },
//   { name: "Jonathan", age: 39, isMarried: true },
// ];

// let filteredData = userData.filter(
//   (user) => user.isMarried === true && user.age < 29 && user.name.startsWith("J")
// );

// console.log(filteredData);

/*
Searching
  find- searches through the array and returns the first element that satisfies the provided testing function.
  some- tests whether at least one element in the array passes the test implemented by the provided function.
*/
// let findvalue = userData.find((user) => user.name === "Jonathan");
// let isValue = userData.some((user) => user.name === "Jonathan");

// console.log(findvalue);
// console.log(isValue); // returns true if the object is found in the array

// userData.includes({ name: "Jonathan", age: 30, isMarried: false }); // returns true if the object is found in the array

// delete findvalue["age"];
// findvalue.height = "6ft";

// console.log(findvalue);

// findvalue.name = "Davido";

// console.log(findvalue);

---------------------------------------------------------
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
// for (let key in findvalue) {
//   console.log(key + ": " + findvalue[key]);
// }

// Object.values(findvalue).forEach((val) => console.log(val));

// looping through an array of objects
// let students = [
//   { name: "Alice", age: 21 },
//   { name: "Bob", age: 22 },
//   { name: "Charlie", age: 23 },
//   { name: "David", age: 24 },
//   { name: "Eve", age: 25 },
// ];

// students.forEach((student) => {
//   console.log(student.name + " is " + student.age + " years old.");
// });

// -------------------------------------------------------------------------
// ------------------------------DOM MANIPULATION IN JAVASCRIPT-------------
// -------------------------------------------------------------------------
/*
DOM (Document Object Model) manipulation in JavaScript refers to the process of using JavaScript to interact with and modify the structure, style, and content of a web page. The DOM represents the HTML document as a tree structure, where each element is a node that can be accessed and manipulated using JavaScript.
Common DOM manipulation techniques include:
1. Selecting Elements:
   - document.getElementById(): Selects an element by its ID.
    - document.getElementsByClassName(): Selects elements by their class name.
    - document.getElementsByTagName(): Selects elements by their tag name.
    - document.querySelector(): Selects the first element that matches a specified CSS selector.
    - document.querySelectorAll(): Selects all elements that match a specified CSS selector.

*/
let emptydiv = document.getElementById("js-testing");
// console.log(emptydiv);
emptydiv.textContent = "This text was added using JavaScript!"; // changing the text content of the div element
emptydiv.style.color = "blue"; // changing the text color of the div element
emptydiv.style.fontSize = "20px";

let emptyParagraph = document.getElementsByClassName("testing-paragraph");
// console.log(emptyParagraph[0]);
emptyParagraph[0].textContent = "This is the first paragraph.";
emptyParagraph[0].style.color = "red";
emptyParagraph[1].textContent = "This is the second paragraph.";
emptyParagraph[2].textContent = "This is the third paragraph.";
emptyParagraph[3].textContent = "This is the fourth paragraph.";
emptyParagraph[4].textContent = "This is the fifth paragraph.";

let emptyTag = document.getElementsByTagName("img");
emptyTag[0].src = "https://www.w3schools.com/images/w3schools_green.jpg";
emptyTag[0].alt = "W3Schools Logo";
emptyTag[0].style.width = "200px";
emptyTag[0].style.height = "auto";

// emptyTag[1].src = "https://www.w3schools.com/images/w3schools_green.jpg";
// emptyTag[1].alt = "W3Schools Logo";
// emptyTag[1].style.width = "200px";
// emptyTag[1].style.height = "auto";

const firstSelector = document.querySelectorAll(".testing-paragraph");

firstSelector.forEach((element) => {
  element.style.fontStyle = "italic";
  element.style.textDecoration = "underline";
  element.style.textDecorationColor = "blue";
});


//CHANGING CONTENT AND ATTRIBUTES OF AN ELEMENT
/*
  - textContent: Changes the text content of an element.
  - innerHTML: Changes the HTML content of an element.
  - setAttribute(): Changes the value of an attribute of an element.
  - style: Changes the CSS styles of an element.
*/
emptydiv.textContent = "This text was added using JavaScript!"; // changing the text content of the div element
emptydiv.style.color = "blue"; // changing the text color of the div element
emptydiv.style.fontSize = "20px";

emptydiv.innerHTML = "<strong>This text is now bold!</strong>"; // changing the HTML content of the div element

// emptyTag[1].setAttribute("src", "https://www.w3schools.com/images/w3schools_green.jpg"); // changing the src attribute of the second image element
// emptyTag[1].setAttribute("alt", "W3Schools Logo"); // changing the alt attribute of the second image element
// emptyTag[1].style.width = "500px"; // changing the width of the second image element

//--------------------CREATING AND REMOVING ELEMENTS IN JAVASCRIPT----------------------
/*
  - createElement(): Creates a new element.
  - appendChild(): Adds a new child element to a parent element.
  - removeChild(): Removes a child element from a parent element.
  - insertBefore(): Inserts a new element before a specified existing element.
  - replaceChild(): Replaces an existing child element with a new element.
*/

const addedDiv = document.createElement("div"); // creating a new div element
addedDiv.textContent = "This is a new div element added using JavaScript!"; // setting the text content of the new div element
addedDiv.style.color = "green";
addedDiv.style.fontSize = "18px";
addedDiv.style.borderRadius = "10px";
addedDiv.style.border = "2px solid green";
addedDiv.style.padding = "10px";
addedDiv.style.backgroundColor = "#00eeff";
document.body.appendChild(addedDiv); // adding the new div element to the body of the document

const newParagraph = document.createElement("p"); // creating a new paragraph element
newParagraph.textContent = "This is a new paragraph added using JavaScript!";
newParagraph.style.color = "purple";
newParagraph.style.fontSize = "16px";
newParagraph.style.fontStyle = "italic";
newParagraph.style.textDecoration = "underline";
newParagraph.style.textDecorationColor = "purple";
addedDiv.appendChild(newParagraph); // adding the new paragraph element as a child of the new div element

// document.body.removeChild(emptyParagraph[0]);
const anotherParagraph = document.createElement("p");
anotherParagraph.textContent =
  "This is another new paragraph added using JavaScript!";
anotherParagraph.style.color = "red";
anotherParagraph.style.fontSize = "14px";
// addedDiv.insertBefore(anotherParagraph, newParagraph); // inserting the new paragraph before the existing new paragraph in the div element
addedDiv.replaceChild(anotherParagraph, newParagraph); // inserting the new paragraph before the existing new paragraph in the div element
