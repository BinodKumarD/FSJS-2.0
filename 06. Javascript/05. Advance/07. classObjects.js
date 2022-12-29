// import user from "./06.classjs"

const user = require("./06_classjs");

const  binod = new user("binod", "binod@gmail.com");

console.log(binod.getInfo());
// console.log(binod.getInfo().email);
binod.enrollCourse("Angular Bootcamp");
binod.enrollCourse("React Bootcamp");

console.log(binod.getCourseList());

let courses = binod.getCourseList();

console.log(`You are enrolled in total of ${courses.length} courses.`);
console.log(`The courses in which you enrolled are:`);
courses.forEach(c => console.log(`${c}`));