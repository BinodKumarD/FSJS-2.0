/*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
- September, October or November, the season is Autumn.
- December, January or February, the season is Winter.
- March, April or May, the season is Spring
- June, July or August, the season is Summer*/

function checkSeason(month) {
    if (month === "September" || month === "October" || month === "November") {
      return "Autumn";
    } else if (month === "December" || month === "January" || month === "February") {
      return "Winter";
    } else if (month === "March" || month === "April" || month === "May") {
      return "Spring";
    } else if (month === "June" || month === "July" || month === "August") {
      return "Summer";
    } else {
      return "Invalid month";
    }
  }

// We can test the function by calling it with a month as an argument:  

let month1 = "September";
console.log(checkSeason(month1)); // "Summer"

let month2 = "January";
console.log(checkSeason(month2)); // "Summer"

let month3 = "April";
console.log(checkSeason(month3)); // "Summer"

let month4 = "June";
console.log(checkSeason(month4)); // "Summer"

let month5 = "Binod kumar";
console.log(checkSeason(month5)); // "Summer"