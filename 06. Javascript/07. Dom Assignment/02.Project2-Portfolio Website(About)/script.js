/* -----Task1: Adding new li as Hire Me and changing Contact name to Project in navigation link and hidding ul in footer ---- */

/* --------1.i. Adding Hire Me-------*/

// Getting the reference to the ul element
let navLinks = document.querySelector("nav");
let navUl = navLinks.querySelector("ul");

// creating new li element
let li = document.createElement("li");

// creating new anchor element
let a = document.createElement("a");
a.href = "./hireMe";
a.innerText = "Hire Me";

// Appending the anchor element to li
li.appendChild(a)

//Appending li to ul
navUl.appendChild(li);

/* -------1.ii. Changing Contact to => Project in nav ------*/

// Getting the reference of anchor Tag
let nav = document.querySelector("nav");
let aTags = nav.querySelectorAll("a");

// selecting the contact in ul
let contact = Array.from(aTags).filter( (aTag) =>
 aTag.textContent === "Contact")[0];

// changing the innertext to Projects
contact.innerText = "Projects";

/* --------1.iii. hidding ul in footer-------- */

// Getting the reference of ul in footer
let footer = document.querySelector("footer");
let ulFooter = footer.querySelector("ul");

// setting the display to none
ulFooter.style.display = "none";



/* -----Task2: Hidding Hire me, and In search bar changing the placeholder---- */

/*-----2.i. Hidding hireme in ul------*/

li.style.display = "none";

/*-----2.ii. In Search Bar Changing the placeholder------*/

// Getting the reference of input field
let searchField = document.querySelector(".search-field");
let searchInput = searchField.querySelector("input");

// changing the placeholder
searchInput.placeholder = "Search My Project";



/* -----Task3: Changing the placeholder, changing in description and making footer ul visible---- */

/*------3.i. Making Changes in placeholder----*/

searchInput.placeholder = "Search";

/*------3.ii. Changing in Description------*/

// Getting the reference of hero section descripion para

let heroLeftSection = document.querySelector(".hero-left-section");
let heroDescription = heroLeftSection.querySelector("p");
heroDescription.children[2].innerText = "an Employee";
heroDescription.children[4].innerText = "iNeuron Intelligence Pvt Ltd";

/*------3.iii. Making footer ul visibe-----*/

ulFooter.style.display = "";



/* -----Task4: Changing in description and changing portfolio image---- */

/*------4.i. Changing the description----*/

heroDescription.children[2].innerText = "a Freelancer";
heroDescription.children[4].innerText = "National and International Client";

/*------4.ii. Changing the portfolio image------*/

// Getting the reference of hero right section image 
let heroRightSection = document.querySelector(".hero-right-section");
let heroRightSectionImg = heroRightSection.querySelector("img");

//Changing the src of image
heroRightSectionImg.src = "./hitesh_image.jpg";
console.log();



/* -----Task5: Changing portfolio image and adding support me button---- */

/*------5.i. Changing portfolio image----*/

heroRightSectionImg.src="./avtar.png";


/*------5.ii. Adding Support me button------*/

// Getting the reference of hero right section buttons
let heroRightSectionBtns = document.querySelector(".hero-right-section-btns");

//creating button
let supportMeBtn = document.createElement("button");
supportMeBtn.innerText = "Support Me";

//appending button to heroRightSectionBtns
heroRightSectionBtns.appendChild(supportMeBtn);





