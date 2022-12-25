var user = {
    firstName: "Binod",
    lastName: "Kumar",
    role: "admin",
    loginCount: 32,
    signedIn : true,
    courserList:[],
    buyCourse: function(courseName){
        this.courserList.push(courseName);
    },
    getCourseCount: function () {
      return `${this.firstName} is enrolled in  total of ${this.courserList.length} courses`;  
    }
}

console.log(user.getCourseCount());
user.buyCourse("Javascript");
user.buyCourse("Html and css");

console.log(user.getCourseCount());
user.buyCourse("React JS course");
console.log(user.getCourseCount());
console.table(user);