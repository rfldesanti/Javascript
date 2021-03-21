function greeting(name) {
    alert('Hello ' + name);
}

function processUserIpunt(callback) {
    var name = prompt('Please enter your name:');
    callback(name);
}

processUserIpunt(greeting);

function sum(a) {
    console.log(a + 10);
}

function input_a(callback) {
    var a = prompt('Please, insert a value');
    callback(a);
}

input_a(sum);