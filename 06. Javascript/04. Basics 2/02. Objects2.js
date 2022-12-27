var user = {
    name: "",
    getUserName: function(){
        console.log(`User name is: ${this.name}`);
    }
};

var binod = Object.create(user);

console.log(binod);
binod.name = "Binod kumar";
binod.getUserName();

 var sam = Object.create(user, {
    name: {value: "Sammy"},
    courseCount: {value: 3},
 })

 sam.getUserName();
 console.log(sam.courseCount);