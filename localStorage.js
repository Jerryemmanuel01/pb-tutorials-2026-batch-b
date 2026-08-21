//---------------------------------------------------------------------------------------------
//-------------------------------INTRODUCTION TO LOCAL STORAGE---------------------------------

//Local storage is a browser storage medium
//Local storage terminologies
/*
setItem() - setItem is used to set items into the local storage 
getItem() - getItem is used to get or retrieve stored items in the local storage
removeItem() - removeItem is used to remove a specific item from the local storage by providing the key of the item to be removed
clear() - clear is used to remove all items from the local storage
*/

const localStorageKey = "taskAppKey";

const taskForm = document.getElementById("taskform");
let taskInput = document.getElementById("task");
const submitBtn = document.getElementById("submitBtn");
const taskDiv = document.getElementById("taskDiv");

let taskArray = JSON.parse(localStorage.getItem(localStorageKey)) || [];
console.log(taskArray);
console.log(Date.now());

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let taskfield = taskInput.value;
  const newTaskObj = {
    task: taskfield,
    id: Date.now(),
  };

  const newTaskArray = [...taskArray, newTaskObj];

  taskArray = newTaskArray;
  console.log(newTaskArray);

  localStorage.setItem(localStorageKey, JSON.stringify(taskArray));

  const newTaskParagraph = document.createElement("p");
  newTaskParagraph.innerHTML = `<p>the new task is: ${newTaskObj.task} <button>Clear</button></p>`;
  taskDiv.appendChild(newTaskParagraph);
  taskInput.value = "";
});

taskArray?.forEach((val, i) => {
  const newTaskParagraph = document.createElement("p");
  newTaskParagraph.innerHTML = `<p>the new task is: ${val.task} <button>Clear</button></p>`;
  taskDiv.appendChild(newTaskParagraph);
});

const clearLocalStorageItems = () => {
  localStorage.clear();
  window.location.reload()
};

// let inputArray = localStorage.getItem("inputArray")
//   ? JSON.parse(localStorage.getItem("inputArray"))
//   : [];

// const formField = document.getElementById("form-field");
// const inputField = document.getElementById("input-field");
// const inputButton = document.getElementById("input-button");
// const deleteButton = document.getElementById("delete-button");
// const removeLastButton = document.getElementById("remove-last-button");

// formField.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const inputValue = inputField.value.trim();

//   if (inputValue) {
//     const newInputArray = [...inputArray, inputValue];
//     localStorage.setItem("inputArray", JSON.stringify(newInputArray));
//     inputArray = newInputArray;
//     alert("Input saved to local storage!");
//     inputField.value = "";
//   } else {
//     alert("Please enter a value before submitting.");
//   }
//   // if (inputValue) {
//   //   // localStorage.setItem("userInput", inputValue);
//   //   const newInputArray = [...inputArray, inputValue];
//   //   console.log(newInputArray);
//   //   inputArray = newInputArray;
//   //   // alert("Input saved to local storage!");
//   //   inputField.value = "";
//   // } else {
//   //   alert("Please enter a value before submitting.");
//   // }
// });

// deleteButton.addEventListener("click", () => {
//   localStorage.removeItem("inputArray");
//   inputArray = [];
//   alert("Local storage cleared!");
// });

// removeLastButton.addEventListener("click", () => {
//   if (inputArray.length > 0) {
//     inputArray.pop();
//     localStorage.setItem("inputArray", JSON.stringify(inputArray));
//     alert("Last input removed from local storage!");
//   } else {
//     alert("No inputs to remove!");
//   }
// });

// console.log(inputArray);

// const data = function name(params) {};

// console.log(Date.now());
// const postalInput = document.getElementById("postal-code");

// fetch(
//   `https://api.example.com/register?p=${postalInput.value}&key=92930923092u9ur`,
//   {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       email: "test@example.com",
//       password: "Password@123",
//     }),
//   },
// );
