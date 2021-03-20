const guitars_brands = ['fender', 'gibson', 'SG', 'Epiphone', 'tagima'];

//a little example taked from de MDN site
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

console.log(materials.map(material => material.length));
//end of example

//the same example above, but without the arrow function

const materials2 = [
    'Carbon',
    'Nitrogen',
    'Oxigen',
    'Fluorine',
    'Chlorine',
    'Sulfur',
    'Phosphorus',
];

var materials2_size = materials2.map(function(materials) {
    return materials.length;
})

console.log(materials2_size);

//end of example