let num = prompt("Guess the correct number between 1 - 100");
randomNum = Math.floor(Math.random() * 100);
let chance = 1;

while (num != randomNum) {
     if (num > randomNum) {
          num = prompt(`Sorry your guess is greater than actual number `);
     } else {
          num = prompt(`Sorry your guess is smaller than actual number `);
     }
     chance++;
}
if (num == randomNum)
     document.write(`Yes you are right correct number is: ${num} in ${chance} chances you got right`);
     


