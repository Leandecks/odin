"use strict";

// Constructors

function User (name, age) {
  this.name = name;
  this.age = age;
}

function Admin (name, age, job) {
  User.call(this, name, age);
  this.job = job;
}

function Guest (name, age, children) {
  User.call(this, name, age);
  this.children = children;
}

// Prototypes

Object.setPrototypeOf(Admin.prototype, User.prototype);
Object.setPrototypeOf(Guest.prototype, User.prototype);

User.prototype.info = function () {
  return `${this.name} is ${this.age}`
}

Admin.prototype.doMaths = function () {
  return 1+1;
}

Guest.prototype.sayHello = function () {
  return "Hello, I am " + this.name;
}

// Users

const user1 = new Admin("John", 33);
const user2 = new Guest("Peter", 40);

// Do stuff

console.log(user1.info());
console.log(user1.doMaths());
console.log(user2.sayHello());
console.log();

// Loop

for (let i in user2) {
  console.log(i);
}