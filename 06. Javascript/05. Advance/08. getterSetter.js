class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    #courseList = [];

    getInfo() {
        return { name: this.name, email: this.email };
    }

    setCourse(name) {
        this.#courseList.push(name);
    }

    getCourseList() {
        return this.#courseList;
    }
}

module.exports = user;

const rock = new user("rock", "rock@gmail.com");
console.log(rock.getInfo());

rock.setCourse("Javascript Bootcamp");
console.log(rock.getCourseList());
console.log(rock.courseList);