// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.

// We can check if a number is even or odd in JavaScript by using the modulus operator (%). The modulus operator returns the remainder when one number is divided by another.

// Here's a program that checks if a given number is even or odd:

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Test the function

console.log(`1 is even: ${isEven(1)}`); // true
console.log(`2 is even: ${isEven(2)}`); // false

// Another way to write this function is :

function isEven1(num) {
  return num % 2 === 0;
}

console.log(`3 is even: ${isEven1(3)}`); // true
console.log(`4 is even: ${isEven1(4)}`); // false

// or

const isEven2 = num => num % 2 === 0;

console.log(`5 is even: ${isEven2(5)}`); // true
console.log(`6 is even: ${isEven2(6)}`); // false
