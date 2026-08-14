// ----------------------------------------------------------------------------
// --------------------------------CLASSWORK-----------------------------------
// ----------------------------------------------------------------------------

/*
1.

let students ={ name: "Alice", age: 21 },

add a department and faculty property to the object
delete the age property
modify the name,


2.
----Student Management Mini App---

Create an array of student objects (at least 3 students, each with name, age, score).

Write code to:

Print names of all students

Find the student with the highest score

Filter students who scored above 50

*/

let studentsArr = [
  { name: "john", age: 44, score: 89 },
  { name: "frank", age: 94, score: 30 },
  { name: "kelly", age: 53, score: 60 },
];

let highestScore = studentsArr[0];

for (let i = 0; i <= studentsArr.length; i++) {
  if (studentsArr[i]?.score > highestScore.score) {
    highestScore = studentsArr[i];
  }
}

console.log(highestScore);

