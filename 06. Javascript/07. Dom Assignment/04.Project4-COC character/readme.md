## Javascript -> <em>07. DOM Assignment</em> -> <em>04. Project4 - Clash Of Clan Character Page</em> 

<hr/>

# Table of Contents
- [Table of Contents](#table-of-contents)
  - [1. Project4 - Clash Of Character Page](#1-project4---clash-of-character-page)
    - [i. Task1: Coloring the details background and text of Card](#i-task1-coloring-the-details-background-and-text-of-card)

<hr/>

## 1. Project4 - Clash Of Character Page

### i. Task1: Coloring the details background and text of Card

![](../00.%20Output/04.Project4-COC%20character/01.Task1.png)

**Solution**
 
```
/* -----Task1: Coloring the details background of Card---- */

// Generating the refernce to clearfix in the card 
let clearfix = document.querySelectorAll(".clearfix");

// Generating the reference to div of .one-third
let oneThird = document.querySelectorAll(".one-third div");

// storing the color in array
let arr = ["#EC9B3B", "#EE5487", "#F6901A", "#82BB30", "#4FACFF"];

// coloring all background of deatils in card
for(let i=0; i<5; i++){
clearfix[i].style.background = arr[i];
}

// coloring the text to white in details part
oneThird.forEach((e) =>{
    e.style.color="#fff";
})
```

<hr/>