// Boolean value is either true or false.
//     - Write three JavaScript statement example which provide truthy value.
//     - Write three JavaScript statement example which provide falsy value.

// Three JavaScript statement examples that provide truthy values:

var myVar = "Binod";
if(myVar){
    console.log(`${myVar} is truthy value`);
}else{
    console.log(`${myVar} is falsy value`);
}

var myNum = 5;
if(myNum){
    console.log(`${myNum} is truthy value`);
}else{
    console.log(`${myNum} is falsy value`);
}

var myBool = true;
if(myBool){
    console.log(`${myBool} is truthy value`);
}else{
    console.log(`${myBool} is falsy value`);
}

// Three JavaScript statement examples that provide falsy values:

var myVar = "";
if(myVar){
    console.log(`${myVar} is truthy value`);
}else{
    console.log(`${myVar} is falsy value`);
}

var myNum = 0;
if(myNum){
    console.log(`${myNum} is truthy value`);
}else{
    console.log(`${myNum} is falsy value`);
}

var myBool = false;
if(myBool){
    console.log(`${myBool} is truthy value`);
}else{
    console.log(`${myBool} is falsy value`);
}

// It's important to note that in javascript, there are some values that are considered as "truthy" and some values that are considered as "falsy". A truthy value is a value that is considered true in a Boolean context, and a falsy value is a value that is considered false in a Boolean context.

// In the first example, the variable "myVar" is assigned a string value "Binod" which is considered as a truthy value, as it holds a value. In the second example, the variable "myNum" is assigned a numeric value 5 which is considered as a truthy value, as it holds a value. In the third example, the variable "myBool" is assigned a Boolean value true which is considered as a truthy value, as it holds a value.

// In the fourth example, the variable "myVar" is assigned an empty string value "" which is considered as a falsy value, as it doesn't hold any value. In the fifth example, the variable "myNum" is assigned a numeric value 0 which is considered as a falsy value, as it doesn't hold any value. In the sixth example, the variable "myBool" is assigned a Boolean value false which is considered as a falsy value, as it doesn't hold any value.