const scores = [10, 30, 15, 25, 50, 40, 5];
// I want to filter out certain items from that array based on a certain condition.
// for example I might want to filter out all of the scores that are not at least 20,
// or 20 and over so I could do that using the filter method.

// So what the filter method does is iterate in array and it performs a check on each item in the array
// inside a callback function.
// So this callback function fires for each item in the array, perform some kind of check.
// And if that check passes then it's going to keep the item inside the filter the array,
//  if it doesn't pass then it it's going to filter out. It's going to remove it from the array.

// scores.filter();
const filteredScores = scores.filter(item => {
    return item > 20;
});
// this method is  Not DEStructive!  it doesn't actually alter the original array.

// const filteredScores = scores.filter(item => {
//     return true; //returns all items
//     return false; //return an empty array
// });

console.log(filteredScores);
console.log(scores);

// let's take more complex example where each item in the array is an object.
const users = [  
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
];
// Each object has got a name property and a premium property.
//we need to create variable, where we'll store our filtered array, because it doesn't change this directly.
const premiumUser = users.filter(user => {
    return user.premium;
    // premium property because that is either true or false.
    //  if this is true it's going to keep that user in the array.
    // if it's false it's going to filter them out.
});

const usualUser = users.filter(user => {
    if(user.premium != true){
       return user.premium;
    }
});

console.log(premiumUser, usualUser, users);
// that is a nice concise way to filter something out of an array.
// because we're just using a single statement we may shot in this into a single line.

// const premiumUser = users.filter(user => user.premium);

console.log(false != true);
