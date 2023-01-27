// Write a program which tells the number of days in a month

function daysInMonth(month, leapYear) {
    switch (month) {
      case "January":
      case "March":
      case "May":
      case "July":
      case "August":
      case "October":
      case "December":
        return 31;
      case "April":
      case "June":
      case "September":
      case "November":
        return 30;
      case "February":
        if (leapYear) {
          return 29;
        } else {
          return 28;
        }
      default:
        return "Invalid month";
    }
  }

let year1 = 2021;
let month1 = "February";
let leap1 = false;
console.log(`Number of Days in month of ${month1} ${year1} is: ${daysInMonth(month1, leap1)}`); // 28

let year2 = 2023;
let month2 = "June";
let leap2 = true;
console.log(`Number of Days in month of ${month2} ${year2} is: ${daysInMonth(month2, leap2)}`); // 30

let year3 = 2021;
let month3 = "October";
let leap3 = false;
console.log(`Number of Days in month of ${month3} ${year3} is: ${daysInMonth(month3, leap3)}`); // 31
