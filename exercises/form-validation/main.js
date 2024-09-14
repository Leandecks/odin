import "../index.html";
import "../css/style.css";
import { COUNTRIES } from "./countries";

const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");
const EVENTS = ["input", "paste", "change", "cut", "keypress", "keydown"];

function setValidity(display, isValid = true, message) {
  if (isValid) {
    display.textContent = "This is correct";
    display.style.backgroundColor = "green";
  } else {
    display.textContent = message;
    display.style.backgroundColor = "red";
  }
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function validateForm(input, display) {
  switch (input.id) {
    case "email":
      if (input.validity.typeMismatch) {
        setValidity(display, false, "Please enter a valid email adress");
      } else if (input.validity.valueMissing) {
        setValidity(display, false, "Please enter something");
      } else {
        setValidity(display);
      }
      break;

    case "country":
      if (!COUNTRIES.includes(capitalize(input.value))) {
        setValidity(display, false, "Please enter a real country");
        input.setCustomValidity("Invalid field");
      } else if (input.validity.valueMissing) {
        setValidity(display, false, "Please enter something");
      } else {
        setValidity(display);
        input.setCustomValidity("");
      }
      break;

    case "zip":
      if (isNaN(input.value)) {
        setValidity(display, false, "This needs to be a number");
        input.setCustomValidity("Invalid field");
      } else if (input.value.toString().length !== 5) {
        setValidity(display, false, "Enter a valid ZIP code");
        input.setCustomValidity("Invalid field");
      } else {
        setValidity(display);
        input.setCustomValidity("");
      }
      break;

    case "password":
      if (input.validity.valueMissing) {
        setValidity(display, false, "Please enter something");
      } else if (input.value.length < 8) {
        setValidity(display, false, "Password needs to be eight chars long");
        input.setCustomValidity("Invalid field");
      } else {
        setValidity(display);
        input.setCustomValidity("");
      }
      break;

    case "confirm":
      if (input.value !== document.querySelector("#password").value) {
        setValidity(display, false, "The passwords do not match");
        input.setCustomValidity("Invalid field");
      } else {
        setValidity(display);
        input.setCustomValidity("");
      }
      break;
  }
}

EVENTS.forEach((event) => {
  [...inputs].forEach((input) => {
    input.addEventListener(event, () => {
      const display = document.querySelector(
        `.display.${CSS.escape(input.id)}`
      );

      validateForm(input, display);
    });
  });
});

form.addEventListener("submit", (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
  }
});
