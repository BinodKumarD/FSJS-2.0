// TODO: falsy
// undefined
// null
// 0 
// ''
// NaN

 var user;
 if(user){
    console.log(user + " condition is true");
 }else{
    console.log(user + " condition is false");
 }

 var user = null;
 if(user){
    console.log(user + " condition is true");
 }else{
    console.log(user + " condition is false");
 }

 var user = '';
 if(user){
    console.log(user + " empty string condition is true");
 }else{
    console.log(user + " empty string condition is false");
 }

console.log(2 + 2);
console.log(2 + "2");

var user = "2";
if(2 == user){
    console.log("condition is true");
}else{
    console.log("condition is false");
}

if(2 === user){
    console.log("condition is true");
}else{
    console.log("condition is false");
}