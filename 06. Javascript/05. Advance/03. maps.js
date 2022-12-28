var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "Dos");
myMap.set(3, "Tres");
myMap.set(4, "cuatro");

console.log(myMap.get(3));
console.log(myMap.size);
// for (const key of myMap.keys()) {
//     console.log(`key is ${key}`);
// }
for (const value of myMap.values()) {
    console.log(`Value is ${value}`);
}

// for (const [key, value] of myMap) {
//     console.log(`key is: ${key}, and  value is: ${value}`);
// }

// myMap.forEach((value) => console.log(`value is: ${value}`));
myMap.forEach((value, key) => {
    console.log(`value is: ${value} and key is: ${key}`);
});

myMap.delete(3);
console.log(myMap);