//Testando a "soma" de strings e atribuição a uma variável
var ok = "Joseph " + "Aleph " + "Jones";

//Testando a "soma" de strings e de variável e uma atribuição a uma variável
var off = "Hello, my name is " + ok;

//console.log aceita a "soma" de variáveis
console.log(ok + off);

//Testando operadores booleanos
var color = "orange";
if (color == "orange") {
    console.log("color == orange");
} else {
    console.log("color <> orange");
}
if (color != "orange") {
    console.log("color <> orange");
} else {
        console.log("color == orange");
}

//Testando valores booleanos
var life = true;
if (!life) {
    console.log("'life' is false");
} else {
    console.log("'life' is true");
}
if (life) {
    console.log("'life' is true");
} else {
    console.log("'life' is false");
}