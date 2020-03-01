// I want to start with this form at the bottom to add a new to do.
// so when we type something in here and then press enter, it reload the page instead 
//  adds that to do to the list.
// So to do this we first of all need to get a reference to this form field.

// So that gets us the reference to the form.
// Now we need to attach an event listener, a submit event listener to this form.
// So when "submit" happens we take the event as a parameter into the callback function.
// Now in here the first thing I'm gonna do is prevent the default action and that stops the page from
// reloading.
// underneath what we need to do is get what the user types into the field,
// we have form with class .add and input with name "add" So we can say form dots add to get that field
//  then we want the value from that.
// However if we type in a load of spaces before and after it then when we get the value with all symbols
// Now this could be an accident.
// So we want to be able to trim these spaces off before and after.
// Now we can use a method in JS to easily do that. The way we do it is by using dot trim on a string.
// and what that does is remove any whitespace before or after the string itself.
//  what we ultimately want to add to the DOM, to the page?
//  We want to add a list item.
// So what I'm going to do is create a function which is going to generate some html template and
// add that to the browser, added to the list.
// the reason I'm creating a separate function is because it makes our code more reusable.
// For example if we want to extend this app in the future so that there were other ways to add todos, and
//  you could just invoke this function and it's generate a HTML template an output.
// So it's reusable. it's inject template into the DOM.
// So we're going to pass in that text (from const todo) we're going to receive it as argument in 
// const generateTemplate.
// we could create elements using JavaScript methods like create element,
// But when you have to inject some kind of complex template a few lines of code it's much easier 
// is write a template string.
//  now we want to take this and inject it into the UL, we need a reference to that UL with class ".todos"
// We don't use equals "=" because that completely overwrite the current HTML, we use "+=" to append.
// lesson 79   6:00 min
// if I don't add anything and a press enter that still add something to the list now I don't that to happen.
// I want to check that a user has actually typed a value and the todo has some kind of length.
// Now I'd like it to clear the form, with a method reset() is reset all the input fields inside that form.

const addForm = document.querySelector(".add");

const list = document.querySelector(".todos");

const search =document.querySelector(".search input")

const generateTemplate = todo => {
    const html = `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <span>${todo}</span>
                  <i class="far fa-trash-alt delete"></i>
                </li>
    `;
    list.innerHTML += html;
    // Array.from(list.children).push(html);
    // console.log(typeof(list));
    // return list;
};

// Searching & Filtering Todos
// if we get a match, we don't do anything, but if don't get a vatch - we want to hide this "todo"
// from the show. we want to apply the class that "todo" and hides it with CSS.
// keyup event - we can attach it to the const search
// every time a user types a letter this function is gonna fire, i want get currently value.
const filterTodos = current => {
    // add filtered class
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(current))
        .forEach(todo => todo.classList.add("filtered"));

        // remove filtered class
        Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(current))
        .forEach(todo => todo.classList.remove("filtered"));
};

// add todos event
addForm.addEventListener("submit", e => {

    e.preventDefault();
    const todo = addForm.add.value.trim();

    console.log(todo);

    if(todo.length){
// check if that has length,  if this is a positive integer it's going to evaluate to true.
    generateTemplate(todo);
    addForm.reset();
    }
});

//  next step is to be able to delete todos when we click on the trashcan icon next to them.
// what we could do is query the DOM for all the trashcan icons and then attach an event listener to those.
// An easier and more efficient way would be to use event delegation 
//  so we could attach an event listener to the whole UL itself, not the individual list items.
// we create a callback func-n and  inside that function we can then detect if 
// the target element was in fact a trashcan.

// delete todos
list.addEventListener("click", e => {
    // We want to check if the thing that we click is in fact the trashcan, which have class ".delete"
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
        //  then we delete the parent of that trashcan which is the LI tag
    }

});


// filter todos event
search.addEventListener("keyup", e => {
    // e.preventDefault();
    const current = search.value.trim().toLowerCase();
    filterTodos(current);
});