function isEven(element) {
    if (element % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(`${2} is even: ${isEven(2)}`);

// another alternative 

function isEven(element) {
    return element % 2 === 0;
}
console.log(`${5} is even: ${isEven(5)}`);

// arrow function

var isEven = (element) =>{
    return element % 2 === 0;
}
console.log(`${12} is even: ${isEven(12)}`);

var result = [2, 4, 6, 8, 10].every(isEven);
console.log(result);

// callback funtion 

var result = [2, 3, 5, 8, 10].every((e) => (e%2===0));
console.log(result);
