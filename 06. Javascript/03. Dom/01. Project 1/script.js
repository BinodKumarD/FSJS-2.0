// var counter = document.querySelector(".counter");
// var followers = document.querySelector(".followers");

// let count = 1;

// setInterval( () => {
//     if(count < 1000){
//     count++;
//     counter.innerText = count;
//     }
// }, 1);

// setTimeout( () => {
//     followers.innerText = "Followers in instagram!";
// }, 4050);

var counter = document.getElementById("counter1");
var followers = document.getElementsByClassName("followers");

let count = 1;

setInterval( () => {
    if (count < 1000) {
        count++;
        counter.innerText = count;
    }
}, 100);

setTimeout(() => {
    followers[0].innerText = "Followers in Instagram!";
}, 4055 );