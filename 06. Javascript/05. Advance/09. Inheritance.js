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

    login(){
        return "You are logged in";
    }
}


class subAdmin extends user{
    constructor(name, email){
        super(name, email);
    }
    getAdminInfo(){
        return "I am subAdmin";
    }
    login(){
        return "login for admin only";
    }
}

const tom = new subAdmin("tom", "tom@gmail.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());