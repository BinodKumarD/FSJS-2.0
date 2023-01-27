// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const countries = ['India', 'USA', 'UK', 'China'];

// check if 'Ethiopia' exists in the countries array
if (!countries.includes('Ethiopia')) {
  // if it does not exist, add it to the countries list
  countries.push('Ethiopia');
  console.log('Ethiopia added to the countries list');
} else {
  console.log('ETHIOPIA');
}
console.log(countries);

// In this example, an array of countries is defined, then it is checking if 'Ethiopia' is already included in the countries array using the includes() method. If it is not included then it will add using push() method and print 'Ethiopia added to the countries list' and if it exist then it will print 'ETHIOPIA'. Finally, the modified countries array is logged to the console.