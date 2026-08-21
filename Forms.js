const formElement = document.getElementById("form-event");

const regexPasswordValidator =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");
const fullNameInput = document.getElementById("fullname");
const phoneInput = document.getElementById("phone");

formElement.addEventListener("submit", (e) => {
  const emailField = emailInput.value;
  const fullnameField = fullNameInput.value;
  const phoneField = phoneInput.value;
  const passwordField = passwordInput.value;

  e.preventDefault();

  if (phoneField.length < 10) {
    alert("our phone field is not up to 10 value");
    return;
  }

  if (fullnameField.length < 5) {
    alert("Fullname must be up to 5 character");
    return;
  }

  if (!regexPasswordValidator.test(passwordField)) {
    alert(
      "Password must be at least 8 characters long, include an uppercase letter, a number, and a special character",
    );
    return;
  }
  const formMessage = document.createElement("p");
  formMessage.textContent = `Form submitted! Name: ${fullnameField}, Email: ${emailField}`;
  formMessage.style.backgroundColor = "#28a745";
  formMessage.style.color = "white";
  formMessage.style.padding = "10px";
  formMessage.style.borderRadius = "10px";
  formMessage.style.marginTop = "20px";
  
  const backendData = {
    name: fullnameField,
    email: emailField,
    password: passwordField,
  };
  // const formMessageContainer = document.getElementById("form-message");

  formElement.appendChild(formMessage);
  alert("Submitted to backend successfully");
});

//formik & yup | joi | zod

// formElement.addEventListener("submit", (event) => {
//   event.preventDefault(); // Prevents the default form submission behavior

//   const nameInput = document.getElementById("name");
//   const emailInput = document.getElementById("email");
//   const passwordInput = document.getElementById("password");
//   const errorMsg = document.getElementById("error-text");
//   const regexPasswordValidator =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

//   const name = nameInput.value.trim();
//   const email = emailInput.value.trim();
//   const password = passwordInput.value.trim();

//   if (!name || !email || !password) {
//     errorMsg.textContent = "Please fill in all input";
//     return;
//   }

//   if (!regexPasswordValidator.test(password)) {
//     errorMsg.textContent =
//       "Password must be at least 8 characters long, include an uppercase letter, a number, and a special character";
//     return;
//   }

//   const formMessage = document.createElement("p");
//   formMessage.textContent = `Form submitted! Name: ${name}, Email: ${email}`;
//   formMessage.style.backgroundColor = "#28a745";
//   formMessage.style.color = "white";
//   formMessage.style.padding = "10px";
//   formMessage.style.borderRadius = "10px";
//   formMessage.style.marginTop = "20px";

//   // const formMessageContainer = document.getElementById("form-message");

//   formElement.appendChild(formMessage);

//   // Clear the form inputs
//   nameInput.value = "";
//   emailInput.value = "";
//   passwordInput.value = "";
// });

//form events to listen for
/*
- submit
- focus & blur
- change 
*/
// const passwordInput = document.getElementById("password");
// const showPasswordBtn = document.getElementById("show-password");
// let isShowPassword = false;

// showPasswordBtn.addEventListener("click", () => {
//   isShowPassword = !isShowPassword;
//   if (isShowPassword) {
//     passwordInput.setAttribute("type", "text");
//     formElement.classList.add("form-event");
//   } else {
//     passwordInput.setAttribute("type", "password");
//   }
// });

let toggleState = false;

const togglePassword = () => {
  toggleState = !toggleState;

  toggleState
    ? (passwordInput.type = "text")
    : (passwordInput.type = "password");
};
