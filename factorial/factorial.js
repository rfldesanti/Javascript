const factorial = function fac(n) { console.log(n); return n < 2 ? 1 : n * fac(n-1)}

console.log(factorial(10));

//another factorial function, but, this time, with function declaration
//not function expression (like above)

function factorial2(n) {
    if ((n === 1) || (n === 1))
        return 1;
    else
        return (n * factorial2(n-1));
}

console.log(factorial2(12));
console.log(factorial2(7));