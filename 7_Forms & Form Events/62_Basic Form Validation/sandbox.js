const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");

form.addEventListener("submit", e => {
    e.preventDefault();

    //validation
    //we want to test this value what a user types in against a regex pattern using strict mode /^$/
    const username = form.username.value;
// /^$/  it means it can't have anything either side of this actual value that passes.
    const usernamePattern = /^[a-zA-Z]{6,12}$/;
    //remember the test() method it returns boolean.
    if(usernamePattern.test(username)) {
        //feedback good info
        feedback.textContent = "that username is valid!";
    } else {
        // feedback help info
    feedback.textContent = "username must contain letters only & be between six and twelve characters long!";
    }
});

//what we need to do is decide where we're actually going to feedback this information
//I think it would make sense to do it underneath the submit button
// so let's  create a div with a class of feedback in index.html file.
