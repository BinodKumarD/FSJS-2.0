## Javascript -> <em>07. DOM Assignment</em> -> <em>02. Project2 - Portfolio Website (About Page)</em> 

<hr/>

# Table of Contents
- [Table of Contents](#table-of-contents)
  - [1. Project2 - Portfolio Website (About Page)](#1-project2---portfolio-website-about-page)
    - [i. Task1: Changing background color of h3 in FAQ section](#i-task1-changing-background-color-of-h3-in-faq-section)
    - [ii. Task2: Changing the description of skiils in FAQ section](#ii-task2-changing-the-description-of-skiils-in-faq-section)

<hr/>

## 1. Project2 - Portfolio Website (About Page)

### i. Task1: Changing background color of h3 in FAQ section

![](../00.%20Output/02.Project2-Portfolio%20Website(About)/01.Task1.png)

**Solution**
 
```
/* -----Task1: Changing background color of h3 in FAQ section ---- */

Array.from(accordian);
accordian.forEach((element) =>{
  element.style.background = "#DADAF8";
} )
```

<hr/>

### ii. Task2: Changing the description of skiils in FAQ section

![](../00.%20Output/02.Project2-Portfolio%20Website(About)/02.Task2.png)

**Solution**
 
```
/* -----Task2: Changing the description of skiils in FAQ section ---- */

// Generating the reference of accordian para in hobbies
let accordianP = document.querySelectorAll(".accordian p");
accordianP[3].innerText = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github";
```

<hr/>