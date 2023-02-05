## Javascript -> <em>07. DOM Assignment</em> -> <em>08. Project8 - Frontend Mentor News Page</em> 

<hr/>

# Table of Contents
- [Table of Contents](#table-of-contents)
  - [1. Project8 - Frontend Mentor News Page](#1-project8---frontend-mentor-news-page)
    - [i.Task1: Making new Section scrollable](#itask1-making-new-section-scrollable)
    - [ii.Task2: Navbar toggler](#iitask2-navbar-toggler)

<hr/>

## 1. Project8 - Frontend Mentor News Page

### i.Task1: Making new Section scrollable

![](../00.%20Output/08.Project8-Frontend%20Mentor%20News%20Page/01.Task1.png)

**Solution**

```
/*--------Task1: Making new Section scrollable-----*/

// Generating reference to the new section
let new1 = document.querySelector(".new");

// adding border and padding to new section

new1.style.border = "3px solid red";
new1.style.padding ="30px";
new1.style.overflow = "auto";
console.log(new1);

```

<hr/>

### ii.Task2: Navbar toggler

![](../00.%20Output/08.Project8-Frontend%20Mentor%20News%20Page/02.Task2.png)

**Solution**

```
/*--------Task2: Navbar toggler-----*/

// Generating the refernce to the navBar toggler
let navBarToggler = document.querySelector(".navbar-toggler");

// Generating the refernce to the navBar collapse
let navBarCollapse = document.querySelector(".navbar-collapse");

navBarToggler.addEventListener("click", ()=>{
    navBarCollapse.classList.toggle("show");
})

```

<hr/>