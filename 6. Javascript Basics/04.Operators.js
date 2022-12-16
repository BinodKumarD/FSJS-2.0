var num1 = 9;
var num2 = 5;

console.log(`sum of ${num1} and ${num2} is: ${num1+num2}`);
console.log(`Product of ${num1} and ${num2} is: ${num1*num2}`);

var answer = num1 > num2;
console.log(`${num1} is greater then ${num2}: ${answer}`);


var selliingPrice = 199;
var listingPrice = 799;
var dis = (listingPrice - selliingPrice) / listingPrice *100;
console.log(`Discount percentage: ${Math.round(dis)}% off`)
