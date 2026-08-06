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

function simpleInterest(P, R, T) {
  let result = (P * R * T) / 100;
  alert(`This is the result: ${result}`);
}

// simpleInterest(20, 2, 5)

// simpleInterest(5000, 25, 4)

const SI = function (P, R, T) {
  let result = (P * R * T) / 100;
  alert(`This is the result: ${result}`);
};

// SI(500000, 25, 4);

const AOR = (L, B) => {
  const result = L * B;
  alert(`The area of a rectangle is: ${result}`);
};
// AOR(60, 40);

// Function examples
const quadraticEqu = (a, b, c) => {
  const positiveResult = (-b + (b ** 2 - 4 * a * c) ** 0.5) / (2 * a);

  const nagetiveResult = (-b - (b ** 2 - 4 * a * c) ** 0.5) / (2 * a);

  alert(
    `the positive result is: ${positiveResult}\nWhile the nagative result is: ${nagetiveResult}`,
  );
};

// quadraticEqu(1, 7, 12);

const AOT = function (a, b) {
  const result = (a * b) / 2;

  alert("The area of a triange is: " + result);
};

// AOT(5, 25);

// // a callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. It allows you to handle asynchronous operations and execute code after a certain event has occurred.
// // Example of a callback function
function fetchData(A, B) {
  setTimeout(() => {
    // const data = "Data fetched from the server";
    // alert(data); // calling the callback function with the fetched data
    AOT(A, B);
  }, 2000); // simulating a delay of 2 seconds
}

// fetchData(5, 25);

// setTimeout(() => {
//   alert("This message is being displayed after 5sec")
// }, 5000);

// setTimeout(() => {
  
// }, timeout);

