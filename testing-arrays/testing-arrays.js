const guitars_brands = [
    'fender',
    'gibson',
    'SG',
    'Epiphone',
    'tagima'
];

console.log('Array guitars_brands: ' + guitars_brands);

var brands_size = guitars_brands.map(function(guitar_brand) {
    return guitar_brand.length;
})

console.log('Array brands_size with function expression and declaring new var: ' + brands_size);

console.log('Array guitars_brands with function expression without another var: ' + guitars_brands.map(function(guitar_brand2) {
    return guitar_brand2.length;
}))

const guitars_brands2 = [
    'PRS',
    'Dean',
    'Takamine',
    'Ibanez',
    'Washburn',
    'Yamaha',
    'Guild',
];

console.log('guitars_brands2 array: ' + guitars_brands2);
var guitars_brands2_size = guitars_brands2.map(guitars2 => guitars2.length);
console.log('guitars_brands2_size with arrow function and declaring new var: ' + guitars_brands2_size);
console.log('guitars_brands2 size of elements without declaring another var: ' + guitars_brands2.map(guitars3 => guitars3.length));

//a little example taked from de MDN site
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

console.log('Materials array: ' + materials);
console.log('Materials elements size with arrow function: ' + materials.map(material => material.length));
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

console.log('Materials2 array: ' + materials2);
console.log('Materials size array with no arrow function: ' + materials2_size);

//end of example