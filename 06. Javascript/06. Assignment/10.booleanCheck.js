/*Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    - 4 > 3
    - 4 >= 3
    - 4 < 3
    - 4 <= 3
    - 4 == 4
    - 4 === 4
    - 4 != 4
    - 4 !== 4
    - 4 != '4'
    - 4 == '4'
    - 4 === '4'
    - Find the length of python and jargon and make a falsy comparison statement.*/


/*The result of the following comparison expressions are:

4 > 3 is true
4 >= 3 is true
4 < 3 is false
4 <= 3 is false
4 == 4 is true
4 === 4 is true
4 != 4 is false
4 !== 4 is false
4 != '4' is false
4 == '4' is true
4 === '4' is false

Regarding the length comparison, the length of the string "python" is 6 and the length of the string "jargon" is 6. So,
"python" !== "jargon" is true.

we can confirm this by using console.log()*/

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
console.log(`Length of python: ${"python".length}`);
console.log(`Length of jargon: ${"jargon".length}`);
const python = "python";
const jargon = "jargon";
if(python.length == jargon.length){
    console.log("Length of python is equal to length of jargon");
}else{
    console.log("Length of python is not equal to length of jargon");
}