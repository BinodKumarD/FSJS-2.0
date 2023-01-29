## Javascript -> <em>07. DOM Assignment</em> -> <em>01. Project1 - Portfolio Website (Home Page)</em> 

<hr/>

# Table of Contents
- [Table of Contents](#table-of-contents)
  - [1. Project1 - Portfolio Website (Home Page)](#1-project1---portfolio-website-home-page)
    - [i. Task1: Adding new li as Hire Me and changing Contact name to Project in navigation link and hidding ul in footer](#i-task1-adding-new-li-as-hire-me-and-changing-contact-name-to-project-in-navigation-link-and-hidding-ul-in-footer)
    - [ii. Task2: Hidding Hire me, and In search bar changing the placeholder](#ii-task2-hidding-hire-me-and-in-search-bar-changing-the-placeholder)

<hr/>

## 1. Project1 - Portfolio Website (Home Page)

### i. Task1: Adding new li as Hire Me and changing Contact name to Project in navigation link and hidding ul in footer

![](./firstAssignmentImage/task1Output.png)

**Solution**
 
```
/* -----Task1: Adding new li as Hire Me and changing Contact name to Project in navigation link and hidding ul in footer ---- */

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

// Getting the reference of anchor Tag
let nav = document.querySelector("nav");
let aTags = nav.querySelectorAll("a");

// selecting the contact in ul
let contact = Array.from(aTags).filter( (aTag) =>
 aTag.textContent === "Contact")[0];

// changing the innertext to Projects
contact.innerText = "Projects";

/* --------hidding ul in footer-------- */

// Getting the reference of ul in footer
let footer = document.querySelector("footer");
let ulFooter = footer.querySelector("ul");

// setting the display to none
ulFooter.style.display = "none";
```

<hr/>

### ii. Task2: Hidding Hire me, and In search bar changing the placeholder

![](./firstAssignmentImage/task2Output.png)

**Solution**
 
```
/* -----Task2: Hidding Hire me, and In search bar changing the placeholder---- */

// Hidding hireme in ul
li.style.display = "none";

/*-----In Search Bar Changing the placeholder------*/

// Getting the reference of input field
let searchField = document.querySelector(".search-field");
let searchInput = searchField.querySelector("input");

// changing the placeholder
searchInput.placeholder = "Search My Project";
```

<hr/>