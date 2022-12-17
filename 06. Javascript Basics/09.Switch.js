// Create an application with following roles:
// admin - gets full access 
// subadmin - get access to create/delete courses
// testprep - get access to create delete tests 
// user - get access to consume content

var user = "user";

switch (user) {
    case "admin":
        console.log("get full access");
        break;

    case "subadmin":
        console.log("get access to create/delete courses");
        break;

    case "testprep":
        console.log("get access to create delete test");
        break;

    case "user":
        console.log("get access to consume content");
        break;

    default:
        console.log("your choice is wrong");
        break;
}