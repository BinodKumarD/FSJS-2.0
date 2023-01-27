// Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).

let even = [];
let odd = [];

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        even.push(i);
    } else {
        odd.push(i);
    }
}
console.log("Even numbers:", even);
console.log("Odd numbers:", odd);

// This program creates two empty arrays, "even" and "odd", and then uses a for loop to iterate through the numbers from 0 to 100. Within the loop, it checks whether the current number is even by using the modulus operator (%) and the remainder being 0. If the number is even, it pushes that number to the "even" array, otherwise it pushes it to the "odd" array. Finally, it logs the two arrays to the console so you can see the resulting even and odd numbers.