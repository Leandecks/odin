"use strict";

function* Generator() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = Generator();
console.log(generator.next());
console.log([...generator]);