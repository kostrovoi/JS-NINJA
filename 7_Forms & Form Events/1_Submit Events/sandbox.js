//So we could set up an event listener to react to this submit events.
//And that's when we could go about reading the values inside the form in the different fields and 
//capturing that data.

//So what we want to do is listen for this submit event.
//in previous chapter What we did is attach an event listener to the thing that is being clicked.
//when we're listening for a submit event we do not attach our event listener to the submit but instead
//we attach it to the whole form because at the end of the day it's the form that is being submitted!

const form = document.querySelector(".sign-up");
//const username = document.querySelector("#username");

//the event we're listening for is a submit event when the form is submitted i.e. when a user clicks
//on submit button or if a form field is in focus, If users press enter that fires a submit event as well.
//AND that's one of the benefits of using a submit event instead of a click event.(key "enter" by default)

// what actually happens when a form is submitted in the html document?
//The default action is that the page refreshes.
//So what we want to do is prevent that default action. We don't want the page to refresh.
//We want to handle the submit event in our own way not the default way of a browser.
//What we do is take the event object and we use a method called "prevent default".
form.addEventListener("submit", e => {
    e.preventDefault();

    //get the data from the form field, First of all we need to get a reference to this field.
    //there is a couple of ways we can do that.
    //1 is use querySelector, and So now we have a reference to that.
    //when we get an input field like this from the DOM we can use a property on it called "value".
    //console.log(username.value);

    //2 We don't always have to though create a separate query selector for an input field if we already have
    //one for the form.
    //if we have input fields inside that form which have an I.D.W can just use dot notation to
    //grab these fields.
    //I.D. is a direct reference to this input field.
    console.log(form.username.value);

    //and we can also do this with "name" html attribute. so it doesn't matter whether you give ID or
    // name attribute. Either way it's going to look for that when we use dot notation.

});

//now the next logical step is to make sure that the data a user types in is valid.
//regular expressions
//we have to implement our own checks to make sure that 
//the value, that a user types in, matches the pattern that we want. 
//Now to do this We're going to be using matching patterns called regular expressions or regExp for short.
//Now what regExp allow us to do is type out character patterns to represent certain values. 
//we can use the regular expression to make sure that what a user has tapped into the form field
//matches what we have specified.
//if you want to learn more about it than I do have a full free series on my YouTube channel with regExp.
//now we perform a simple validation.
//go to the site regex101.com
//notice two fields one for our regular expression where we type the pattern that we want to match and
//then the test string field down here.
//Imagine this is the input field that a user typed into.
//we'll  see if it matches or passes this regular expression.
// notice first of all regular expressions start with a forward slash And they end with a forward slash.
//  /^ninja$/   it matches only if nothing before ninja and nothing after.
//But what if we're a bit more flexible? What if we want to match any letter from a to z ?
//we'd use a character set for that and we create a character set using these square brackets, 
//then inside the character set we say what we want to match. /^[a-z]$/ a single character.
// single character with capital letters /^[a-zA-Z]$/
//What if we want to match a word that's between six and 10 characters long /^[a-zA-Z]{6,10}$/
//add numbers /^[a-zA-Z0-9]{6,10}$/
// there's one last thing I want to show you and that is the dots or the period,
//Now that has a special meaning in regular expressions. The dot is any character. /^.{6,10}$/
//So that's the basics of regular expressions it's going to be enough for us at the minute.

