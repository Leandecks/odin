"use strict";

function User (name) {
  this.name = name;
  console.log(this);
}

const leandecks = new User("Leandecks")
const john = new User("John")