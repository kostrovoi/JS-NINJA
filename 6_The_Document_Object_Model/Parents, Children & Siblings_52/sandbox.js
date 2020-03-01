//So now I'd like to introduce you to the idea of node relations.

//one type of relationship between different nodes or elements on a tree is the sibling relationship.
//So where we have elements on the same level with the same direct parent they are known as siblings.

//another type of relationship is the parent - child relationship.
//So these are two different kinds of relationships and we're going to use these now to traverse the DOM.

const article = document.querySelector("article");//grab this element to get a reference.
console.log(article.children);//DOM property
// take this HTML Collection and convert it into an array, than we can use an array methods.
//we take the array object built in into the JS,
//Then we use a method on that called "from" and then we pass in what we want to make an array from.
console.log(Array.from(article.children));
//This is not destructive. This returns a new value which is an array based on reference of HTML Collection.
console.log(article.children);//this still gonna be HTML Collection.
//So it doesn't alter the original value of this thing.

// Array.from(article.children).forEach(child => {
//     child.classList.add("article-element");
// });

//when we cycle through an array we take in as a parameter each individual item into this callback function,
//because each time we fire it we have access to the item we're iterating.
//we grabbing each child then we can perform some code for each one.
//So that's a good use of this relationship to get all of the elements inside a parent.

//Now I want to show you this the other way round.
const title = document.querySelector("h2");
//what I want to do is find out this elements parents.
console.log(title.parentElement);//it's article.
//then I could chain on a another parent element to go further up on the tree.
console.log(title.parentElement.parentElement);//get next direct parent, it's body.

//get next direct sibling.
console.log(title.nextElementSibling);
console.log(title.previousElementSibling); //h2 doesn't have, and return null.
console.log(title.nextElementSibling.parentElement.children);
//want to show you that it is possible we can use all of these different properties to traverse the DOM.
//sometimes this will help you to get selections if you wouldn't ordinarily be able to make just with
//one query selector.