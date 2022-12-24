var countries = ['India', 'America', 'Australia', 'Japan', 'Russia'];
console.log(countries);

var states = new Array("Odisha", "West Bengal", "Punjab", "Andhrapradesh");
console.log(states);
console.log(states[1]);

states[0] = "Tamil Nadu";
console.log(states);

var user = ["Binod", "binod@gmail.com", 3, 34, true];
console.log(user);

user.pop();
console.log(user);

user.push("Kumar");
console.log(user);

user.unshift("New value");
console.log(user);

user.shift();
console.log(user);

console.log(user.indexOf('Binod'));
console.log(user.indexOf("roxx"));

console.log(Array.from("Binod"));

