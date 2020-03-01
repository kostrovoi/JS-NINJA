// for loops

// for(let i = 0; i < 5; i++){
//   console.log('loop: ', i);
// }
// const names = ['shaun', 'mario', 'luigi'];

// for(let i = 0; i < names.length; i++){
//   // console.log(names[i]);
//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// } //cycling through an array or some data as iteration And each iteration is one cycle through.

//while loops

// let i = 0;
// while(i < 4){
//     console.log("in loop", i);
//     i++;
// }

//const names = ['shaun', 'mario', 'luigi'];
// let i = 0;
// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

//do while loops
// sometimes you want the code to run at least once. Even if condition is not true.
// let i = 3;
// do{
    
//    console.log("val of i is", i);
//    i++; 
// } while(i < 5);

 //if statements

//  const age = 25;
//  if(age > 20) {
//      console.log("you are over 20 years old");
//  }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

// if(ninjas.length > 3) {
//     console.log("that's a lot of ninjas");
// }

//const password = "p@ssworddd";
// if(password.length >= 8) {
//     console.log("that password is long enough!");
// }
// const password = "p@ss";
// if(password.length >= 12) {
//     console.log("that password is mighty STRONG!");
// } else if(password.length >= 8) {
//     console.log("that password is long enough!");
// } else {
//     console.log("that password is NOT long enough!");
// }

//logical operatoas OR || and AND &&

// const password = "p@ssw";
// if(password.length >= 12 && password.includes("@")) {
//     console.log("that password is mighty STRONG!");
// } else if(password.length >= 8 || password.includes("@") && password.length > 5) {
//     console.log("that password is strong enough!");
// } else {
//     console.log("that password is NOT long enough!");
// }

//logical NOT
// console.log(!true);
// console.log(!false);

// let user = false;// imagine user don't log in
// if(!user) {
//     console.log("you must be logged in to continue")
// } //block runs only if condition is true

//break and continue

// const scores = [50, 25, 0, 30, 100, 20, 10];
// for(i = 0; i < scores.length; i++) {
//     if(scores[i] === 0) {
//         continue;
//     }// continue the next iteration and ignore the rest code that down it (miss element in array)
//     console.log("your score", scores[i]);
//     if(scores[i] === 100) {
//         console.log("congrats, you got the top score!");
//         break;
//     }
// }

//switch statement instead many sets if else statements
//const grade = "D";
// switch(grade) {
//     case "A":
//         console.log("you got an 'A' !");
//     case "B":
//         console.log("you got an 'B' !");
//     case "C":
//         console.log("you got an 'C' !");
//     case "D":
//         console.log("you got an 'D' !");
//     case "E":
//         console.log("you got an 'E' !");
//     default:
//         console.log("not a valid grade");
//     }

// const grade = "D";
// switch(grade) {
//     case "A":
//         console.log("you got an 'A' !");
//         break;
//     case "B":
//         console.log("you got an 'B' !");
//         break;
//     case "C":
//         console.log("you got an 'C' !");
//         break;
//     case "D":
//         console.log("you got an 'D' !");
//         break;
//     case "E":
//         console.log("you got an 'E' !");
//         break;
//     default:
//         console.log("not a valid grade");
//     } //switch use strict comparison !!!  5 !== "5"

//variables & block scope - the area in which a variable value is relevant.

// let age = 30; //it has global scope
// if(true){
//     //age = 40;
//     let age = 40;//We're allowed to redefine the variable inside a code block and 
//                 //it's recreate this variable but it gives it local scope.
//     let names = "shaun";//giving a local scope this variable
//     console.log("inside 1st the code block", age, names);
// if(true) {
//     //let age = 50;
//     var test = "helloooo";
//     console.log("inside 2st the code block", age);
// }//in the nested code block JS is taking the most recently defined value.
// }
// console.log("outside the code block", age, test); //bring inside variable names - error
//     //the same rules of scope apply to const
//     // old variable var ignores the block scope
