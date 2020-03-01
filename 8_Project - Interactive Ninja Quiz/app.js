// bootstrap is a CSS and JavaScript library
// So we'll just be using the CSS part of it to make our designs look nice and I won't be touching the JS
// part of it at all because I don't want to take any shortcuts.
// so we can quickly prototype our designs with CSS classes and rules and not get too bogged down with
//  the design itself.

const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");

form.addEventListener("submit", e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 25;
        }
    });
    console.log(score);
    // my way is add a class .overallScore into span
    
    //show result on page, from Shaun.
    const result = document.querySelector(".result");
    scrollTo(0,0);
    result.classList.remove("d-none");
    // result.querySelector("span").textContent = `${score}%`;
    //what that does is look inside the scope of the class result for a spanTAG.
    
    let output = 0;
    const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    // console.log("hello");
    if(output === score) {
        clearInterval(timer);
    } else {
        output++;
    }
}, 10);

});


// we need to solve the problem of a user having to scroll to the top of the page to see their
// score after they click on submit because that behavior is not really obvious.
// They might not know that they have to do that.
// we need to figure out a way to automatically scroll to the top when they click on submit.
// to do that we're going to have to use a method stored on the window object.
// window object is the global object in JS, It's the mother of all objects.
// pretty much everything you do in front end Javascript is ultimately stored on this window object.
// we don't need to type out the window because it's automatically inferred.
// console.log("hello");
// window.console.log("hello"); //because it's on the global object.
// we don't need to write out window because its presence is inferred. присутствие подразумевается

//SetTimeout() is a method stored on the window object. it takes a callback function which will be an arrow function and
//  it fires this function after a certain amount of time.
// we specified that amount of time as a second argument 
setTimeout(() => {

}, 3000);
// I'd like to do one more thing I'd like to maybe animates this value of score.
// animate from zero to score very quickly, we'll use method setInterval()
// what happens in a setInterval() is the function keeps on firing every amount of time.
// this takes a callback function as the first argument.
// setInterval(() => {
//     console.log("hello");
// }, 1000); 

// But at some point we might want to stop the interval.
//clearInterval() is a method stored on the window object.
let i = 0;
const timer = setInterval(() => {
    console.log("hello");
    i++;
    if(i === 5) {
        clearInterval(timer);
    }
}, 100);

