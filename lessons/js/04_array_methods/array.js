"use strict";

/* 
.filter()
.sort()
.reduce()
.map()
*/

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let lengths = ["Bilbo", "Gandalf", "Nazgul"];

const numbers = [1, 4, 9, 16];

const illuminati = [
  { name: "Angelina Jolie", member: true },
  { name: "Eric Jones", member: false },
  { name: "Paris Hilton", member: true },
  { name: "Kayne West", member: false },
  { name: "Bob Ziroll", member: true }
];

const morePeople = [
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 }
];

const evenMorePeople = [
  {
      name: "Angelina Jolie",
      age: 80
  },
  {
      name: "Eric Jones",
      age: 2
  },
  {
      name: "Paris Hilton",
      age: 5
  },
  {
      name: "Kayne West",
      age: 16
  },
  {
      name: "Bob Ziroll",
      age: 100
  }
]

const susArray = ["dog", "wolf", "by", "family", "eaten"];

////////////////////////////////////////////////////////////////////////////////////////////
// array.filter()
////////////////////////////////////////////////////////////////////////////////////////////
/* 
const bPeople = inventors.filter(inventor => inventor.first[0] === "A");

// console.table(bPeople);

const smallerThree = users.filter(user => user.id < 3);
// console.table(smallerThree);

// Filter the list of inventors for those who were born in the 1500

const fifteen = inventors.filter(inventor => inventor.year.toString().slice(0,2) === "15");
// console.table(fifteen);

const greaterFive = numbers.filter(number => number >= 5);
// console.table(greaterFive);(

const areIlluminati = illuminati.filter(person => person.member);
// console.table(areIlluminati);

const overEighteen = morePeople.filter(person => person.age >= 18);
console.table(overEighteen);
 */


////////////////////////////////////////////////////////////////////////////////////////////
// array.map()
////////////////////////////////////////////////////////////////////////////////////////////
/* 
const length = lengths.map(character => character.length);
// console.table(length);

const firstName = people.map((person) => {
  const [first] = person.split(", "); // [first, last]
  return first;
});
// console.table(firstName);

const squared = numbers.map(number => number*number);
// console.table(squared);

// Give us an array of the inventors first and last names
const fullName = inventors.map(inventor => inventor.first + " " + inventor.last);
// console.table(fullName);

const readyForDOM = evenMorePeople.map(person => `<h1>${person.name}</h1><h2>${person.age}</h2>`)
console.table(readyForDOM);
 */


////////////////////////////////////////////////////////////////////////////////////////////
// array.sort()
////////////////////////////////////////////////////////////////////////////////////////////
/* 
const sortedNumbers = numbers.sort((a,b) => b-a);
// console.log(sortedNumbers);

// Sort the inventors by birthdate, oldest to youngest
const oldToYoung = inventors.sort((a,b) => a.year - b.year);
// const oldToYoung = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
// console.table(oldToYoung);

const lengthSorting = susArray.sort((a,b) => a.length - b.length);
console.table(lengthSorting);
 */


////////////////////////////////////////////////////////////////////////////////////////////
// array.reduce()
////////////////////////////////////////////////////////////////////////////////////////////
/* 
const integers = [1,2,3,4,5];

const integerSum = integers.reduce((tot, curr) => curr + tot, 0);
// console.log(integerSum);

// How many years did all the inventors live all together?

const totalLife = inventors.reduce((acc, curr) => acc + (curr.passed - curr.year), 0);
console.log(totalLife);
 */

////////////////////////////////////////////////////////////////////////////////////////////
// Cumulative exercises
////////////////////////////////////////////////////////////////////////////////////////////

// 5. Sort the inventors by years lived

const oldest = inventors.sort((a,b) => (b.passed - b.year) - (a.passed - a.year));
// console.table(oldest);

// Sort the people alphabetically by last name

const alphabetically = people.sort((a,b) => {
  let [aFirst, aLast] = a.split(", ");
  let [bFirst, bLast] = b.split(", ");

  return aLast > bLast ? 1 : -1;
});

// console.table(alphabetically);

// Sum up the instances of all of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const instancesSum = data.reduce((acc, curr) => {
  if (!acc[curr]) {
    acc[curr] = 0;
  }

  acc[curr] ++;
  return acc;
}, {});

console.table(instancesSum);
