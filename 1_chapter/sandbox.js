// console.log();
// This is actually called a "REPL" - read, evaluate, print, loop. That's what the javascript console is here.
// It reads in whatever you type, it evaluates it, it prints it... and
//  it loops meaning that I can do it continuously.

// we can't simply open a JS file in the browser to run it.
// We have to open an HTML file which has a script or it includes our JavaScript file.
// The browser doesn't know how to handle just a plain JavaScript file, but
// it knows how to handle an HTML file that includes a javascript file.
// Just make sure your name in .html is matching whatever you name the file .js
// So if we want something to be explicitly printed out we have to use a method console.log()
// and all that it does is it prints something to the console.
// This method often used for debugging and trying to understand what's going wrong somewhere or
//  just to print stuff.

// let char = "Hello console!";
// console.log(char)
// console.log(char[1]); //we can use those indices to access individual characters.
// console.log(char[0]);
// console.error("show me how an error looks, when we use method .error");

// console.log(char.length);
// //So the length is always one greater than the last index
// // Strings are not the only things that are indexed by position in JS, We'll see arrays later on.
// console.log(char[14]);
// console.log(char[13]);
// console.log(char[char.length - 1]);

// // to change individual characters you cannot do that in a given string, it's immutable.
// console.log(char[13] = ".");
// console.log(char[13]);

// // Methods are built in pieces of functionality, built in actions that can be performed on any string,
// // in our case. Case - и случай и регистр, по ситуации.
// console.log(char.toUpperCase()); //к верхнему регистру. we call the method name with empty parentheses.
// console.log(char);
// let result = char.toLowerCase();// к нижнему регистру
// console.log(result, char); //some methods change variable value, some don't
// char = char.toUpperCase();// now variable been updated
// console.log(char.length);
// char = char + "      ";
// console.log(char.length);
// char = char.trim().toLowerCase(); //we can chain on another method 

// trim() only removes the leading and trailing spaces while keeping all other spaces intact.

// Remember that the strings are immutable. We can't change any character manually.
// if we uppercase a string we are creating a new string or we're getting a reference to
// a new string.
// So if we wanted to save that to the variable we could do char equals char.toUpperCase()
// or create a new variable for new literal.


//some methods require an additional information, methods accepts arguments that modify their behavior.
// we pass these arguments in the parentheses.
// let email = "mario@co.uk";
// console.log(email);
// let index = email.indexOf("@");
// console.log(index);//this method always returns a number
// index = email.indexOf("rio");//index of first character
// console.log(index);
// index = email.indexOf("R"); // it's case sensitive - чувствителен к регистру
// // -1 is the representation of not found (false)
// // we can write code that checks if index of something equals negative one
// if(email.indexOf("@") == -1){
//     console.log("enter valid email");
// }
// console.log(index);
// index = email.lastIndexOf("o");
// console.log(index);

// console.log("pecan pie"[7]);
// console.log("pop"[3]);
// console.log("garbage!!!".slice(2).replace("b", ""));
// let userInput = "       ToDD@mail.ru   ";
// let cleanedInput = userInput.trim().toLowerCase();
// console.log(cleanedInput);
// console.log(cleanedInput.indexOf("mail"));
// console.log(cleanedInput.indexOf("Mail"));

// console.log(typeof null);


// string escape
//  they are combinations of characters that have a different meaning within a string
//  than the normal character would have. -экранирование символов

//  The Math Object & Random Numbers
// math dot floor which expects us to pass in a number
// console.log(Math.floor(3.99)); //it just chops that off 
// console.log(Math.round(4.5));
// console.log(Math.round(4.4));
// console.log(Math.pow(4, 2));
// console.log(Math.random()); // from zero to 1 , not including 1
// console.log(Math.floor(Math.random() * 6)); // from 0 to 5
// console.log(Math.floor(Math.random() * 6)); // from 0 to 5
// // Which I could use for a dice roll but most dice go from one to six.
// console.log(Math.floor(Math.random() * 6) + 1); // from 1 to 6

// The only built in way of getting a random number is math dot random which always gives us a decimal from
//  0 to 1.

//  typeof operator
// console.log(typeof true);
// let mystery = "99 balloons";
// console.log(typeof mystery);
// console.log(typeof null);

// This is allegedly a mistake a weird quirk that has worked its way into the language over time.
// typeof is an operator, and it just has one side.
//  for instanse , unlike the operator "+" , that has two sides - left and right.

// parseInt & parseFloat

// So the string contains a number hopefully and you want to extract that number as a numeric value
// console.log(parseInt("24.999999")); //it just gives us the integer part
// console.log(parseFloat("24.999999")); 
// // it's going to pass the entire float, the entire decimal number in the string
// console.log(parseFloat("24.999999") + 0.00001); 

// console.log(parseFloat("$24.9")); 
// // It's not expecting any non number characters any non digits in there.

// // So it's kind of odd if it detects a number at the beginning if the first character is a valid digit
// // then it will keep going until it can't go any further.
// console.log(parseFloat("29,9cents")); //only dot not comma
// console.log(parseFloat("                   29.9cents")); 
// console.log(parseFloat("29.9cents")); 


// Math

// let radius = 10;
// const PI = 3.14;
// console.log(radius, PI);
// //math operators +, -, *, /, **, %
// let result = radius % 3; //remainder
// console.log(result);
// result = PI * radius**2  // the formula for working out the area of a circle, ** power of
// console.log(result);
// //order of calculation - B I D M A S
// // Brackets  Indices(индексы) Division Multiplication Addition Subtraction
// radius = radius + 2;
// console.log(radius);
// radius /=2;
// console.log(radius);
// radius *=2;
// console.log(radius);
// radius = radius / "hello"; // NaN - not a number
// console.log(radius);
//     result = "hello" + radius; // old way to summ string with number
//     console.log(result);


                //arrays

// let ninjas = ['shaun', 'ryu', 'chun-li'];//store one data type in array is good practice
// console.log(ninjas);
// ninjas[1] = "ken"; // changing unit in array by it's index
// console.log(ninjas);
// console.log(ninjas.length);
// //array metods
// let result = ninjas.join(',           '); //adding wathever in output, the array not changed
// console.log(result);
// result = ninjas.indexOf('ryu'); // ryu was replaced by ken so we've got error -1
// console.log(result);
// result = ninjas.indexOf('ken');
// console.log(result);
// result = ninjas.concat(['ryu', 'vito']); // concat two arrays, this method don't change the variable ninjas
// console.log(result);// some methods don't alter the original value.
// result = ninjas.push('ken'); //push method changed our array, now we have two ken in array
// console.log(result); //returns value -the length of the new array
// console.log(ninjas); //returns array
// result = ninjas.pop(); //takes off the end value ---method returns the value it pop off from array
// console.log(result); 
// console.log(ninjas);


// // null & undefined
// let age = null;// ew gives explicitly empty value
// console.log(age, age + 3, `the age is ${age}`);


            // booleans & comparisons

//  console.log(true, false, 'true', 'false');
// let email = 'luigi@thenetninja.co.uk';
// let names = ['mario', 'luigi', 'toad'];
 
// let result = email.includes('@'); //method can find a symbol inside the string, variable includes this symbol
// console.log(result);
//     result = email.includes('!');
//     console.log(result);
// result = names.includes('mario'); // method can find a string inside array, does variable includes this string?
// console.log(result);


// Controlling Program Logic and Flow


//comparison operators

//let age = 25;

// == It checks for equality of values but it doesn't care about type.
// It's going to coerce both values to a common type and then compares them.
// Now this can lead to some unexpected results.

// console.log( 7 == "7");
// console.log(0 == "");
// console.log(0 == false);
// console.log(0 == undefined); //only this false
// console.log(null == undefined);
// behind the scenes JS is converting these to a similar type and it decides they are equal.

// console.log(age == 25);// is var equal to 25?
// console.log(age == 30);// is var equal to 30?

// console.log(age != 30);// is var  NOT equal to 30?
// console.log(age != 25);// is var NOT equal to 25?

// console.log(age > 20);// is var over than 20?
// console.log(age < 20);// is var less than 20?

// console.log(age >= 25);// is var greater or equal to 25?
// console.log(age <= 25);// is var less or equal to 25?

// console.log(false==false); //true
// console.log(false===false); //true


// console.log("A" < "a"); //So all uppercase letters are less than any lowercase letters.
// console.log("a" < "b");

//It has to do with something called Unicode
// all that you need to know is that every character in JS 
// when it's in a string has a unicode representation it has a number behind it.

// console.log("a".length < "ab".length); //we're not usually just directly typing hardcoded values.

// let names = 'shaun';// sign == abstract equality or loose comparison
// console.log(name == 'shaun'); // error in the name of var
// console.log(names == 'shaun');//abstract equality- values type is not considered when we perform the comparison
// console.log(names == 'Shaun');//capital letter in string, so not equal
// console.log(names > 'cristal');//so later letters in the alphabet are greater 
//                                 //than earlier letters in the alphabet 
// console.log(names > 'Shaun');// a lowercase letter  is greater than an uppercase letter (than its counterpart)
// console.log(names > 'Zoi');// a lowercase letter  is greater than ANY uppercase letter.

// loose comparison (different types can still be equal)

// age = 25;
// console.log(age == 25);
// console.log(age == '25');// the string is implicitly converted into a number
// console.log(age != 25);
// console.log(age != '25');

// strict comparison (different types cannot be equal)
// triple equals cares both about value and type.

// console.log(age === 25);//is age the same value and type to this?
// console.log(age === '25');
// console.log(age !== 25); //false, cause it's equal
// console.log(age !== '25');// true, cause types NOT equal




//explicit type conversion
/*
let score = '100';
// console.log(score + 1);
// console.log(typeof score);
 score = Number(score);// turns score into a number - blue ligth i console
 console.log(score + 1);
// console.log(typeof score);
let result = Number('hello');//NaN
console.log(result);
result = String(50);// turns into string - in console it's gray
console.log(result, typeof result); //gray ligth in console
console.log(typeof result);
result = Boolean(100);//turns into boolean, true
console.log(result, typeof result);
result = Boolean(-100);//true
console.log(result, typeof result);
result = Boolean(0);// number zero is false
console.log(result, typeof result);
result = Boolean('0');//strings of any length they are all truth
console.log(result, typeof result);
result = Boolean('');//empty string is false
console.log(result, typeof result);
*/
/*
there's also something called implicit type conversion which javascript does behind the scene!
Javascript changed the type of our values behind the scene before comparing them and that will come
into play in other areas too in the future.
*/


