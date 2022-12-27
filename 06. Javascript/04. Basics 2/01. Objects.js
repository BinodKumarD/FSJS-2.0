var user = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getcourseCount = function() {
        console.log(`Course count is: ${this.courseCount}`);
    }
} 

user.prototype.getFirstName  = function(){
    console.log(`Your firstname is: ${this.firstName}`);
}
 
var binod = new user("Binod", 4);
// console.log(binod);
binod.getcourseCount(); 

if(binod.hasOwnProperty("firstName")){
    binod.getFirstName();
}
 
var kumar = new user("kumar", 5);
// console.log(kumar);
kumar.getFirstName();
kumar.getcourseCount();
