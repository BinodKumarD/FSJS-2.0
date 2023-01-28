/*3. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
      *
     ***
     *****
*/

// Function to print pyramid pattern
function printPyramid(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }
        for (let k = 1; k <= (2 * i - 1); k++) {
            row += "*";
        }
        console.log(row);
    }
}

printPyramid(3);