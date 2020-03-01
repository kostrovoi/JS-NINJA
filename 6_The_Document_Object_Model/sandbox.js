//console.log("sandbox.js");
//So the first thing we're going to do is store our reference to this element in some kind of variable.

//to grab an element from the dom or query with the DOM, so all we do is place a CSS selector
//in parentheses as a string to whatever element we want.
        //const para = document.querySelector("p");
//grab the first tag "p" and ignore the rest
//console.log(para);

// const para = document.querySelector(".error");
// console.log(para);

// const para = document.querySelector("div.error");
// console.log(para);
//This gets us a div with a class of error and that's unique.

//you always have the browser to help you out if you're not sure what selector is
//you can come to the browser and if you wanted to get a selected for something you can right click it,
//inspect it and then inside the elements tab highlight the element you want to select, 
//right click it, go to copy and go to copy selector and that gets us a unique CSS selector for that element.
// const para = document.querySelector("body > p:nth-child(6)");
// console.log(para);

//what if we wanted to grab multiple elements
//we can do that using a new version of the query selector
//It's called query selector all
//and it's going to get a reference to all of the selected tags and
//it's going to store it as a collection inside the our constant.
// const error = document.querySelectorAll(".error");
// const para = document.querySelectorAll("p");
// console.log(error[0], para[3]);
// //this node list looks very much like an array but it's not an array we can't use all the array methods,
// //Now much like an array we can also use for each.
// error.forEach(error => {
//     console.log(error);
// });
//node list are basically just a group of elements, group of nodes.

//So these two methods - querySelector to get a single element and querySelectorAll to get several elements.
//they in my opinion are the two best methods to select elements from the html document but 
//there are other ways to which can be useful at times.

//other ways to query the DOM

//the first way  is to grab an element by its I.D.
// const title = document.getElementById("page-title");
// console.log(title);

// //second way to get element by it's class name
// const error = document.getElementsByClassName("error");
// console.log(error);
// console.log(error[1]);
//but we cannot use the for each method on the HTML collection

//get elements by their tag name
//grab a reference to all the p tags in the document.
// const para = document.getElementsByTagName("p");
// console.log(para);
// console.log(para[3], para[10]);
// I tend to stick with using the query selector because it's a NODE List

//Adding and changing page content

// const para = document.querySelector("div > p:nth-child(1)");
// console.log(para);
// console.log(para.innerText);
// //It's a property.
// //If we want update this text, Well all we need to do is grab that text and set it equal to something else.
// para.innerText = "ninjas are awesome!";
// console.log(para);
//That was very simple to do which is reach and grab a reference to the paragraph then use that property.

//if you just wanted to append to the text you could use plus equals.
// para.innerText += ", ninjas are awesome!";
// console.log(para);

// const divs = document.querySelectorAll("div");
// divs.forEach(div => {
//     console.log(div.innerText);
//     div.innerText += " new text...";
// });



// const content = document.querySelector(".content");
// //console.log(content.innerHTML);
// content.innerHTML += "<p>new content</p>";
// //So plus equals to append or just equals to overwrite it.

// const people = ['mario', 'luigi', 'yoshi'];
// //we want to cycle through these people and we want to generate a little html template of snippet
// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });
// console.log(people);
//for each person were firing this callback function and we're taking the content over here which 
//is this div (.content) currently


//Getting and setting attributes

//First of all we need to get a reference to the element that we want to change.
//So that is going to go and grab the first anchor tag.


// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));
// //Now we need to pass it as an argument What attribute we want to get as a string.
// //And we get value of this attribute

// //what if we want to change the attribute or set an attribute.
// //mathod takes two arguments- 1 what attribute we change, 2- what is the value of this attribute.
// link.setAttribute("href", "https://www.thenetninja.co.uk");
// link.innerText = "The Net Ninja webiste";

// const mssg = document.querySelector("p.error");
// console.log(mssg.getAttribute("class"));
// mssg.setAttribute("class", "success");
// mssg.setAttribute("style", "color: green;");
////if we want to set an attribute to an html element that doesn't already exist we can do that.


//we want to be able to add extra styles instead of just completely overwriting them.
//we can use style property to add styles on the fly or remove them as well.
// const title = document.querySelector("h1");
// console.log(title.style);
// console.log(title.style.color);
// console.log(title.innerText);

// title.style.color = "crimson";
// console.log(title.style.color);
// title.style.margin = "50px";
// console.log(title.style.margin);
// //setting it to an empty string so it basically removes that property.
// title.style.margin = "";
// console.log(title.style.margin);

//Adding & removing classes

// const content = document.querySelector("p.error");
// console.log(content.classList);

// content.classList.add("success");
// console.log(content.classList);

// content.classList.remove("error");
// console.log(content.classList);


const para = document.querySelectorAll("p.challenge");
console.log(para);
para.forEach(element => {
    if(element.textContent.includes("error")) {
        element.classList.add("error");
    }
    else if(element.textContent.includes("success")) {
            element.classList.add("success");
        }
    // else {
    //     element.classList.remove("challenge");
    // }
});

//three methods that we can use on this classList property of elements to add, remove or toggle classes.
const title = document.querySelector("#page-title");
//console.log(title);
title.classList.toggle("test");
//title.classList.toggle("test");
