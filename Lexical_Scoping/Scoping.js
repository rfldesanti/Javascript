//Lexical scoping

//The code bellow shows that a inner function - a function inside other function -
//(or NESTED FUNCTION)
//can utilize the variables declared on it's parent function (the function
// in which the inner function exists)
//Note that displayName() does not have any variable, but utilizes
//the variable declared on init() function
//This shows that a inner function have access to the variables of the outer functions

function init() {
    var name = 'Mozilla'; //declare a variable called 'name' with 'Mozilla' as value
    function displayName() { //creates an inner functions
        alert(name);//that utilizes the 'name' variable declared on it's parent function
    }
    displayName();
}
init();

// the same as above, but creating a function init() with parameter

var name2 = 'Arnold';

function init1(name) {
    var name = name;
    function displayName1() {
        alert(name);
    }
    displayName1();
}
init1('ANY NAME');

//Now, a very good example of CLOSURE in Javascript

//what happens in this code is the following:
//  A function called "displayName()"(a inner function) is created inside the
//  makeFunc() function (the outer function);
//  the makeFunc() returns the function displayName(), so
//  the statement 'var myFunc = makeFunc();' makes the
//  makeFunc() function executes and returns the displayName() function
//  to the myFunc var;
//  at this point, the makeFunc() function already concluded, but
//  the function returned to the var myFunc (displayName()) still
//  receives the value that exists on lexical scope of the outer function

console.log('Initiang the "makeFunc" block');
function makeFunc() {
    var name = 'Best navigator';
    function displayName() {
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();

//Everything have an explanation: NESTED FUNCTIONS IN JAVASCRIPT FORM CLOSURES
//A CLOSURE is the combination of a:
//        FUNCTION
//          and
//   THE LEXICAL ENVIROMENT
//  WITHIN WHICH THAT FUNCTION 
//      WAS DECLARED
//But, what is "the lexical enviroment"?
//THE LEXICAL ENVIROMENT consists of ANY LOCAL VARIABLES THAT WHERE IN-SCOPE
//at the time the closure was created;

//In the example above, myFunc is a reference to the instance of the
//function displayName(), that is created when makeFunc() is run;
//the instance of displayName() maintains a reference to its lexical enviroment
//within which the variable name exists;
//That's why when myFunc is invoked, the variable name remains available for use!

//another interesting example

console.log("Initianing block makeAdder");
function makeAdder(x) {
    console.log("If var xxx = makeAdder() calls the function, then this message should appear...TWICE!");
    return function(y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5);

console.log(add5(2));
console.log(add10(3));

//Now i'ts very easy to understand what is happening in the code above
//when var add5 receives the makeAdder() value, two things happens:
//  1 - the makeAdder() functions runs - the message showed up on console is a proof of it;
//      (and this is kind of obvious, since any "[something_function]()" is a calling
//      to a function);
//  2 - the var add5 (or add10) received the returned value of the function makeAdder(),
//      that is another function - with a parameter -.In another words, like the other code
//      above, var addx BECOMES a function!
//      the function that is returned receives a parameter, and the paramater must be
//      passed by the var "new" function
//      look what happens when any argument is passed to the function (line 87)
//      - the function add5 just returns...nothing else than the function itself!
//      Now, if we look at the lines 89 and 90, we are passing arguments to the function
//      that is returned by the function makeFunc(); so, this arguments becomes the
//      "y" parameter in the function "function(y)"
//      since the add5 and add10 are closures - combination of functions and its lexical
//      enviroment - the lexical enviroment of the outer function to which the "function(y)" 
//      belongs - and, therefore, the functions add5 and add10 - make the x parameter still
//      be available to the inner function; that's why it's returned the sum of x - the 
//      parameter of the outer function - and y - the inner function\add5\add10

//Let's make some tests

console.log('Initiating the tests block')

function goodPhrase(intensity) {
    var subject = 'I really';
    var like = 'like to';
    return  function (food_or_instrument) {
        if (food_or_instrument == 'lasagna') {
            return subject + " " + like + " eat " + food_or_instrument + " " + intensity;
        } else {
            return subject + " " + like + " play " + food_or_instrument + " " + intensity;
        }
    }
}

var I_Love = goodPhrase("a lot!");

console.log(I_Love("lasagna"));