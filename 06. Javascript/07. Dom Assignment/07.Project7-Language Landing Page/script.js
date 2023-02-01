/*--------Task1: Removing the languages that have 2.0 in their name------*/

// Generating reference to the main_languages anchor tag
let mainLanguagesA = document.querySelectorAll(".main__languages a");

//Converting nodelist to Array
let arrayMainLanguagesA = Array.from(mainLanguagesA);

// Removing languages which contain 2.0
arrayMainLanguagesA.forEach((a) => {
    if (a.textContent.includes('2.0')) {
        a.style.display = "none";
    }
})


/*--------Task2: Use JavaScript to write something in the input box and submit the form. This should refresh the page and the languages in the left card should come back. ------*/


// Generating the reference to input and button in form
const mainFormInput = document.querySelector(".main__form-input");
const mainFormButton = document.querySelector(".main__form-btn");

// Enabling input and button
mainFormInput.removeAttribute("disabled");
mainFormButton.removeAttribute("disabled");

// storing the input value in local storage
mainFormButton.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("inputValue", mainFormInput.value);
    location.reload();
});


// storing the language in the left side even after  refresh
window.addEventListener("load", () => {

    const storedValue = localStorage.getItem("inputValue");
    mainFormInput.value = storedValue;
    const mainLanguages = document.querySelector('.main__languages');
    const a = document.createElement("a");
    a.target = 'blank';
    a.href = 'https://www.ineuron.ai';
    a.innerText = storedValue;
    mainLanguages.append(a);
});





