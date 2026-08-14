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
// getiing element by ID
const fristParagraph = document.getElementById("firstParagraph");

console.log(fristParagraph);
fristParagraph.textContent = "I have made some changes to this paragraph";
// fristParagraph.style.fontSize = '12px'

// getiing element by ClassName

const divClass = document.getElementsByClassName("divClass");

// console.log(divClass);

divClass[0].textContent = "I just added this text from JavaScript";

divClass[0].style.color = "Red";
divClass[0].style.fontFamily = "Arial";

divClass[1].innerHTML =
  "<span>This is a span written with innerHTML <br /> This is a new line of code broken with the break tag </span>";

// getiing element by TagName

const divTags = document.getElementsByTagName("div");

console.log(divTags);

// getiing element by querySelector
const singleQuerySelector = document.querySelector(".mySec");

console.log(singleQuerySelector);

// getiing element by querySelectorAll


const multipleQuerySelector = document.querySelectorAll(".mySec");

console.log(multipleQuerySelector);











// let emptydiv = document.getElementById("js-testing");
// // console.log(emptydiv);
// emptydiv.textContent = "This text was added using JavaScript!"; // changing the text content of the div element
// emptydiv.style.color = "blue"; // changing the text color of the div element
// emptydiv.style.fontSize = "20px";

// let emptyParagraph = document.getElementsByClassName("testing-paragraph");
// // console.log(emptyParagraph[0]);
// emptyParagraph[0].textContent = "This is the first paragraph.";
// emptyParagraph[0].style.color = "red";
// emptyParagraph[1].textContent = "This is the second paragraph.";
// emptyParagraph[2].textContent = "This is the third paragraph.";
// emptyParagraph[3].textContent = "This is the fourth paragraph.";
// emptyParagraph[4].textContent = "This is the fifth paragraph.";

let emptyTag = document.getElementsByTagName("img");
emptyTag[0].src = "https://www.w3schools.com/images/w3schools_green.jpg";
emptyTag[0].alt = "W3Schools Logo";
emptyTag[0].style.width = "200px";
emptyTag[0].style.height = "auto";

// // emptyTag[1].src = "https://www.w3schools.com/images/w3schools_green.jpg";
// // emptyTag[1].alt = "W3Schools Logo";
// // emptyTag[1].style.width = "200px";
// // emptyTag[1].style.height = "auto";

const firstSelector = document.querySelectorAll(".divClass");

firstSelector.forEach((element) => {
  element.style.fontStyle = "italic";
  element.style.textDecoration = "underline";
  element.style.textDecorationColor = "blue";
  element.textContent="This was just added"
});



//--------------------CREATING AND REMOVING ELEMENTS IN JAVASCRIPT----------------------
/*
  - createElement(): Creates a new element.
  - appendChild(): Adds a new child element to a parent element.
  - removeChild(): Removes a child element from a parent element.
  - insertBefore(): Inserts a new element before a specified existing element.
  - replace Child(): Replaces an existing child element with a new element.
*/

const addedDiv = document.createElement("div"); // creating a new div element
addedDiv.textContent = "This is a new div element added using JavaScript!"; // setting the text content of the new div element
addedDiv.style.color = "green";
addedDiv.style.fontSize = "18px";
addedDiv.style.borderRadius = "10px";
addedDiv.style.border = "2px solid green";
addedDiv.style.padding = "10px";
addedDiv.style.backgroundColor = "#fbc410";
document.body.appendChild(addedDiv); // adding the new div element to the body of the document

const newParagraph = document.createElement("p"); // creating a new paragraph element
newParagraph.textContent = "This is a new paragraph added using JavaScript!";
newParagraph.style.color = "purple";
newParagraph.style.fontSize = "16px";
newParagraph.style.fontStyle = "italic";
newParagraph.style.textDecoration = "underline";
newParagraph.style.textDecorationColor = "purple";
addedDiv.appendChild(newParagraph); // adding the new paragraph element as a child of the new div element

document.body.removeChild(emptyTag[0]);


const anotherParagraph = document.createElement("p");
anotherParagraph.textContent =
  "This is another new paragraph added using JavaScript!";
anotherParagraph.style.color = "red";
anotherParagraph.style.fontSize = "14px";

// addedDiv.insertBefore(anotherParagraph, newParagraph); // inserting the new paragraph before the existing new paragraph in the div element
addedDiv.replaceChild(anotherParagraph, newParagraph); // inserting the new paragraph before the existing new paragraph in the div element


/*

*/