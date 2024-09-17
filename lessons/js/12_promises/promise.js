// Promise (always asynchronous)

const promise = new Promise((resolve, reject) => {
    const bool = false;
    if (bool) {
        resolve(bool);
    } else {
        reject(bool);
    }
});

promise.then((msg) => {
    console.log(`asynchronous: ${msg}`);
}).catch((err) => {
    console.log(`asynchronous: ${err}`);
});

// Asynchronous function (with callback) + not asynchronous code

function asynchronous() {
    setTimeout(() => {
        console.log("asynchronous: 1000 timeout");
    }, 1000);
}

asynchronous();
console.log("not asynchronous");

// Asynchronous function (with promise)

function asyncPromise() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("working"), 2000); // Just resolve() won't work cuz it returns void
    })
}

asyncPromise().then((msg) => console.log("asynchronous 2000 " + msg));

// Asynchronous function (with promise) 2.0

function myPromise() {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.5) {
            resolve("working");
        } else {
            reject("not working");
        }
    })
}

myPromise().then((msg) => {
    console.log(msg)
}).catch((err) => {
    console.log(err);
})