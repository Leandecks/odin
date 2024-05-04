"use strict";

let i = parseInt(prompt("Enter a number: "));

for (let k = 1; k <= i; k++) {
  if (k % 3 === 0 && k % 5 === 0) {
    console.log("FizzBuzz")
  } else if (k % 3 === 0) {
    console.log("Fizz");
  } else if (k % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(k)
  }
}