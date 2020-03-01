// So the map method takes an array and then it maps that into a completely new Array.
// And by that I mean iterate an array, And it returns an updated value for each item in the array and
//  then it pushes that updated value into a new array.
// It NON destructive method, It doesn't directly change the original array.

const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const salePrices = prices.map(() => {
//     // inside this callback function we return the updated value.
// });

const salePrices = prices.map(price => {
    return price / 2;
});
//  we're returning a new value and that is going to be the price that we take in over two.
console.log(salePrices);
console.log(prices);


// So let's take away the curly braces first of all and scoop (сгребём) this up onto one line.
// const salePrices = prices.map(price => price / 2);

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
];
// I want to only change the price to half price if it's over 30 originally.
const saleProducts = products.map(product => {
    if(product.price > 30) {
        return {name: product.name, price: product.price / 2};
    } else {
        return product;
        // returns the rest objects, that price < 30
    }
});
        // we're creating a new object.
        // So we're returning now a new object based on the current object that we taking but 
        // we're slashing the price in half.
        // we can't do  product.price = product.price / 2;
        //              return product;
// объект - ссылочный тип и хранится в куче, а в стеке тока указатели на него.
//object is reference type and stored in heap, in stack stored pointer. we need to be careful when
//  create a new pointer,saleProducts in our case.
// because when we change the product price here we're Directly editing the products in products[] array!!
// so that would make it destructive, And we don't want to do that.
// We want to protect the original array and only update objects in the new Array.

console.log(saleProducts, products);
// the original array stays intact. -nevredimum, neizmennum
