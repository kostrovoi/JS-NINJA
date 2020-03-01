const products = [
    {name: 'gold star', price: 30},
    {name: 'green shell', price: 10},
    {name: 'red shell', price: 40},
    {name: 'banana skin', price: 5},
    {name: 'mushroom', price: 50}
];

//  what I'd like to do is filter out any product that isn't over 20 in price.
            // const expensiveProducts = products.filter(product => product.price > 20);
// So remember this is being returned either true or false if it's true that product is kept inside the
// filtered array, if it's false then it's filtered out.
            // console.log(products, expensiveProducts);
// the second step would be to map this filtered array into a new array that going
// to be a formatted version of these products.
// It might be an array of sentences like parole sentences for example each string for each item could
// say something like the product name is this amount of money and the amount of money would be halved.

            // const promotion = expensiveProducts.map(product => {
            //     return `the ${product.name} is now ${product.price / 2} pounds.`});
            // console.log(promotion);
// So we'll have an array of strings at the end inside promos.

// But now a quicker way to achieve this would be to use what's known as method chaining.
// So then notice that const expensiveProducts returns an array and const promotion works on an array.
// So because they both return arrays and they both work on arrays we can take advantage of method chaining.

const promos = products
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is now ${product.price / 2} pounds.`);
console.log(promos);

// We could do on other data types as well for example on strings.
// As long as the methods return a string and the method we're changing that method is going to be working
// with a string. The same principle applies.