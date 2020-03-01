// reduce method
// it doesn't return necessarily a new array.
// Instead it can return any single value which could be an array or it could be a number or a string but
// any value that you want based on the values in the array that we iterate over.


// const scores = [10, 20, 60, 40, 70, 90, 30];
// // how many of those scores are over 50 ?
// // so we iterate an array with reduce() and it returns a number, not a new array.
// // And that number represents how many scores are over 50.
// //reduce() Still iterates in array and it performs a callback function on each item in the array but 
// //it doesn't necessarily return an updated array.

// const result = scores.reduce((accumulator, current) => {
//   // takes in a callback function as an argument and inside this callback function we can take two parameters.
//     //  this accumulator you can think of as like a running total.
//     // So we'll check if that current variable is going to be over 50.
//     //Now this is OK but there's one thing missing because how do we know what accumulator To begin with?
//     // is it zero or empty object?
//     // So that has to be passed in as a second argument to the reduced function.
//     if(current > 50) {
//         accumulator ++;
//     }
//     return accumulator;
// }, 0);
// // So after this function right here we can pass in an argument which is the initial value of the accumulator
// //  so accumulator explicitly equal zero
// current it's current item in array.

// console.log(result);

const scores = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60}
];

// i want to add up the total score by just Mario.
const marioTotal = scores.reduce((accumulator, current) => {
    // current represents each item as we iterate the array
    if(current.player === "mario") {
        accumulator += current.score;
    }
    return accumulator;
}, 0);
console.log(marioTotal);

// That's how we can use the reduced method to return a single value and that value
//  is based on this accumulator which we can edit as we iterate the array.

//  find() method returns at the first value inside an array which passes a certain condition.
const scoresAnother = [10, 5, 0, 40, 60, 10, 20, 70];

const firstHighScore = scoresAnother.find(score => score > 10);
console.log(firstHighScore);
