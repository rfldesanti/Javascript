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
//  

console.log('Initiang the "makeFunc" block');
function makeFunc() {
    var name = 'Best navigator';
    function displayName() {
        console.log(name);
    }
    console.log('The function is dead');
    console.log('This message will appear on console before "Best Navigator"');
    return displayName;
}

//console.log('Calling makeFunc() ' + makeFunc());

var myFunc = makeFunc();

//console.log('Here is myFunc() on log: ' + myFunc());
//myFunc();

//Everything has an explanation: FUNCTIONS IN JAVASCRIPT FORM CLOSURES
//A CLOSURE is the combination of a:
//        FUNCTION
//          and
//   THE LEXICAL ENVIROMENT
//  WITHIN WHICH THAT FUNCTION 
//      WAS DECLARED
//But, what is "the lexical enviroment"?
//THE LEXICAL ENVIROMENT consists of ANY LOCAL VARIABLES THAT WHERE IN-SCOPE
//at the time the closure was created

//another interesting example

/*function makeAdder(x) {
    return function() {
        console.log('x is ' + x);
        //console.log('y is ' + y);
        return x;
    };
}

var add5 = makeAdder(0);
//var add10 = makeAdder(10);

console.log(add5());
console.log(makeAdder(0));
//console.log(add10(1));*/