const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor );
 
const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

const magicColorChanger = (element,  color) =>{
    return element.addEventListener("mouseenter", () => {
        center.style.background = color;
    });
};
 
magicColorChanger(red, getBGColor(red));
magicColorChanger(pink, getBGColor(pink));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(violet, getBGColor(violet));