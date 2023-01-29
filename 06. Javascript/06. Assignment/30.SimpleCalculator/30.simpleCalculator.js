// Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

const performCalculation = (operator, num1, num2) => {
    switch (operator) {
        case '+':
            return calculator.add(num1, num2);
        case '-':
            return calculator.subtract(num1, num2);
        case '*':
            return calculator.multiply(num1, num2);
        case '/':
            return calculator.divide(num1, num2);
        default:
            console.log('Invalid operator.');
            return NaN;
    }
};

let calculation = performCalculation('+', 20, 10);
console.log(`sum of 20 and 10 (+) is: ${calculation}`);

let calculation1 = performCalculation('-', 20, 10);
console.log(`Subtracting 10 from 20 (-) is: ${calculation1}`);

let calculation2 = performCalculation('*', 20, 10);
console.log(`Multiplying 20 and 10 (*) is: ${calculation2}`);

let calculation3 = performCalculation('/', 20, 10);
console.log(`Dividing 20 by 10 (/) is: ${calculation3}`);

let calculation4 = performCalculation('%', 20, 10);
console.log(`Remainder 20 by 10 (%) is: ${calculation4}`);



