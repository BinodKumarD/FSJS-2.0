/*2. Print a square pattern, if the input is 3 then the output should be similar to the given output
    ***
    ***
    ***
*/

// Function to print square pattern
function printSquare(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n; j++) {
            row += "*";
        }
        console.log(row);
    }
}

printSquare(3);
