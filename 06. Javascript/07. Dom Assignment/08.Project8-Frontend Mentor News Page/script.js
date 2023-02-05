/*--------Task1: Making new Section scrollable-----*/

// Generating reference to the new section
let new1 = document.querySelector(".new");

// adding border and padding to new section

new1.style.border = "3px solid red";
new1.style.padding ="30px";
new1.style.overflow = "auto";
console.log(new1);

/*--------Task2: Navbar toggler-----*/

// Generating the refernce to the navBar toggler
let navBarToggler = document.querySelector(".navbar-toggler");

// Generating the refernce to the navBar collapse
let navBarCollapse = document.querySelector(".navbar-collapse");

navBarToggler.addEventListener("click", ()=>{
    navBarCollapse.classList.toggle("show");
});