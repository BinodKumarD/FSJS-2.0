/*Write a program to print the table of any number given by the user. The format of the output should be smiliar to the below example-
	If the number given by the user is 2 then the output should look like this-
	2 * 1 = 2
	2 * 2 = 4
	2 * 3 = 6 and so on till 2 * 10 = 20.*/

// Function to print the table of a given number
function printTable(num) {
    // Loop through numbers 1 to 10
    console.log(`-----------------------------------------------`);
    for (let i = 1; i <= 10; i++) {
      // Print the table row
      console.log(`${num} * ${i} = ${num * i}`);
    }
    console.log(`-----------------------------------------------`);
  }
  
  // Call the function to print the table
  printTable(72);
  printTable(5);
  printTable(78);
  