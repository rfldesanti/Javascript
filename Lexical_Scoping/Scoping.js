//Lexical scoping

//The code bellow shows that a inner function - a function inside other function -
//can utilize the variables declared on it's parent function (the function 'above' it)
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

//this is SO MUCH CRAZY!
//The code bellow is very strange
//Look that the function first return the displayName function - with the correct variable - 
//and the RUNS THE FUNCTION!

function makeFunc() {
    var name = 'Best navigator';
    function displayName() {
        console.log(name);
    }
    console.log('The function is dead');
    console.log('This message will appear on console before "Best Navigator"');
    return displayName;
}

var myFunc = makeFunc();
myFunc();