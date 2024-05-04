"use strict";
console.log("JS Started");

const redp = document.createElement("p");
redp.style.color = "red";
redp.textContent = "Hey I'm red!"
document.body.appendChild(redp);

const blueh3 = document.createElement("h3");
blueh3.style.color = "blue";
blueh3.textContent = "I'm a blue h3!";
document.body.appendChild(blueh3);

const pinkdiv = document.createElement("div");
pinkdiv.style.border = "solid black";
pinkdiv.style.backgroundColor = "pink";
pinkdiv.style.width = "100%";
pinkdiv.style.height = "10rem";
document.body.appendChild(pinkdiv);

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
pinkdiv.appendChild(h1);

const otherp = document.createElement("p");
otherp.textContent = "ME TOO!";
pinkdiv.appendChild(otherp);
