## Javascript -> <em>07. DOM Assignment</em> -> <em>03. Project3 - Portfolio Website (Contact Page)</em> 

<hr/>

# Table of Contents
- [Table of Contents](#table-of-contents)
  - [1. Project3 - Portfolio Website (Contact Page)](#1-project3---portfolio-website-contact-page)
    - [i. Task1: Submitting Details in input form and displaying the same detail in output form](#i-task1-submitting-details-in-input-form-and-displaying-the-same-detail-in-output-form)
    - [ii. Task2: Resetting Details in input and output form](#ii-task2-resetting-details-in-input-and-output-form)

<hr/>

## 1. Project3 - Portfolio Website (Contact Page)

### i. Task1: Submitting Details in input form and displaying the same detail in output form

![](../00.%20Output/02.Project2-Portfolio%20Website(About)/01.Task1.png)

**Solution**
 
```
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
```

<hr/>

### ii. Task2: Resetting Details in input and output form

![](../00.%20Output/02.Project2-Portfolio%20Website(About)/02.Task2.png)

**Solution**
 
```
/* -----Task2: Resetting Details in input and output form  ---- */

const leftform = document.querySelector(".mainLeftDetails");

leftform.addEventListener('reset', (event) => {
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
})
```

<hr/>