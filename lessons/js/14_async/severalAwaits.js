// https://codeburst.io/javascript-es-2017-learn-async-await-by-example-48acc58bad65
// rewriting trash code

function doubleAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 1000);
  });
}

async function sumShit() {
  const values = await Promise.all([
    doubleAfter2Seconds(10),
    doubleAfter2Seconds(20),
    doubleAfter2Seconds(30),
  ]);

  let sum = 0;

  values.forEach((value) => {
    sum += value;
  })

  return sum;
}

sumShit().then(res => console.log(res));
