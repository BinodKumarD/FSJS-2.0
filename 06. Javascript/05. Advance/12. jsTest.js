let student = {
    age: 44, 
    name: {
        firstName: "Binod", 
        lasName: "kumar",
    },
};

student.age= 21;
console.log(student);

Object.freeze(student);
student.age = 15;
console.log(student);

student.name.firstName = "Not Binod";
console.log(student);

Object.freeze(student.name);
student.name.lastName = "Not kumar";
console.log(student);
