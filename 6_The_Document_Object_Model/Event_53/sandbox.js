//Events
//so very often changes we make are in reaction to a user's action on a web page.
//there are many type of events. Look MDN docs.
//what we want to do now is react to a user interacting with this web page,
//we're going to react to a user clicking on this button.
//there is  three steps involved to set this up.

//First of all we need to query the DOM to get the element where we expect the event to happen (button).
//The second thing to do is add what's called an event listener to the element and
//and an event listener actively listens for use events and a specific element.
//The third step is to write a callback function which will fire when that event happens.

//So let's set this up in our code.

// const button = document.querySelector("button");
// //we have a reference to that first of all.
// button.addEventListener("click", () => {
//     console.log("you clicked me!");
// });
//this method actively listens to certain events on this button.
//we need to specify as the first parameter in this method what event we want to listen to.
//the second argument we need to pass in here is a callback function


const items = document.querySelectorAll("li");
// that's going to get us, remember, a node list of these LI tags.
//the first step is to get a selection of the items that we want to attach the event listener to.
console.log(items);
// items.forEach(item => {
//     item.addEventListener("click", () => {
//         console.log("item clicked");
//     });
// });


items.forEach(item => {
    item.addEventListener("click", e => {
        //console.log(e);
        // console.log(e.target);
        e.target.style.textDecoration = "line-through";
    });
});
//we need to cycle through all of these li tags and attach an event listener to each one of them.
//when user clicks on the LI tag eventually we're going to delete that from the to do list.

//So when an event occurs in the browser like a click event inside this callback function, the browser
//automatically gives us a parameter called E or event it is an event object I call it E.
//this E contains information about the event that happened on the web page,
//so this is an event object created by the browser about the event that happened.
//the one that we want to use is the target property of mouseEvent, to get which element was clicked.
// e.target is more helpful because we can use even when we're not cycling through something,
//And also it's going to help us with event delegation.

