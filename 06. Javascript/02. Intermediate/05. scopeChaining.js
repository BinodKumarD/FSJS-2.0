var name = "Binod kumar";

console.log(`Line number 3 ${name}`);

sayName();

function sayName() {
    var name = "Its Binod"
    console.log(`Line number 7 ${name}`);
    sayNameTwo();

    function sayNameTwo(){
        var name = "Its B";
        console.log(`Line number 14 ${name}`);
    }
}