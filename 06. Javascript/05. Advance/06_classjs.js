class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    courseList = [];

    getInfo() {
        return { name: this.name, email: this.email };
    }

    enrollCourse(name) {
        this.courseList.push(name);
    }

    getCourseList() {
        return this.courseList;
    }
}

module.exports = user;

// let binod = new user("binod kumar", "binod@gmail.com");
// console.log(binod);