// Write a program to check that the number given by the user is a prime number or not.

function isPrime(num) {
    let isPrime = true;
    if (num <= 1) {
        console.log(num + " is not a prime number.");
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
      
    }
    return isPrime;
}

function check(num, isPrime){
    if (isPrime) {
        console.log(num + " is a prime number.");
    } else {
        console.log(num + " is not a prime number.");
    }
}

let num = 12;
let primeCheck = isPrime(num);
check(num, primeCheck);

let num1 = 2;
let primeCheck1 = isPrime(num1);
check(num1, primeCheck1);

let num2 = 7;
let primeCheck2 = isPrime(num2);
check(num2, primeCheck2);

let num3 = 17;
let primeCheck3 = isPrime(num3);
check(num3, primeCheck3);

