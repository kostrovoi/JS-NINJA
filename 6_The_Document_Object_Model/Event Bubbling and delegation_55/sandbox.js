// console.log("hello");
//whatever element we click that element becomes the event target.
//Now when this happens javascript will look to see if we have any event listeners attached to this element.
//So it fires that callback function for that element, If there is an event listener attached to it.
//That event then bubbles up the DOM from the event target to its parent which in this case is the ul.
//Well now javascript will look to see if we have an event listener attached to this element and it will
//it will fire the callback function of that listener.
//If we do then the event bubbles up and it goes to the next parent and so forth.
//The event starts at the event target then it bubbles up to parents to see if there's any event listeners
//attached to those too and if there is then it's going to fire the callback function for those event listeners.

//we could stop the event from bubbling up with a method called stop propagation on the event object.
//propagation method stops the event bubbling up anymore to the parent.


// event delegation which can be really useful when we need to attach event listeners to
// many different elements like these LI right here.
//So that could start to affect the performance of our program.
//because it's a costly thing to attach event listeners to a lot of things.

const ul = document.querySelector("ul");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "something to do";
    ul.prepend(li);
    // ul.appendChild(li); //old school
});

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//   item.addEventListener('click', e => {
//     console.log('event in LI');
//     e.stopPropagation();
//     e.target.remove();
//   });
// });


ul.addEventListener("click", e => {
    // console.log("event in UL");
    //inside this event listener inside this callback function find out what thing was initially clicked.
    //we can do that by using e dot target.
    // console.log(e.target);
    console.log(e); //it contains tagName property.
    //we want to check is the event target Does that have a tag name of LI.
    
    if(e.target.tagName === "LI") {
        e.target.remove();
    };
});
//What matters is that we're clicking on LI and the event bubbles up to UL. It's a delegation.
//удалить любой LI и в консоли появится MouseEvent, со свойством target внутри которого свойство tagName.