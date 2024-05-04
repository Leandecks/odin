"use strict";

// Constructors

/* function MyObject (data) {
  this.data = data;
}

MyObject.prototype.getData = function () {
  return this.data;
}

const o = new MyObject("data");

console.log(o.getData()); */

// Factories

function MyObject (data) {
  return { data };
}

const o = MyObject("cool data");

console.log(o.data);

// Factory 2
// Factory function for creating counter functions

function MakeCounter () {
  let counter = 0;

  const increase = () => ++ counter;
  const getCounter = () => counter;

  return { increase, getCounter };
}

const myCounter = MakeCounter(); // own new counter

myCounter.increase();
myCounter.increase();
myCounter.increase();
myCounter.increase();
console.log(myCounter.getCounter());

// Module
// Module: counter

const Counter = (function () {
  let counter = 0;

  const increase = () => ++ counter;
  const getCounter = () => counter;

  return { increase, getCounter };
})();

Counter.increase(); // use module
Counter.increase();
Counter.increase();
console.log(Counter.getCounter());

// Oooooof way

let counter = 0;
function increaseIt () {
  return ++ counter;
}

increaseIt();
console.log(counter);