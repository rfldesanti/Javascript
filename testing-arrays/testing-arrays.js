
//with the 'const' statement, it's possible to maintain the value of the variable IMMUTABLE
//but, in the case of an array, you can change the values inside of it
const guitars_brands = [
    'fender',
    'gibson',
    'SG',
    'Epiphone',
    'tagima'
];

console.log('Array guitars_brands: ' + guitars_brands);

//creating a function to work in array with functiom expression and declaring a new var
var brands_size = guitars_brands.map(function(guitar_brand) {
    return guitar_brand.length;
})

console.log('Array brands_size with function expression and declaring new var: ' + brands_size);

//expressing the .map method on console.log with function expression without declaring a new var
console.log('Array guitars_brands with function expression without another var: ' + guitars_brands.map(function(guitar_brand2) {
    return guitar_brand2.length;
}))

//creating a function to work in array with an arrow function and declaring a new var
var guitars_brands_size2 = guitars_brands.map(gt_sizes => gt_sizes.length);
console.log('Arrow function to get the size of the elements declaring a new var: ' + guitars_brands_size2);

//creating a function to work in array with an arrow function without declaring a new var
console.log('Arrow function to get the size of elements without declaring new var: ' + guitars_brands.map(gt_size => gt_size.length));


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