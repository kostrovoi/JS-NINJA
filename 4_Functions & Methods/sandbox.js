//function declaration 

// greet();
// function greet(){
//     console.log("hello friends!");
// }
// greet();
// greet(); //calling the function or also invoking the function.

// //function expression, when we store a function inside a variable. 

// // speak(); //error
// const speak = function() {
//     console.log("good day");
// }; // when we use function expression we need a SEMICOLONS AT THE END OF THE CODE BLOCK !!!!
// speak();
// speak();
//between them there is a subtle difference when it comes to something called hoisting in JavaScript.
// they're all declared before the rest of our javascript and it does this with function declarations but...
//...BUT it doesn't do this with function expressions!
//only functions declarations are hoisted at the  top of code !

//so really I think you should declare something first and then use it to keep a logical flow.

//arguments & parameters

// const speak = function(name) {  //when we recieve the value inside the function, it's called PARAMETER
//     console.log(`good day ${name}`);
// }; // expression needs a SEMICOLONS AT THE END OF THE CODE BLOCK !!!!
// speak("mario");//pass an ARGUMENT - the value into the function call
//This variable (name) has the scope of this function and can only be used inside it.

// const speak = function(name, time)//ORDER! 
//                                 {
//     console.log(`good ${time} ${name}`);
// }; // SEMICOLONS AT THE END OF THE expresiion!
// speak("mario", "day");//the order of the arguments must match the order of the parameters.

// const speak = function(name = "Luigi", time = "night"){//we can give these parameters some default values
//     console.log(`good ${time} ${name}`);
// }; // SEMICOLONS AT THE END OF THE expresiion!
// speak();//ORDER!
// speak("shaun");
// speak("shaun", "day");
//that is how we passing arguments into a function and how we receive those as parameters inside the function
//so that we can use them.

//returning values

// const calcArea = function(radius){
//     let area = 3.14 * radius**2;
//     //console.log(area);
//     return area;
// };
// const area = calcArea(10);
// console.log(area);

//we don't need to store this in a local variable first of all we can just return it directly.
// const calcArea = function(radius){
//     return 3.14 * radius**2;
// };   
// const area = calcArea(10);
// console.log(area);

//arrow functions

//regular function can turn into arrow fuction
            // const calcArea = function(radius){
            //     return 3.14 * radius**2;
            // };
// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// };
// const area = calcArea(10);
// console.log(area);

//Now we can simplify this even more.
//when we have only one parameter we can take away these parentheses
//Likewise if there's no parameters we also need the parentheses there.
//when we just have a single return like this on one line, we can take away the return keyword.

// const calcArea = radius => 3.14 * radius**2;
// const area = calcArea(10);
// console.log(area);
//major difference between a regular function and an arrow function, we covered it later on.

// const greet = function(){
//     return "hello friends";
// };// regular function
// const greet = () => "hello friends"; // arrow func
// const result = greet();
// console.log(result);

// const bill = function(products, tax) {
//     let total = 0;
//     for(i =0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

//arrow func
// const bill = (products, tax) => {
//     let total = 0;
//     for(i =0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };
// console.log(bill([10, 15, 30], 0.2));// array of price, and tax 0.2 %

//functions vs methods
//In both cases we do still use parentheses and in both cases we can pass in arguments to them.

//Now what distinguishes methods is the way that we invoke them and where they are defined.
// const name = 'shaun';
// //functions
// const greet = () => "hello";
// let resultOne = greet();
// console.log(resultOne);

// //methods
// //the method is invoked using dot notation.
// let resultTwo = name.toUpperCase();// using dot notation
// console.log(resultTwo);
// //so methods are functions but their functions which are associated with an object or data type

//forEach method & callbacks

//we can also pass in a function as an argument.
//And when we do this the function we putting is called a callback function.

// const myFunc = (callBackFunc) => {
//     //do something
//     let value = 50;
//     callBackFunc(value);
// };

// myFunc(function(value) {
//     console.log(value);
// });//regular func
// //the general premise of a callback function we pass a function into something another function as an argument
// myFunc(value => {
//     console.log(value);
// });//arrow func

//                  let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
// people.forEach(function(person) {
//     console.log(person);
// });//for each element inside that array it calls - callback function.
// So every time we find a function for each individual element we get that element as our first parameter.
// So again all we're doing is iterating through this array using for each and firing a callback function.

//let's convert this into an arrow function
// people.forEach((person, index) => {
//     console.log(index, person);
// }); //we can also take in a second optional parameter and that is the index of the element
//So there are two different parameters We can pass into this function.

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// };
// people.forEach(logPerson);

//the general premise of a callback function we pass a function into something another function as an argument

//Callback Functions in Action

//get the reference to the "ul"

const ul = document.querySelector(".people");
const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
let html = ``;
// people.forEach(function(person) {
//     //create an html template
//     html += `<li style="color : purple">${person}</li>`;
// });//regular function
people.forEach(person => {
    //create an html template
    html += `<li style="color : purple">${person}</li>`;
});//arrow function
//for each person  we're adding this snippet, this template onto the html
ul.innerHTML = html;