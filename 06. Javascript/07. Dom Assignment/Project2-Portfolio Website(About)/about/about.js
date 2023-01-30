let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

/* -----Task1: Changing background color of h3 in FAQ section ---- */

Array.from(accordian);
accordian.forEach((element) =>{
  element.style.background = "#DADAF8";
} )

/* -----Task2: Changing the descriptioon of skiils in FAQ section ---- */

// Generating the reference of accordian para in hobbies
let accordianP = document.querySelectorAll(".accordian p");
accordianP[3].innerText = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github";


