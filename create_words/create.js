function create(len) {
//Creates da function called "create" that receives a parameter called "len"
    let word = '';
    //creates a string variable called "word" with empty value
    const vowels = 'aeiou';
    //declares a const string variable called "vowels" with the 'aeiou' value
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    //declares a const variable called consonants and put all the alphabetical consonants
    const random = n => Math.floor(Math.random() * n) + 1;
    //declares a const variable called random and gives to it the value of a function
    //in other words: the random const becomes A FUNCTION
    //the function returns the value of n parameter calculated by some
    //mathamtical function
    //Actually, the code does the same thing that the tree lines below
    //const random = function(n) {
    //    return Math.floor(Math.random() * n) + 1;
    //}
    if(!len) len = random(10);
    //an if conditional that says 'if variable len is empty, then the value of len
    //it will be the value returned by the random function with an argument equals to 10'
    console.log(len);
    //showing the value of 'len'
    if(len < 3) len = 3;
    //an if statement that says 'if the value of the parameter len is minor
    //than 3, makes the value of len equals to 3'
    //this in conditional makes that len nevere receives a value minor that 3
    console.log(len);
    //showing the value of len

    for (let i=0; i<len; i++) {
        word += i % 2 === 0 ?
            consonants[random(consonants.length) - 1] : vowels[random(vowels.length) - 1];
            console.log(word);
    }

    return word;

}

console.log(create());