const form = document.querySelector(".signup-form");

form.addEventListener("submit", e => {
    e.preventDefault();
    console.log(form.username.value);
});

//testing regex
const username = "vitalii3210";

//what I want to do is create a regular expression to make sure that this user name is at least six
//characters long which it isn't. And also check that it's only lowercase letters.

//So we're going to create a regular expression and store it in a constant.
// const pattern = /[a-z]{6,}/;
//Now in this case I don't want an upper limit, I just want it to be at least six characters long.
// and then the comma and this means at least six characters long and any length beyond that.

//if we want to use a strict mode (string contains only letters), then we used Dollar and the carrot.

const pattern = /^[a-z]{6,}$/;

//in JS We can use a method called test on a pattern.
//Now we want to test the username and what this is going to do is return a boolean either true or false.
// let result = pattern.test(username);
// console.log(result); //return boolean
// if(result) {
//     console.log("the regex test passed :)")
// } else {
//     console.log("the regex test failed :(");
// }
//we took the pattern and we used the method on the pattern.

//another method
let result = username.search(pattern);
console.log(result); //returns an enteger

//So the match is at position 0 , and -1 If we don't get a match. When we use carrot and $ in regex.


//without it return index of the first letter of the word that matches.
// const username = "3210vitalii3210";
// const pattern = /[a-z]{6,}/;
// let result = username.search(pattern);
// console.log(result);


//JS is zero based. It's a bit like array notation the position of the match 
//is the first position in the string.
//Now what this does is return to as an integer and that integer is going to be the position at which
// it finds this match.
//So we take the actual things that we're testing now.
//This time we're taking the string and we're using a method on the string.
//So the method we use is search and we pass in the rejex that we want to test against.
