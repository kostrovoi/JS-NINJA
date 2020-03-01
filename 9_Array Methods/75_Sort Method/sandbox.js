//when we need to sort the data or rearrange it in a particular way in array.
//  I want to sort these in alphabetical order.
// example 1 - sorting strings
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

// the sort() method has an inbuilt algorithm which automatically sort strings alphabetically.
// It doesn't create a new array.
// this is destructive because it changes the original array.
names.sort();
console.log(names);

names.reverse();
console.log(names);


// example 2 - sorting numbers
const scores = [10, 50, 20, 5, 35, 70, 45];
// we should see these in order from lowest to highest.
scores.sort();
console.log(scores);

scores.reverse();
console.log(scores);

// let's pass in a compare function.
scores.sort((a,b) => b - a);
console.log(scores);

// But there is one caveat and actually it's only looking at the first number here
// and ordering them that way.
// we can overcome this.

// kind of like an opposite of sort which is the reverse method.

// example 3 - sorting objects

const players = [
  {name: 'mario', score: 20},
  {name: 'luigi', score: 10},
  {name: 'chun-li', score: 50},
  {name: 'yoshi', score: 30},
  {name: 'shaun', score: 70}
];

//  the inbuilt sort in algorithm that the sort method uses won't work because 
// it doesn't automatically know what to sort by. Is it going to sort the name or the score?
// So for more complex sorting like this we have to provide a function as an argument to the sort method.
//  this function is known as the compare function because it's used to compare values in our array.
//this arrow function takes two parameters, a and b these represent two consecutive elements inside the array.
// we going to compare a and b and decide which of those should come first.
// the way we do that inside this function is by returning a value and that value should either be
// zero or a positive or a negative number.
// Now if a should come first then we return a negative number for example minus one.
// If B should come first we return a positive number for example plus 1/
// or if the two elements are the same, and no reoredering is needed, Then we can just return zero.

// players.sort((a,b) => {
//   if(a.score > b.score){
//     return -1;
//   } else if(b.score > a.score) {
//     return 1;
//   } else {
//     return 0;
//   }
// });
// console.log(players);

// rewrite this bit

players.sort((a,b) => b.score - a.score);
console.log(players);

