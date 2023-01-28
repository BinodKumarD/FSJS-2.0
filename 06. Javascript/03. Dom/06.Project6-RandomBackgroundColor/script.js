
let setColor = () => {
    let arr = ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color = color + arr[Math.floor(Math.random() * 15)];
    }

    return color;
}

function myMove() {
    let id = null;
    const elem = document.getElementById("animate");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
  }


function change() {
    let buttonColor = setColor();
    let backgroundColor = setColor();
    let textColor = setColor();

    let button = document.querySelector(".buttonBack");
    let buttonDiv = document.querySelector(".buttonDiv");
    
    button.style.color = textColor;
    button.style.background = buttonColor;
    buttonDiv.style.background = backgroundColor;
}
