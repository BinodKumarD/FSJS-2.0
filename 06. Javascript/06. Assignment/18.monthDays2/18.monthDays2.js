//  Write a program which tells the number of days in a month, now consider leap year.
 

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

// check to see if the year is divisible by 4, if yes it is leap year otherwise not.

function isLeapYear(year) {
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  }
  return false;
}

let year1 = 2020;
let month1 = "February";
let leap1 = isLeapYear(year1);
console.log(`Number of Days in month of ${month1} ${year1} is: ${daysInMonth(month1, leap1)}`); // 29

let year2 = 2023;
let month2 = "June";
let leap2 = isLeapYear(year1);
console.log(`Number of Days in month of ${month2} ${year2} is: ${daysInMonth(month2, leap2)}`); // 30

let year3 = 2021;
let month3 = "October";
let leap3 = isLeapYear(year3);
console.log(`Number of Days in month of ${month3} ${year3} is: ${daysInMonth(month3, leap3)}`); // 31
