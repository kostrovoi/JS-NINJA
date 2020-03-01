console.log("hello");
//object literal notation
//So this idea of objects is going to allow us to create these kinds of data structures which represent
//certain things in our code or web applications.
// JavaScript has some built in objects to the language,
//but it also allows us to create our own objects.

// let user = {
//     name: "crystal", //It's a key value pair and that makes up one property of this user object.
//     age: 30,
//     email: "crystal@thenetninja.co.uk",
//     location: "berlin",
//     blogs: ["why mac & cheese rules", "10 things to make with marmite"]
// };

// console.log(user);
// //if we want to access one of the properties from this object we can use dot notation.
// console.log(user.name);

// //what if we want to overwrite one of these values?
// user.age = 35;
// console.log(user.age);
// // that's how we can update a property on an object.

//  //we can also access and update properties using SQUARE BRACKET notation instead of dot notation!
//  console.log(user["name"]);
//  console.log(user["email"]);
//  user["name"] = "chun-li";
//  console.log(user["name"]);
// //this can be usefull if we passing some kind of variable in here.
// const key = "location";
// console.log(user[key]);
// console.log(typeof user);

//adding methods

// let user = {
//     name: "crystal",
//     age: 30,
//     email: "crystal@thenetninja.co.uk",
//     location: "berlin",
//     blogs: ["why mac & cheese rules", "10 things to make with marmite"],
//     login: function() {
//         console.log("user logged in");
//     }
// };

// //methods is a function but it's defined on an object.
// user.login();

//"this" keyword

// let user = {
//     name: "crystal",
//     age: 30,
//     email: "crystal@thenetninja.co.uk",
//     location: "berlin",
//     blogs: ["why mac & cheese rules", "10 things to make with marmite"],
//     login: function() {
//         console.log("user logged in");
//     },
//     logBlogs: function(){
//         //console.log(this.blogs);
//         console.log("this user has written these blogs: ");
//         this.blogs.forEach(blog => {
//             console.log(blog);
//         });
//     }//we cycle through those blogs and output each one.
// };
// user.logBlogs();
//for each is a method we can use on arrays.
//"this" keyword is a context object and it represents the context in which the current code is executed.
//inside the function logBlogs() therefore we can use that "this" keyword to refer to the object itself.

//So inside this methodNow "this" would represent the user object.
//invoke method .logBlogs() JS sets the value of the this keyword to the object that the method was used on.

//"this" is now going to be the window object (global object) because we used an arrow function 
// user ={
//     arrowFunc: () => {
//         console.log(this);
//     }
// };
//to refer to the actual object that the method is on we need to use a regular function and not an arrow func.

//there is actually an easier way to write these functions as regular functions inside methods.
// let user = {
//     blogs: ["why mac & cheese rules", "10 things to make with marmite"],
//     logBlogs(){
//         console.log("this user has written these blogs: ");
//         this.blogs.forEach(blog => {
//             console.log(blog);
//         });
//     }
// };//Regular functions but a shorthand version.

//in the array for each blog I'd like to store an object in each blog.
// const blogs = [
//     { title: "why mac & cheese rules", likes: 30 },
//     { title: "10 things to make with marmite", likes: 50 }
// ];
// console.log(blogs);

// let user = {
//         name: "crystal",
//         age: 30,
//         email: "crystal@thenetninja.co.uk",
//         location: "berlin",
//         blogs: [{ title: "why mac & cheese rules", likes: 30 },
//         { title: "10 things to make with marmite", likes: 50 }],
//         login() {
//             console.log("user logged in");
//         },
//         logBlogs(){
//             //console.log(this.blogs);
//             console.log("this user has written these blogs: ");
//             this.blogs.forEach(blog => {
//                 //console.log(blog);
//                 console.log(blog.title, blog.likes);//each blog here is going to represent the object.
//             });
//         }//we cycle through those blogs and output each one.
//     };
//     user.logBlogs();

//math objects
//math object has got several properties and methods all premade and bundled into it.
// console.log(Math);
// console.log(Math.PI);
// //we can use these different constants, but we can also use different methods.
// let area = 7.7;
// console.log(Math.round(area));
// // what round does is round the number to the nearest integer.
// console.log(Math.floor(area));
// //no matter what this decimal is it's going to floor it to seven.
// area = 7.1;
// console.log(Math.ceil(area));
// //ceil and this does exactly the opposite floor.
// area = 7.9;
// console.log(Math.trunc(area));
// //trunc - So all it does is take away the decimal and leave the integer.

// //random numbers
// //So we have access to a method on the math object called random.
// const random = Math.random();
// console.log(random);

// console.log(Math.round(random * 100));
//So this is a nice way to get a random number between 1 and 100.
//That is the math object is just one of JavaScript built in objects that we can use.

//primitive vs reference types

//in JavaScript primitive types are numbers, strings, boolleans, null, undefined, symbols.
//reference types are the object type - So any kind of object, object literal, arrays, functions, dates,
//and all other objects like the math object, etc.
//these all fall onto the object category the object type and they are all reference types.

//difference between these types is how they are stored and used in memory.

//when we create a primitive value and we assign it to a variable,
// that value is stored on something called the stack (STACK & HEAP) !
//the stack is just a stack of different values in memory and they can be accessed pretty quickly.
//But the space inside this stack is quite limited.
//when we make copy of primitive variable, we make a new copy of the value on the stack.

//when we create a reference type like an object literal or an array that is stored not on the stack,
//but on what is known as the heap!
//the heap has more space available so we can hold more complex types,
//but it's a bit slower too.

//when we store a reference type in a variable like an object
//it adds the object to the heap and then adds a pointer to the object on the stack.
//So when we access this variable in the future it knows to get this pointer in the stack
// which points to the heap  and it grabs that object for us.

//when we make a copy of a reference type We only make a copy of the pointer 
//on the stack which points to the same data on the heap. We don't make a copy of the actual data.

//primitive values

// let scoreOne = 50;
// let scoreTwo = scoreOne;
// //hat creates a copy of that value and stores it separately on the stack.
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//reference values
const userOne = { name: "ryu", age: 30 };
const userTwo = userOne;
//both pointers still point to this same object.
console.log(userOne, userTwo);
//So this object is stored on the heap and we get a pointer locked to this variable stored on the stack.

userOne.age = 40;
console.log(userOne, userTwo);
//now it changes both of them.

userTwo.name = "chun-li";
console.log(userOne, userTwo);