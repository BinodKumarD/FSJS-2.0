// for(let i = 0; i<10; i++){
//     console.log(i);
// }

const myStates = ["Odisha", "Punjab", 1947, "Andhra Pradesh",]
console.log(`Printing using for loop: `);
for (let i = 0; i < myStates.length; i++) {
    if (typeof myStates[i] !== "string") continue;
    console.log(myStates[i]);
}
console.log(`Printing using for each loop: `);
myStates.forEach(s => console.log(s));

const names = ["Youtube", "instagram", "Amazon"];
console.log("Printing Using for of loops: ");
for (const n of names) {
    console.log(n);
}
const symbols = { yt: "Youtube", ig: "Instagram", lco: "learn code online" }
console.log("Printing Using for in loops: ");
for (const n in symbols) {
    console.log(`key is: ${n} and value is: ${symbols[n]}`);
}
