function map(f, a) {
    let result = [];
    let i;
    for (i = 0; i != a.length; i++)
        result[i] = f(a[i]);
    return result;
}

const f = function(x) {
    return x * x * x;
}

let numbers = [0,1,2,5,10];
let cube = map(f, numbers);
console.log(cube);

let z = 1;
let w = 4;

const zw = () =>  z + w;

console.log(zw());

function food(a) {
    return a + 100;
}

console.log(food(100));

let meal = (a) => a + 100;

console.log(meal(50));

const name = function () {return 'alef';}
console.log(name());

const name1 = () => 'alef';
console.log(name1());

function tell_me_name() {
    return 'alef';
}
console.log(tell_me_name());

(function() {
    return console.log('executed now!');
})();