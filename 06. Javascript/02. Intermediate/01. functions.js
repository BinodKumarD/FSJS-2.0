function sayHello() {
    console.log("Hello Binod, how are you?");
}

sayHello();

function sayHello1(name){
    console.log("hello there, "+ name);
    console.log(`Hello there, ${name}. How are you?`);
}

sayHello1("Binod");
sayHello1("Kumar");

function namastey() {
    return "Hello in India";
}

var greetings = namastey();

console.log(greetings);
console.log(namastey());