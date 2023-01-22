// Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

var skills = ["JavaScript", "HTML", "CSS", "pw skills", "node.js", "pw skills", "Git", "SQL"];

console.log(skills.lastIndexOf("pw skills")); // Output: 5

console.log(skills.lastIndexOf("Github")); // Output: -1


// In this example, an array named "skills" is declared containing various values of web development skills. The lastIndexOf() method is used to determine the position of the last occurrence of the word "pw skills" in the array. The method returns the index position of the last occurrence, which in this case is 5. If the element is not present in the array it returns -1.
// It's important to note that the index positions in javascript arrays start from 0, so the first position in an array is 0, the second position is 1 and so on.

//The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.

//The lastIndexOf() method returns -1 if the value is not found.

//The lastIndexOf() method is case sensitive.

//Syntax
//string.lastIndexOf(searchvalue)