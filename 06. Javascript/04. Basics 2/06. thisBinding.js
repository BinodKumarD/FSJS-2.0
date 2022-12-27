const binod = {
    firstName : "Binod", 
    lastName : "Kumar",
    role: "Admin",
    courseCount : 3, 
    getInfo: function(){
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} course`);
    }, 
}
const dj = {
    firstName : "Rock",
    lastName : "DJ", 
    role : "Sub-admin", 
    courseCount: 4,
}
// var djInfo = binod.getInfo.bind(dj);
// djInfo();
binod.getInfo();
binod.getInfo.call(dj);


