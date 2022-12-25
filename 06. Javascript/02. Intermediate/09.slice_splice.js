var users = ["Binod", "kumar", "Abhishek", "pradeep", "kiran", "sai"];

// slice function in array 

console.log(users.slice(1));
console.log(users.slice(0, 4));
console.log(users.slice(2,5));

//splice function in array

var users1 = users.splice(3, 2, "Hi");
console.log(users1);
console.log(users);

users.splice(1,2, "Hello");
console.log(users);

