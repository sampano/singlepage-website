// "use strict";

// navbar variables

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");
const userLogin = document.getElementById("user-login");
const userRegister = document.getElementById("user-register");
const userFormBackground = document.getElementById("user-form-background");
const container = document.querySelector(".user-container");
const signUp = document.querySelector(".signup-link");
const logIn = document.querySelector(".login-link");
const closeIcon = document.getElementById("close-icon");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("active");
});

const showUserForms = () => {
  document.getElementById("user-container").style.visibility = "visible";
  userFormBackground.style.visibility = "visible";
  // .style.visibility
};

const showLoginForm = () => {
  container.classList.remove("active");
  header.classList.remove("active");
  showUserForms();
};

const showRegistrationForm = () => {
  container.classList.add("active");
  header.classList.remove("active");
  showUserForms();
};

const closeUserForms = () => {
  document.getElementById("user-container").style.visibility = "hidden";
  userFormBackground.style.visibility = "hidden";
};

signUp.addEventListener("click", () => {
  container.classList.add("active");
});

logIn.addEventListener("click", () => {
  container.classList.remove("active");
});

userLogin.addEventListener("click", showLoginForm);

userRegister.addEventListener("click", showRegistrationForm);

userFormBackground.addEventListener("click", closeUserForms);

closeIcon.addEventListener("click", closeUserForms);
