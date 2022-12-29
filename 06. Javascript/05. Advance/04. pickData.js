const user1 = ["Binod", 3, "admin"];
// var role1 = user[2];
// var name1 = user[0];

var [name2, courseCount2, role2] = user1;

console.log(`${name2}, ${role2}, ${courseCount2}`);

const myUser = {
    name: "Kumar", 
    courseCount: 5, 
    role: "sub-admin",
}

console.log('course count: '+myUser.courseCount);

const {name, courseCount, role}= myUser;
console.log(`${name}, ${role}, ${courseCount}`);