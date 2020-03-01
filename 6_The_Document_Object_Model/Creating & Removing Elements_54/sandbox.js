//how do we delete something from a Web page or from the DOM ?
const ul = document.querySelector("ul");
//ul.remove();
const button = document.querySelector("button");
button.addEventListener("click", () => {
    //ul.innerHTML += "<li>something new</li>";
    //And then when we click on this button It's going to append to innerHTML this element.
    const li = document.createElement("li");
    //we've not actually inserted it into the web page. So we just have a reference to it.
    //created an empty tag then give it a content. 
    li.textContent = "something new to do";
    //And now what we need to do is actually inserted into the web page, insert into the DOM.
    //there's a couple of different ways we can do this.
    //The first way is to append it to the parent.
    //And the second way is to prepend it to the parent.
    // ul.append(li);
//when we add something new if we want it to go to the top instead of append we can use prepend method.
    ul.prepend(li);
});


//not optimal code go further, it's need a refactoring.
//So once we add the new allies we're not attaching an event listener to them,
//we only attach event listeners to the initial li tags.
const items = document.querySelectorAll("li");
items.forEach(item => {
    item.addEventListener("click", e => {
        e.target.remove();
    });
});
//we can combat this using event delegation.


