function create(len) {
//Creates da function called "create" that receives a parameter called "len"
    let word = '';
    //creates a string variable called "word" with empty value
    const vowels = 'aeiou';
    //declares a const string variable called "vowels" with the 'aeiou' value
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    //declares a const variable called consonants and put all the alphabetical consonants
    const random = n => Math.floor(Math.random() * n) + 1;
    //declares a const variable called random and gives to it 
    if(!len) len = random(10);
    console.log(len);
    if(len < 3) len = 3;
    console.log(len);

    for (let i=0; i<len; i++) {
        word += i % 2 === 0 ?
            consonants[random(consonants.length) - 1] : vowels[random(vowels.length) - 1];
            console.log(word);
    }

    return word;

}

console.log(create());