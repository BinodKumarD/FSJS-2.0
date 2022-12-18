var getUserRole = function (name, role){

    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            // break; // this is not necessary
    
        case "subadimin":
            return `${name} is sub-admin with access to create and delete courses`;
            // break;
    
        case "testprep":
            return `${name} is test prep with access to create and delete tests`;
            // break;
    
        case "user":
            return `${name} is a user to consume content`;
            // break;
    
        default:
            return `${name} is a trail user`;
            // break;
    }
}

console.log(getUserRole("Binod", "testprep"));

var  getRole = getUserRole("Kumar", "User");

console.log(getRole);