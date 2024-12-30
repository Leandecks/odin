async function fuck() {
  // setTimeout(() => {
  //   return "cool";
  // }, 1000)
  return "cool";
}

// COMMENTED OUT CODE DOESN'T WORK, FUCK() RETURNS A PROMISE RIGHT AWAY, IT DOESN'T WAIT FOR SETTIMEOUT TO FINISH
// USE CODE IN ASYNC1.JS IN THAT CASE

fuck().then(string => {
  console.log(string);
});

async function getFuck() {
  console.log(await fuck());
}

getFuck();
