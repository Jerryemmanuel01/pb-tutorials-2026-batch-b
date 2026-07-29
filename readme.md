
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
