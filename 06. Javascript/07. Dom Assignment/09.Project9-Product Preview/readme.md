## Javascript -> <em>07. DOM Assignment</em> -> <em>09. Project9 - Product Preview Card</em> 

<hr/>

# Table of Contents
- [Table of Contents](#table-of-contents)
  - [1. Project9 - Product Preview Card](#1-project9---product-preview-card)
    - [i. Task1: Changing the color of the title and adding "add to cart" icon](#i-task1-changing-the-color-of-the-title-and-adding-add-to-cart-icon)
    - [ii. Task2: Changing the color of the button on hover](#ii-task2-changing-the-color-of-the-button-on-hover)

<hr/>

## 1. Project9 - Product Preview Card

### i. Task1: Changing the color of the title and adding "add to cart" icon 

![](../00.%20Output/09.Project9-Product%20preview%20Card/01.Task1.png)

**Solution**

```
/*--------Task1: Changing the color of the title and adding "add to cart" icon-----*/

// Generating reference to the title of the card and add to cart icon
let title = document.querySelector(".caption h1");
let addToCartImg = document.querySelector(".add-to-cart img");

// Changing the color of the title
title.style.color = "#DC143C";

// Adding the icon to the button
addToCartImg.src = "./images/icon-cart.svg";

```

<hr/>

### ii. Task2: Changing the color of the button on hover

![](../00.%20Output/09.Project9-Product%20preview%20Card/02.Task2.png)

**Solution**

```
/*--------Task2: Changing the color of the button on hover-----*/

// Generating reference to the add to cart button
let addTocartButton = document.querySelector(".add-to-cart");

// Changing the background color on mouse over
addTocartButton.addEventListener("mouseover", ()=>{
    addTocartButton.style.background = "#DC143C";
});

// Changing the background color on mouse out
addTocartButton.addEventListener("mouseout", ()=>{
    addTocartButton.style.background = "hsl(158, 36%, 37%)";
});

```

<hr/>
