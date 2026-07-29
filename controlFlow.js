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

//---------PROMPTS AND ALERTS-----------------
/*
- PROMTS- we use them to gather input from the user
- ALERTS- we user them to display outputs to the user
let userInput = prompt("Enter your name");
let numInput = Number(userInput)
console.log(typeof(numInput));

alert("We use this to display outputs, the user input is: "+ userInput)
*/

// let userInput = Number(prompt("Enter your age"));
// if (userInput > 50) {
//   alert(`your age is  ${userInput}`);
// } else if (userInput > 30) {
//   alert(`your age is  ${userInput}, and this is under the second condition.`);
// } else{
//     alert("You either entered a wrong input or You are not up to age")
// }

// switch (userInput) {
//   case 18:
//     alert("Ade is exactly 18 years old.");
//     break;
//   case userInput < 18:
//     alert("Ade is a minor.");
//     break;
//   default:
//     alert("Ade is not 18 years old.");
// }

// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }
// let count = 0;
// while (count < 50) {
//   console.log(count);
//   count++;
// }

// do {
//     console.log(count);
//     count++
// } while (count < 50)


//-------------------GIT AND GITHUB --------------------
//Basic git commands
/*
- init = to initialize a new git repository
- add .
-commit -m ""
-push
-pull
-branch
-checkout
-clone

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Jerryemmanuel01/pb-tutorials-2026-batch-b.git
git push -u origin main
*/