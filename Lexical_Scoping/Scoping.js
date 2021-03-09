//Lexical scoping

//The code bellow shows that a inner function - a function inside other function -
//can utilize the variables declared on it's parent function (the function
// in which the inner function exists)
//Note that displayName() does not have any variable, but utilizes
//the variable declared on init() function
//This shows that a inner function have access to the variables of outer functions

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
init1(name2);

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

//Everything have an explanation: FUNCTIONS IN JAVASCRIPT FORM CLOSURES
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

//console.log(add5(2));
//console.log(add10(3));