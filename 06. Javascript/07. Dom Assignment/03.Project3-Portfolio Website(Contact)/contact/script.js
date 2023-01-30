/* -----Task1: Submitting Details in input form and displaying the same detail in output form ---- */

const form = document.querySelector('.mainRight form');
const nameInput = document.querySelector('.userName');
const emailInput = document.querySelector('.userEmail');
const messageInput = document.querySelector('.userMessage');
const nameOutput = document.querySelector('.enterName');
const emailOutput = document.querySelector('.enterMail');
const messageOutput = document.querySelector('.enterMessage');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
    console.log(name);
    nameOutput.value = name;
    emailOutput.value = email;
    messageOutput.value = message;
});


/* -----Task2: Resetting Details in input and output form  ---- */

const leftform = document.querySelector(".mainLeftDetails");

leftform.addEventListener('reset', (event) => {
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
})
