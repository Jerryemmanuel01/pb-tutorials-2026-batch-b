//----------------------EVENTS IN JAVASCRIPT----------------------
/*
Events are actions or occurrences that happen in the system you are programming, which the system tells you about so your code can respond to them.
You can add event listeners to elements to execute code when an event occurs.

An event listerner is a procedure in JavaScript that waits for an event to occur. clicking a button, hovering over an image, or submitting a form.
It takes two main arguments - the event to listen for and the function to execute when the event occurs.

    - click: Triggered when an element is clicked.
    - mouseover: Triggered when the mouse pointer is moved over an element.
    - mouseout: Triggered when the mouse pointer is moved out of an element.
    - keydown: Triggered when a key is pressed down.
    - keyup: Triggered when a key is released.
    - submit: Triggered when a form is submitted.
    - change: Triggered when the value of an input element changes.
    - load: Triggered when the page has finished loading.
    - scroll: Triggered when the user scrolls the page.
*/

const clickButton = document.getElementById("myButton");
const eventDiv = document.getElementById("js-event");
const input = document.getElementById("search");

let inputHolder = "";

// clickButton.addEventListener("dblclick", () => {
//   eventDiv.textContent = "We are showing this because you clicked a button";
// });

let toggle = false;

// clickButton.addEventListener("click", () => {
//   toggle = !toggle;
//   // if(toggle === true){
//   //   eventDiv.textContent = "We are showing this because you clicked a button";
//   // } else{
//   //   eventDiv.textContent = ""
//   // }
//   toggle === true ? (eventDiv.textContent = "We are showing this because you clicked a button") : (eventDiv.textContent = "");
// });

// clickButton.addEventListener("click", function () {
//   alert("Button was clicked!");
// });

// let toggle = false;

input.addEventListener("input", (event) => {
  console.log(event.target.value);
  console.log(event.target.value);
  
});

// button2.addEventListener("submit",  (e) => {
//   if (e.key === "K") {
//     toggle = !toggle;
//     emptyTag[0].style.display = toggle ? "none" : "block";
// }});

// document.body.addEventListener("scroll", function () {
//   alert("You scrolled the page!");
//   console.log("You scrolled the page!");
// });

const alertEvent = () =>{
  alert("Showing this because you clicked a button")
}