let num = prompt("Guess the correct number between 1 - 10");
randomNum = Math.floor(Math.random()*10);
let chance = 1;

while(num != randomNum){
     num = prompt("Sorry wrong Guess try again between 1 - 10");  
     chance++;
}
if(num == randomNum)
document.write(`Yes you are right correct number is: ${num} in ${chance} chances`);


