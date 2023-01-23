// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = prompt("Enter your age:");
if (age >= 18) {
    console.log("You are old enough to drive");
} else {
    console.log("You need to wait " + (18 - age) + " more years before you can drive.");
}


// The above code uses the prompt() function to get the user's age and store it in the variable age. Then it checks if the age is greater than or equal to 18 using an if statement. If it is, it will console.log "You are old enough to drive." Else it will console.log "You need to wait " + (18 - age) + " more years before you can drive.".