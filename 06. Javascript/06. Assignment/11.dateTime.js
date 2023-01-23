/*Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.*/

// The Date object can be used to access various information about the current date and time. Here's how you can use it to do the activities you've listed:

// To find out the current year, you can use the getFullYear() method:

var today = new Date();
const year = today.getFullYear();
console.log(`Year: ${year}`);

// To find out the current month as a number, you can use the getMonth() method. Note that this method returns a zero-based number, so January is 0, February is 1, and so on:

var today = new Date();
const month = today.getMonth();
console.log(`month: ${month + 1}`);

// To find out the current date, you can use the getDate() method:

var today = new Date();
const date = today.getDate();
console.log(`date: ${date}`);

// To find out the current day as a number, you can use the getDay() method. Note that this method returns a zero-based number, so Sunday is 0, Monday is 1, and so on:

var today = new Date();
const day = today.getDay();
console.log(`day: ${day + 1}`);

// To find out the current hour, you can use the getHours() method:

var today = new Date();
const hour = today.getHours();
console.log(`hour: ${hour}`);

// To find out the current minutes, you can use the getMinutes() method:

var today = new Date();
const minutes = today.getMinutes();
console.log(`minutes: ${minutes}`);

// To find out the number of seconds elapsed since January 1, 1970, you can use the getTime() method. This method returns the number of milliseconds since that date, so you'll need to divide by 1000 to get the number of seconds:

var today = new Date();
const seconds = today.getTime() / 1000;
console.log(`seconds: ${seconds}`);