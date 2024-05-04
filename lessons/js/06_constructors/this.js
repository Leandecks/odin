"use strict";

// Solution 1 by me

const user = {
  firstName: "Patrick",
  lastName: "Scott",
  hobbies: ["programming", "piano"],
  listHobbies: function () {
    this.hobbies.forEach((hobby) => { // don't use function() {}
      console.log(this.firstName);
      console.log(hobby);
    });
  }
}

user.listHobbies();

console.log();

// Solution 2 by DevSage

const guy = {
  firstName: "Patrick",
  lastName: "Scott",
  hobbies: ["programming", "piano"],
  listHobbies: function () {
    this.hobbies.forEach(function (hobby) {
      console.log(this.firstName);
      console.log(hobby);
    }, this); // this references to user as it is being called from listHobbies()
  }
}

guy.listHobbies();