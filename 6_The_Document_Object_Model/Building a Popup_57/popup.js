console.log("hello");
//We're going to let the user click the button to show the pop up.
//now by default we don't want any of this pop up to show on the page, 
//that's why we added css property "display:none;"" on wrapper.
//we only want to show that when we click the button.
const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");
//So let's grab the pop up wrapper and then inside the callback function will take this pop up
const close = document.querySelector(".popup-close");


//The callback function inside is going to eventually show the pop up.
//Now to do that we need to get a reference on the pop up to show it.
button.addEventListener("click", () => {
    popup.style.display = "block";
});


//but we also need to attach an event listener to this cross so that when we click this it closes the popup,
    //And also this overlay thing right here the wrapper itself (all wrapper that's not a popup).

close.addEventListener("click", () => {
    popup.style.display = "none";
});

//Just attach an event listener to this wrapper itself so if we click anywhere on the black overlay over
//here it's going to close the pop up as well. 
//так как wrapper contains the popup , то при клике в любое место попапа- попап закроется при обработчике ниже

// popup.addEventListener("click", () => {
//     popup.style.display = "none";
// });

//уточним место клика
popup.addEventListener("click", e => {
    if(e.target.className === "popup-wrapper") 
    {popup.style.display = "none";
}
});