/*--------Task1: Changing the color of the title and add to cart icon-----*/

// Generating reference to the title of the card and add to cart icon
let title = document.querySelector(".caption h1");
let addToCartImg = document.querySelector(".add-to-cart img");

// Changing the color of the title
title.style.color = "#DC143C";

// Adding the icon to the button
addToCartImg.src = "./images/icon-cart.svg";


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


