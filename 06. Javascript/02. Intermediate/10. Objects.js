var user = { firstName: "Binod", lastName: "Kumar", role: "admin", loginCount: 32, signedIn: true };

console.log(user.firstName);
console.log(user["lastName"]);
user.loginCount = 44;
console.table(user);

var iphone = { Model: "Iphone 14 plus", Os: "ios", RearCamera: "48MP", Battery: "5000Mah", Display: "6.7-inch", Storage: "256GB", charing: "wireless" };

console.table(iphone);