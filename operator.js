//------------------------------- Operators in JavaScript -----------------------------

/*
JavaScript has several types of operators:
1. Arithmetic Operators:
   - Addition (+), Subtraction (-), Multiplication (*), Division (/), Modulus (%)
2. Assignment Operators:
   - Assignment (=), Addition assignment (+=), Subtraction assignment (-=)
   addition assignment (+=) is used to add a value to a variable and assign the result back to the variable, e.g.,
        let x = 10;
        x += 5; // equivalent to x = x + 5; now x is 15
3. Comparison Operators:
   - Equal (==), Strict equal (===), Not equal (!=), Greater than (>
), Less than (<), Greater than or equal (>=), Less than or equal (<=)
4. Logical Operators:
    - AND (&&), OR (||), NOT (!)
    AND (&&) operator returns true if both operands are true, e.g.,
        let a = true;
        let b = true;
        console.log(a && b); // Output: true
    OR (||) operator returns true if at least one of the operands is true, e.g.,
        let a = true;
        let b = false;
        console.log(a || b); // Output: true
    NOT (!) operator returns the opposite boolean value of the operand, e.g.,
        let a = true;
        console.log(!a); // Output: false
5. Conditional (Ternary) Operator:
    - condition ? expressionIfTrue : expressionIfFalse

7. Type Operators:
    - typeof, instanceof
    typeof operator returns a string indicating the type of the operand, e.g.,
        let x = 42;
        console.log(typeof x); // Output: "number"
    instanceof operator checks if an object is an instance of a specific class or constructor function, e.g.,
        let arr = [1, 2, 3];
        console.log(arr instanceof Array); // Output: true

8. Spread Operator:
   - Used to expand an iterable (like an array) into its elements, e.g.,
        let arr = [1, 2, 3];
        let newArr = [...arr, 4, 5]; // newArr will be [1, 2, 3, 4, 5]
9. Rest Operator:
   - Used to collect multiple elements into an array, e.g.,
        function sum(...args) {
          return args.reduce((acc, curr) => acc + curr, 0);
        }
        console.log(sum(1, 2, 3)); // Output: 6
10. Optional Chaining Operator:
   - Allows you to safely access deeply nested properties without having to check each level, e.g
        let user = { profile: { name: "John", email: "johnDoe@gmail.com" } };
        console.log(user.profile?.name); // Output: John
        console.log(user.address?.city); // Output:  (no error thrown)

*/
// console.log(20%3)

// let J = 20
// console.log(J);

// J = 30 + J
// console.log(J);
// J += 30

// J = 30 - J

// J -=30

// 20-30

// console.log(J);

// console.log(4 !== 3)

// console.log(4 >= 4);

// let a = true;
// let b = false;
// console.log(!a);

// let userInput = Number(prompt("Enter a number"));

// alert(userInput >= 30 ? "You are old enough" : "you not old enough");

// let r = "john"

// console.log(typeof(r));

// let spreadArr = ["A", "B", 6, true, "E"];

// console.log(spreadArr);

// let newSpread = [...spreadArr, "F", "G", "H"];

// console.log(newSpread);

let user = {
  profile: {
    name: "John",
    email: "johnDoe@gmail.com",
  },
};
console.log(user.profile?.name); // Output: John
console.log(user.address?.email); // Output:  (no error thrown)
