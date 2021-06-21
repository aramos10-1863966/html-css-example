'use strict';

// Changes sign in/create profile function in form

let signInElem = document.querySelector("button.signIn");
let createProfileElem = document.querySelector("button.createProfile");

signInElem.addEventListener("click", function() {
    signInElem.style.color = "black";
    createProfileElem.style.color = "lightgray"
    document.querySelector("input#firstName").hidden = true;
    document.querySelector("input#lastName").hidden = true;
    document.querySelector("input#passwordConfirmInput").hidden = true;
    document.querySelector("input#satScore").hidden = true;
    document.querySelector("input#actScore").hidden = true;
    document.querySelector("input#gpa").hidden = true;
    document.querySelector("input#passwordInput").placeholder = "Enter your Password";
    document.querySelector(".forgotPassword").hidden = false;
})

createProfileElem.addEventListener("click", function() {
    createProfileElem.style.color = "black";
    signInElem.style.color = "lightgray";
    document.querySelector("input#firstName").hidden = false;
    document.querySelector("input#lastName").hidden = false;
    document.querySelector("input#passwordConfirmInput").hidden = false;
    document.querySelector("input#satScore").hidden = false;
    document.querySelector("input#actScore").hidden = false;
    document.querySelector("input#gpa").hidden = false;
    document.querySelector("input#passwordInput").placeholder = "Create Password";
    document.querySelector(".forgotPassword").hidden = true;
})

let formElem = document.querySelector("form");

formElem.addEventListener("submit", function (event) {
  event.preventDefault();
  let valid = formElem.checkValidity();
  if (valid) {
    formElem.classList.add("d-none");
    document.querySelector("p.alert").remove("d-none");
  } else {
    formElem.classList.add("was-validated");
    document.querySelector("button").disabled = true;
  }
})

function validatePasswordMatch() {
  let passwordElem = document.querySelector("input#passwordInput");
  let passwordConfirmElem = document.querySelector("input#passwordConfirmInput");
  if (passwordElem.value != passwordConfirmElem.value) {
    passwordConfirmElem.setCustomValidity("Passwords do not match");
    document.querySelector("#passwordConfirmFeedback").textContent = "Passwords do not match";
  } else {
    passwordConfirmElem.setCustomValidity("");
    document.querySelector("#passwordConfirmFeedback").textContent = "";
  }
}

let passwordElem = document.querySelector("input#passwordInput");
let passwordConfirmElem = document.querySelector("input#passwordConfirmInput");
passwordElem.addEventListener("input", validatePasswordMatch);
passwordConfirmElem.addEventListener("input", validatePasswordMatch);


const hamburger = document.getElementById("hamburger-menu");
const navUL = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
})