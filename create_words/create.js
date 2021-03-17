function create(len) {

    let word = '';
    const vowels = 'aeiou';
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    const random = n => Math.floor(Math.random() * n) + 1;

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