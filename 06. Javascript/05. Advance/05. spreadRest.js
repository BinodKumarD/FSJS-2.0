var returnedValue = Math.max(2, 5, 8, 9, 10, 7, 6, 7);
console.log(`${returnedValue}`);

var myObj = {};

console.log(myObj);
Object.assign(myObj, { a: 1, b: 2, c: 3 }, { z: 9, y: 8, x: 7 });
console.log(myObj);

function sumOne(a, b) {
    return a + b;
}

var myA = [5, 4, 7];

console.log(sumOne(4, 6));
console.log(sumOne(...myA)); // spread operator

function sumTwo(a, b, ...args) {
    console.log(`sum of ${args}:`);
    let sum = 0;
    let multi = a*b;
    for (const arg of args) {
        sum += arg;
    }
    return [sum, multi];
}

console.log(sumTwo(...myA));
console.log(sumTwo(2, 3, 1, 1, 1, 1));
