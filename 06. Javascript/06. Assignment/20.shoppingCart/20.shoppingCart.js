/*In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of your shopping cart if it has not been already added
    - remove 'Honey'
    - modify Tea to 'Green Tea'*/

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);

// add 'Meat' in the beginning of the shopping cart if it has not been already added
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}
console.log(`Adding 'Meat' in the beginning of the shopping cart if it has not been already added :`);
console.log(shoppingCart);

// add 'Sugar' at the end of the shopping cart if it has not been already added
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}
console.log(`Addinig Sugar at the end of your shopping cart if it has not been already added :`);
console.log(shoppingCart);

// remove 'Honey'
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
console.log(`Removing 'Honey' :`);
console.log(shoppingCart);

// modify 'Tea' to 'Green Tea'
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(`Modifying 'Tea' to 'Green Tea' :`);
console.log(shoppingCart);
