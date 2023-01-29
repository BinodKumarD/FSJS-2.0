/* ------------- Task1: Adding new li as Hire Me and changing Contact name to Project in navigation link and hidding ul in footer -------------------- */

/* --------Adding Hire Me-------*/

// Getting the reference to the ul element
let navLinks = document.querySelector("nav");
let ul = navLinks.querySelector("ul");

// creating new li element
let li = document.createElement("li");

// creating new anchor element
let a = document.createElement("a");
a.href = "./hireMe";
a.innerText = "Hire Me";

// Appending the anchor element to li
li.appendChild(a)

//Appending li to ul
ul.appendChild(li);

/* -------Changing Contact to => Project in nav ------*/

let nav = document.querySelector("nav");
let aTags = nav.querySelectorAll("a");
let contact = Array.from(aTags).filter( (aTag) =>
 aTag.textContent === "Contact")[0];
 contact.innerText = "Projects";

/*------hidding ul in footer-----*/
let footer = document.querySelector("footer");
let ulFooter = footer.querySelector("ul");
ulFooter.style.display = "none";
console.log(ulFooter); 

/* ------------- Task1: Adding new li as Hire Me and changing Contact name to Project in navigation link -------------------- */