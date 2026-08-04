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

SI(500000, 25, 4);

const AOR = (L, B) => {
  const result = L * B;
  alert(`The area of a rectangle is: ${result}`);
};


AOR(60, 40)