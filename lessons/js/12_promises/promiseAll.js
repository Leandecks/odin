const promise1 = new Promise((resolve) => {
    resolve(1);
})

const promise2 = new Promise((resolve) => {
    resolve(2);
})

const promise3 = new Promise((resolve) => {
    resolve(3);
})

// All messages: the promises are processed when all are resolved

Promise.all([
    promise1,
    promise2,
    promise3,
]).then((messages) => {
    console.log(messages); // [1, 2, 3]
})