console.log("we implement real time validation behavior into our form.");
//There is an event we can react to called the key UP event and that's going to fire a callback function
//every time i type something.
//when I press a key down and then lift it back up that is the key UP event.
//So not the push down but the letting go the UP.

const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener("submit", e => {
    e.preventDefault();
    
    const username = form.username.value;
    
    if(usernamePattern.test(username)) {
        //positive feedback
        feedback.textContent = "username is valid!";
    } else {
        //feedback help info
        feedback.textContent = "username must contain letters only & be between six and twelve characters long!";
    }
});


//live feedback
//So to do this we need to get the username field.
form.username.addEventListener("keyup", e => {
    //Now inside the callback function I'm going to take the events parameter so let's pass that through.
    //console.log(e.target.value, form.username.value);
    //So these should both give us the same thing.
    //So these are just two different ways of getting the value.
    // e.target I just prefer to use this when we have access to it.
    if(usernamePattern.test(e.target.value)) {
        //console.log(e);
        console.log("passed");
        //let's give  a green border of this input field
        //we're going to use is the set() attribute method to apply classes.
        //we use set() because we want to completely overwrite the class from red to green and back.
        form.username.setAttribute("class", "success");
    } else {
        console.log("failed");
        //red border
        form.username.setAttribute("class", "error");
    }

});
//we have available on this event object right here when it's a keyboard event console.log(e);
//We get all of this information about what keys to being pressed when the event fires.
