function init() {
    var firstName = "Binod";
    var lastName = "Kumar"
    console.log("Inside init function");
    function sayName() {
        console.log(firstName);
        console.log(lastName);
    }

    return sayName;
}

var value = init();

value();

function doAddition(x) {
    return function (y) {
        return x + y;
    };
}

var add5 = doAddition(5);
console.log(add5(7));

console.log(doAddition(12)(9));