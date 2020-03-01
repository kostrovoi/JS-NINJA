//copy is its own event in JavaScript and we can react to someone doing that on our Web page.
//лёгкая защита от копирования
const copy = document.querySelector(".copy-me");
//So this is listening for that event that where we right click and copy.

copy.addEventListener("copy", () => {
    console.log("OI! My content is copyrighted!");
});


//What I'm going to do is log out the x position of the mouse inside the box and the y position.
//let's grab the box class.

const box = document.querySelector(".box");
// I'll grab the box add an event listener and then inside that we want to listen now to a "mousemove" event.
//So every time the mouse moves inside this "box" then it's going to fire this callback function.

box.addEventListener("mousemove", e => {
    // console.log(e);
    // console.log(e.offsetX, e.offsetY);
    //we going overwrite text content in the "box".
    box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
//So this might be useful if you ever need to track the position or the cursor of where your user is looking
//on your web page.
});


//wheel event So as we scroll down.
//what do we attach this event listener to ??
//we want to attached to the document itself.
//I'm going to add an event listener directly to this document object.
//wheel event - That's the wheel on your mouse.

document.addEventListener("wheel", e => {
    //console.log(e);
    //wheelEvent had a property pageX, pageY and this is relative to the whole page.
    console.log(e.pageX, e.pageY);
});
//That's three different types of events that we can use. copy, mousemove, wheelEvent, but
//there's loads of other types of events too.