/*--------Task1: Changing the logo of Application------*/

// Generating reference to the header img
let headerImg = document.querySelector("header img");

// Changing the image
headerImg.src = "./assets/ineuron-logo.png";


/*--------Task2: Changing the price, footer text color and adding linkedin icon ------*/

/*----------i. Changing the app price-----------*/

// Generating reference to the premium app price
let appPrice = document.querySelector(".app_price span");

// Changing the app price
appPrice.innerText = "$10";


/*--------ii. Changing the color of text in footer-------*/

// Generating the refernce to the footer text and strong in footer text
let footerText = document.querySelector(".footer_text");
let strong = document.querySelector(".footer_problems strong");


// Changing the color 
footerText.style.color = "#5A5A5A";
strong.style.color = "#000";


/*--------iii. Adding linkedin logo in footer-------*/

// Generating reference of footer Social
let footerSocial = document.querySelector(".footer_social");

// Creating div with class name "footer_social_ico" 
let div = document.createElement("div");
div.className = "footer_social_ico";

// creating icons with the help of favicon
let i = document.createElement("i");
i.classList = "fa-brands fa-linkedin";

//appending icons to div and then div to footerSocial
div.append(i);
footerSocial.append(div);
