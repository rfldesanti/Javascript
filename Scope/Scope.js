//The 'let' statement declares a block-scoped local variable
//Its used to initializing it to a value
let x = 1;

if (x === 1) {
    let x = 2;
    console.log("Here we are inside a 'if' statement, where x values is defined by 'let x = 2'");
    console.log("Therefore, the value of x is ");
    console.log(x);
    //expected output: 2
}

console.log("Here is the main body of the js document, where the value of x is ");
console.log(x);
console.log(" because it was defined as " + x + " by 'let' statement at the beggining of the document");
//expected output: 1

//You can declare a list of variables in the same statement

let n1 = 1, n2 = 2, n3 = 3;

console.log("A list of variables");
console.log(n1 + " " + n2 + " " + n3);